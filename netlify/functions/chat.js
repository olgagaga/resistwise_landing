const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const systemPrompt = `Ты - помощник по вопросам антимикробной резистентности (AMR). Твоя задача - помогать пользователям понимать проблемы, связанные с устойчивостью бактерий к антибиотикам.

Ты должен:
- Объяснять сложные медицинские концепты простым языком
- Предоставлять актуальную информацию о AMR
- Рекомендовать правильное использование антибиотиков
- Объяснять риски неправильного использования антибиотиков
- Отвечать на вопросы о ResistWise и его возможностях
- Всегда отвечать на русском языке
- Быть дружелюбным и профессиональным

Если тебя спрашивают о ResistWise, расскажи что это AI-система для точного назначения антибиотиков, которая помогает врачам назначать правильные антибиотики в нужное время, используя ИИ и данные о резистентности в реальном времени.

Важно: Всегда отвечай на русском языке и будь полезным в контексте антимикробной резистентности.`;

exports.handler = async function(event, context) {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: 'Method not allowed' })
    };
  }

  try {
    const body = JSON.parse(event.body);
    const { message, conversationHistory = [] } = body;

    if (!message || typeof message !== 'string') {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Message is required and must be a string' })
      };
    }

    // Prepare conversation for OpenAI
    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory.slice(-10).map(msg => ({
        role: msg.isBot ? 'assistant' : 'user',
        content: msg.text
      })),
      { role: 'user', content: message }
    ];

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: messages,
      max_tokens: 500,
      temperature: 0.7,
    });

    const response = completion.choices[0].message.content;

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ response })
    };
  } catch (error) {
    console.error('Error in chat endpoint:', error);
    
    let statusCode = 500;
    let errorMessage = 'Произошла ошибка при обработке запроса';
    
    if (error.code === 'insufficient_quota') {
      statusCode = 429;
      errorMessage = 'Превышен лимит запросов. Попробуйте позже.';
    } else if (error.code === 'invalid_api_key') {
      statusCode = 401;
      errorMessage = 'Ошибка аутентификации API';
    }

    return {
      statusCode,
      headers,
      body: JSON.stringify({ 
        error: errorMessage,
        details: error.message 
      })
    };
  }
};