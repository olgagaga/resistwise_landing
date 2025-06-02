import styled from '@emotion/styled';
import { useState } from 'react';

const ChatContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
`;

const ChatWindow = styled.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 350px;
  height: 450px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.3s ease;
  transform: ${props => props.isOpen ? 'scale(1)' : 'scale(0)'};
  transform-origin: bottom right;
  opacity: ${props => props.isOpen ? '1' : '0'};
`;

const ChatHeader = styled.div`
  background: #8c1aff;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChatTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.25rem;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const MessagesContainer = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Message = styled.div`
  max-width: 80%;
  padding: 0.75rem 1rem;
  border-radius: 1rem;
  font-size: 0.9rem;
  line-height: 1.4;
  ${props => props.isBot ? `
    background: #f3f4f6;
    color: #1f2937;
    align-self: flex-start;
    border-bottom-left-radius: 0.25rem;
  ` : `
    background: #8c1aff;
    color: white;
    align-self: flex-end;
    border-bottom-right-radius: 0.25rem;
  `}
`;

const InputContainer = styled.div`
  padding: 1rem;
  border-top: 1px solid #e5e7eb;
  display: flex;
  gap: 0.5rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #8c1aff;
  }
`;

const SendButton = styled.button`
  background: #8c1aff;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #6600cc;
    transform: translateY(-1px);
  }

  &:disabled {
    background:rgb(230, 147, 253);
    cursor: not-allowed;
    transform: none;
  }
`;

const ChatButton = styled.button`
  background: #8c1aff;
  color: white;
  border: none;
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #6600cc;
    transform: translateY(-2px);
  }
`;

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Здравствуйте! Чем я могу вам помочь?', isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: inputValue, isBot: false }]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: 'Спасибо за ваш вопрос! Наш специалист свяжется с вами в ближайшее время.',
        isBot: true
      }]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <ChatContainer>
      <ChatWindow isOpen={isOpen}>
        <ChatHeader>
          <ChatTitle>ResistWise Assistant</ChatTitle>
          <CloseButton onClick={() => setIsOpen(false)}>×</CloseButton>
        </ChatHeader>
        <MessagesContainer>
          {messages.map((message, index) => (
            <Message key={index} isBot={message.isBot}>
              {message.text}
            </Message>
          ))}
        </MessagesContainer>
        <InputContainer>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Введите ваше сообщение..."
          />
          <SendButton
            onClick={handleSend}
            disabled={!inputValue.trim()}
          >
            →
          </SendButton>
        </InputContainer>
      </ChatWindow>
      <ChatButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '×' : '💬'}
      </ChatButton>
    </ChatContainer>
  );
};

export default Chatbot; 