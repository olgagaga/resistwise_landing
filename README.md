# ResistWise - AI-Powered AMR Management Platform

<div align="center">
  <img src="public/logo-icon.svg" alt="ResistWise Logo" width="120" height="120">
  <h1>ResistWise</h1>
  <p><strong>AI-Powered Precision Antibiotic Prescriptions</strong></p>
  <p>Fighting Antimicrobial Resistance (AMR) in Real-Time</p>
  
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react" alt="React" /></a>
  <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-6.3.5-646CFF?logo=vite" alt="Vite" /></a>
  <a href="https://netlify.com/"><img src="https://img.shields.io/badge/Netlify-Deployed-00C7B7?logo=netlify" alt="Netlify" /></a>
  <a href="https://openai.com/"><img src="https://img.shields.io/badge/OpenAI-GPT--3.5-412991?logo=openai" alt="OpenAI" /></a>
  
  <br/>
  <a href="https://resistwise-landing.netlify.app/">Live Demo</a> • <a href="./docs/">Documentation</a> • <a href="./docs/API.md">API Reference</a>
</div>

---

## 📝 Project Overview

ResistWise is a comprehensive web platform designed to combat Antimicrobial Resistance (AMR) by providing AI-powered precision antibiotic prescriptions. The platform helps healthcare professionals make informed decisions about antibiotic usage through real-time resistance data and intelligent recommendations.

### Key Features
- 🤖 **AI-Powered Chatbot**: Real-time assistance for AMR-related queries
- 📊 **Risk Calculator**: Interactive tool for assessing AMR risk factors
- 🎨 **Modern UI/UX**: Responsive design with smooth animations
- 🔒 **Secure API Integration**: Serverless functions with OpenAI GPT-3.5
- 📱 **Mobile-First Design**: Optimized for all device sizes
- ⚡ **Performance Optimized**: Fast loading with Vite and modern React

## 🚀 Tech Stack

### Frontend
- **React 19.1.0** - Latest React with concurrent features
- **Vite 6.3.5** - Lightning-fast build tool and dev server
- **Emotion** - CSS-in-JS styling solution
- **Custom Fonts** - Arial Rounded MT Bold & SF Compact Rounded

### Backend & APIs
- **Netlify Functions** - Serverless backend
- **OpenAI GPT-3.5 Turbo** - AI-powered chatbot
- **RESTful API** - Clean API design

### Development Tools
- **ESLint** - Code quality and consistency
- **Git** - Version control
- **Netlify** - Deployment and hosting

## 📁 Project Structure

```
resistwise_landing/
├── src/
│   ├── components/          # React components
│   │   ├── FirstScreen.jsx  # Hero section with navigation
│   │   ├── AMRCrisis.jsx    # AMR information section
│   │   ├── HowItWorks.jsx   # Process explanation
│   │   ├── KeyAdvantages.jsx # Feature highlights
│   │   ├── LastScreen.jsx   # Contact and footer
│   │   ├── AIChatbot.jsx    # AI-powered chatbot
│   │   ├── ContactForm.jsx  # Contact form modal
│   │   └── RiskCalculator.jsx # Interactive risk assessment
│   ├── context/             # React Context for state management
│   │   └── ContactFormContext.jsx
│   ├── styles/              # CSS files
│   ├── assets/              # Images and SVGs
│   └── fonts/               # Custom font files
├── netlify/
│   └── functions/           # Serverless functions
│       └── chat.js          # OpenAI API integration
├── public/                  # Static assets
├── docs/                    # Documentation
└── package.json
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- OpenAI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/resistwise_landing.git
   cd resistwise_landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file
   echo "OPENAI_API_KEY=your_openai_api_key_here" > .env
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### Production Deployment

1. **Deploy to Netlify**
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli
   
   # Login and deploy
   netlify login
   netlify deploy --prod
   ```

2. **Set environment variables in Netlify Dashboard**
   - Go to Site Settings > Environment Variables
   - Add `OPENAI_API_KEY` with your API key

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#00A1FF` - Trust and medical professionalism
- **Secondary Purple**: `#8c1aff` - Innovation and technology
- **Background**: `#F9FAFF` - Clean, medical-grade white
- **Text**: `#1a1a1a` - High contrast for accessibility

### Typography
- **Headings**: Arial Rounded MT Bold - Professional and approachable
- **Body**: SF Compact Rounded - Modern and readable

### Components
- **Buttons**: Rounded with gradient backgrounds and hover effects
- **Cards**: Subtle shadows with rounded corners
- **Forms**: Clean inputs with focus states
- **Modals**: Backdrop blur with smooth animations

## 🤖 AI Chatbot Features

The AI chatbot is powered by OpenAI's GPT-3.5 Turbo and provides:

- **Contextual Responses**: Maintains conversation history
- **AMR Expertise**: Specialized knowledge in antimicrobial resistance
- **Russian Language Support**: Full localization
- **Real-time Processing**: Instant responses with typing indicators
- **Error Handling**: Graceful fallbacks for API issues

### Chatbot Architecture
```javascript
// System prompt for specialized AMR knowledge
const systemPrompt = `Ты - помощник по вопросам антимикробной резистентности (AMR)...`;

// Serverless function handling
exports.handler = async function(event, context) {
  // CORS handling, input validation, OpenAI API integration
};
```

## 📊 Risk Calculator

Interactive tool for assessing AMR risk factors:

- **Age-based Assessment**: Different risk levels by age group
- **Symptom Analysis**: Severity-based risk calculation
- **Geographic Factors**: Region-specific resistance patterns
- **Medical History**: Previous antibiotic usage impact
- **Hospital Exposure**: Healthcare-associated risks

## 🔧 API Documentation

### Chat Endpoint
```http
POST /.netlify/functions/chat
Content-Type: application/json

{
  "message": "string",
  "conversationHistory": [
    {
      "text": "string",
      "isBot": boolean,
      "timestamp": "ISO string"
    }
  ]
}
```

**Response:**
```json
{
  "response": "AI-generated response in Russian"
}
```

## 🚀 Performance Optimizations

### Frontend
- **Code Splitting**: Lazy loading for heavy components
- **Image Optimization**: Optimized SVGs and webp formats
- **Font Loading**: `font-display: swap` for better performance
- **CSS Optimization**: Critical CSS inlined, rest loaded asynchronously

### Backend
- **Serverless Functions**: Pay-per-use, auto-scaling
- **Caching**: Response caching for common queries
- **Error Handling**: Graceful degradation

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

### Mobile Optimizations
- Touch-friendly interface
- Optimized navigation
- Reduced animations for better performance
- Simplified layouts for small screens

## 🔒 Security Considerations

- **API Key Protection**: Environment variables only
- **Input Validation**: Server-side validation for all inputs
- **CORS Configuration**: Proper cross-origin resource sharing
- **Rate Limiting**: Built into OpenAI API
- **HTTPS Only**: Secure connections in production

## 🧪 Testing Strategy

### Manual Testing
- Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- Mobile device testing (iOS, Android)
- Accessibility testing (screen readers, keyboard navigation)

### Performance Testing
- Lighthouse audits
- Core Web Vitals monitoring
- Load time optimization

## 📈 Analytics & Monitoring

- **Error Tracking**: Console logging for debugging
- **Performance Monitoring**: Built-in browser dev tools
- **User Analytics**: Ready for Google Analytics integration

## 🔄 Development Workflow

1. **Feature Development**: Create feature branches
2. **Code Review**: Pull request reviews
3. **Testing**: Manual and automated testing
4. **Deployment**: Automatic deployment to staging
5. **Production**: Manual deployment to production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OpenAI** for providing the GPT-3.5 API
- **Netlify** for hosting and serverless functions
- **React Team** for the amazing framework
- **Vite Team** for the fast build tool

## 📞 Contact

- **Project Link**: [https://github.com/yourusername/resistwise_landing](https://github.com/yourusername/resistwise_landing)
- **Live Demo**: [https://resistwise-landing.netlify.app/](https://resistwise-landing.netlify.app/)
- **Email**: your.email@example.com

---

<div align="center">
  <p>Made with ❤️ for better healthcare</p>
  <p>Fighting AMR, one prescription at a time</p>
</div>