# Architecture Documentation

## System Overview

ResistWise is a modern web application built with a microservices-inspired architecture, leveraging serverless functions for backend processing and a React-based frontend for user interaction.

## Architecture Diagram

```
┌───────────────┐    ┌───────────────┐    ┌───────────────┐
│   Browser    │    │   Netlify     │    │   OpenAI      │
│  (Frontend)  │<-->|  Functions    │<-->|   API         │
└───────────────┘    └───────────────┘    └───────────────┘
```

## Frontend Architecture

- **React 19** with functional components and hooks
- **Component Structure**: Modular, reusable components (FirstScreen, AIChatbot, RiskCalculator, etc.)
- **State Management**: Context API for global state (e.g., contact form)
- **Styling**: Emotion CSS-in-JS and custom fonts

## Backend Architecture

- **Netlify Functions**: Serverless, stateless, auto-scaling
- **OpenAI Integration**: Secure API key via environment variable
- **API Endpoint**: `/chat` for AI chatbot, validates and forwards requests to OpenAI

## Data Flow

1. User interacts with React UI
2. Chatbot sends POST request to Netlify Function
3. Function validates input, calls OpenAI API
4. OpenAI responds, function returns response to frontend
5. UI updates with AI answer

## Security
- API key never exposed to frontend
- CORS headers set in serverless function
- Input validation on all API endpoints

## Scalability
- Frontend served via CDN for global reach
- Serverless backend scales automatically
- Stateless design for easy horizontal scaling

## Error Handling
- Graceful error messages in UI
- Serverless function returns structured error responses

## Future Improvements
- TypeScript migration
- More granular state management (Redux, Zustand)
- Automated testing and CI/CD 