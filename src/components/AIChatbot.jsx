import React, { useState, useRef, useEffect } from 'react';
import './AIChatbot.css';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Здравствуйте! Я ваш помощник по вопросам антимикробной резистентности (AMR). Чем могу помочь?',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async (message) => {
    if (!message.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: message,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      console.log('Sending message to API...');
      
      // Try the direct Netlify functions path first
      const apiUrl = '/.netlify/functions/chat';
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
          conversationHistory: messages.slice(-10)
        })
      });

      console.log('Response status:', response.status);
      console.log('Response URL:', response.url);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response text:', errorText);
        
        if (response.status === 404) {
          throw new Error('Функция чата не найдена. Проверьте настройки развертывания.');
        }
        
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      const responseText = await response.text();
      console.log('Response text:', responseText);

      let data;
      try {
        data = JSON.parse(responseText);
      } catch (parseError) {
        console.error('JSON parse error:', parseError);
        console.error('Response text that failed to parse:', responseText);
        throw new Error('Неверный ответ от сервера');
      }

      if (!data.response) {
        throw new Error('Ответ от сервера не содержит данных');
      }
      
      const botMessage = {
        id: Date.now() + 1,
        text: data.response,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = {
        id: Date.now() + 1,
        text: `Ошибка: ${error.message}. Попробуйте еще раз позже.`,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputValue);
    }
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="ai-chatbot-container">
      {/* Chat Window */}
      <div className={`ai-chatbot-window ${isOpen ? 'open' : ''}`}>
        <div className="ai-chatbot-header">
          <div className="ai-chatbot-title">
            <div className="ai-chatbot-avatar">🤖</div>
            <div>
              <h3>ResistWise Assistant</h3>
              <span className="ai-chatbot-status">
                {isLoading ? 'Печатает...' : 'Онлайн'}
              </span>
            </div>
          </div>
          <button 
            className="ai-chatbot-close"
            onClick={() => setIsOpen(false)}
            aria-label="Закрыть чат"
          >
            ×
          </button>
        </div>

        <div className="ai-chatbot-messages">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`ai-chatbot-message ${message.isBot ? 'bot' : 'user'}`}
            >
              <div className="ai-chatbot-message-content">
                {message.text}
              </div>
              <div className="ai-chatbot-message-time">
                {formatTime(message.timestamp)}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="ai-chatbot-message bot">
              <div className="ai-chatbot-typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="ai-chatbot-input-container">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Введите ваш вопрос..."
            className="ai-chatbot-input"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="ai-chatbot-send"
            disabled={!inputValue.trim() || isLoading}
            aria-label="Отправить сообщение"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </form>
      </div>

      {/* Chat Button */}
      <button
        className="ai-chatbot-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Открыть чат"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 15A2 2 0 0 1 19 17H7L4 20V5A2 2 0 0 1 6 3H19A2 2 0 0 1 21 5Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default AIChatbot;