# API Documentation

## Overview

The ResistWise API provides AI-powered chat functionality for antimicrobial resistance (AMR) queries. The API is built using Netlify Functions and integrates with OpenAI's GPT-3.5 Turbo model.

## Base URL

```
https://your-site.netlify.app/.netlify/functions
```

## Authentication

The API uses OpenAI API key authentication, which is handled server-side through environment variables.

## Endpoints

### Chat Endpoint

**POST** `/chat`

Sends a message to the AI chatbot and receives a contextual response.

#### Request Headers

```
Content-Type: application/json
```

#### Request Body

```json
{
  "message": "string (required)",
  "conversationHistory": [
    {
      "text": "string",
      "isBot": boolean,
      "timestamp": "ISO string"
    }
  ]
}
```

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `message` | string | Yes | The user's message |
| `conversationHistory` | array | No | Previous conversation messages for context |

#### Response

**Success (200)**
```json
{
  "response": "AI-generated response in Russian"
}
```

**Error Responses**

**400 Bad Request**
```json
{
  "error": "Message is required and must be a string"
}
```

**401 Unauthorized**
```json
{
  "error": "Ошибка аутентификации API",
  "details": "Invalid API key"
}
```

**429 Too Many Requests**
```json
{
  "error": "Превышен лимит запросов. Попробуйте позже.",
  "details": "API quota exceeded"
}
```

**500 Internal Server Error**
```json
{
  "error": "Произошла ошибка при обработке запроса",
  "details": "Error details"
}
```

#### Example Usage

```javascript
const response = await fetch('/.netlify/functions/chat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    message: 'Что такое антимикробная резистентность?',
    conversationHistory: []
  })
});

const data = await response.json();
console.log(data.response);
```

## Error Handling

### Common Error Codes

| Code | Description | Solution |
|------|-------------|----------|
| 400 | Invalid request format | Check request body structure |
| 401 | API key not configured | Set OPENAI_API_KEY environment variable |
| 429 | Rate limit exceeded | Wait before making more requests |
| 500 | Server error | Check server logs for details |

### Best Practices

1. **Always handle errors gracefully**
2. **Implement retry logic for 429 errors**
3. **Cache responses when appropriate**
4. **Validate input before sending**

## Rate Limiting

The API is subject to OpenAI's rate limits:
- 3,500 requests per minute for GPT-3.5 Turbo
- Implement exponential backoff for retries

## CORS

The API supports CORS and allows requests from any origin:

```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Content-Type
```

## Testing

### Test Endpoint

**GET** `/test`

Returns a simple test response to verify the function is working.

**Response:**
```json
{
  "message": "Function is working!",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### Local Testing

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Start local development
netlify dev

# Test the endpoint
curl -X POST http://localhost:8888/.netlify/functions/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"test"}'
```
