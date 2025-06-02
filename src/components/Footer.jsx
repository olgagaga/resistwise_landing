import styled from '@emotion/styled';
import { useState } from 'react';

const FooterSection = styled.footer`
  background-color: #1a1a1a;
  color: white;
  padding: 4rem 2rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Link = styled.a`
  color: #e2e8f0;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #8c1aff;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: #e2e8f0;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #8c1aff;
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #4a5568;
  border-radius: 0.5rem;
  background-color: #2d3748;
  color: white;
  font-size: 1rem;

  &::placeholder {
    color: #a0aec0;
  }

  &:focus {
    outline: none;
    border-color: #8c1aff;
  }
`;

const SubscribeButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #8c1aff;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #6600cc;
    transform: translateY(-2px);
  }
`;

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription logic
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <FooterSection>
      <Container>
        <Section>
          <Title>Быстрые ссылки</Title>
          <QuickLinks>
            <Link href="#about">О нас</Link>
            <Link href="#how-it-works">Как это работает</Link>
            <Link href="#cases">Кейсы</Link>
            <Link href="#contact">Контакты</Link>
          </QuickLinks>
        </Section>

        <Section>
          <Title>Социальные сети и блог</Title>
          <p>Подписывайтесь на обновления УПП и ИИ медицине</p>
          <SocialLinks>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer">Telegram</SocialLink>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer">LinkedIn</SocialLink>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer">Twitter</SocialLink>
          </SocialLinks>
        </Section>

        <Section>
          <Title>Подписка на рассылку</Title>
          <p>Будьте в курсе новостей УПП</p>
          <NewsletterForm onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Введите ваш email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <SubscribeButton type="submit">
              Подписаться
            </SubscribeButton>
          </NewsletterForm>
        </Section>
      </Container>
    </FooterSection>
  );
};

export default Footer; 