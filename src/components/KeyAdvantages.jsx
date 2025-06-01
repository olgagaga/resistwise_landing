import styled from '@emotion/styled';
import { useContactForm } from '../context/ContactFormContext';

const Section = styled.section`
  padding: 6rem 2rem;
  background-color: #f8fafc;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 4rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const FeatureCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconContainer = styled.div`
  width: 64px;
  height: 64px;
  background: #2563eb;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  font-size: 2rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: #4a4a4a;
  line-height: 1.6;
  font-size: 1.1rem;
`;

const CTAButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 1rem 2rem;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #1d4ed8;
    transform: translateY(-2px);
  }
`;

const KeyAdvantages = () => {
  const { openContactForm } = useContactForm();
  
  const features = [
    {
      icon: '🤖',
      title: 'Персонализированные назначения на основе ИИ',
      description: 'Учитывает индивидуальные особенности пациента, а не только общие рекомендации'
    },
    {
      icon: '📱',
      title: 'Интеграция c электронным паспортом здоровья',
      description: 'Простая настройка для больниц'
    },
    {
      icon: '📈',
      title: 'Масштабируемость',
      description: 'От отдельной клиники до национального уровня мониторинга устойчивости к противомикробным препаратам'
    }
  ];

  return (
    <Section id="advantages">
      <Container>
        <Title>Почему государственные учреждения доверяют ResistWise?</Title>
        
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <IconContainer>
                {feature.icon}
              </IconContainer>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>

        <CTAButton onClick={openContactForm}>
          Связаться с нами
        </CTAButton>
      </Container>
    </Section>
  );
};

export default KeyAdvantages; 