import styled from '@emotion/styled';

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

const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const Step = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const StepNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #2563eb;
  margin-bottom: 1rem;
`;

const StepTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`;

const StepDescription = styled.p`
  color: #4a4a4a;
  line-height: 1.6;
`;

const VideoSection = styled.div`
  margin: 4rem 0;
  text-align: center;
`;

const VideoContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  aspect-ratio: 16/9;
  background-color: #e5e7eb;
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: 2rem;
`;

const VideoPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  font-size: 1.25rem;
`;

const CTAButton = styled.button`
  background-color: #2563eb;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1d4ed8;
  }
`;

const HowItWorks = () => {
  const steps = [
    {
      number: '1️⃣',
      title: 'Ввод данных пациента',
      description: 'Анализы, симптомы, демография'
    },
    {
      number: '2️⃣',
      title: 'ИИ анализирует тренды резистентности',
      description: 'Данные из больниц и окружения в реальном времени'
    },
    {
      number: '3️⃣',
      title: 'Врач получает оптимизированные рекомендации',
      description: 'Минимизация избыточного использования антибиотиков'
    },
    {
      number: '4️⃣',
      title: 'Лучшее лечение, сдерживание устойчивости',
      description: 'Оптимальные результаты для пациента и системы здравоохранения'
    }
  ];

  return (
    <Section id="how-it-works">
      <Container>
        <Title>Назначение антибиотиками с помощью ИИ – умнее, безопаснее, быстрее</Title>
        
        <StepsContainer>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepNumber>{step.number}</StepNumber>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Step>
          ))}
        </StepsContainer>

        <VideoSection>
          <VideoContainer>
            <VideoPlaceholder>
              Видео-демонстрация работы системы
            </VideoPlaceholder>
          </VideoContainer>
          <CTAButton onClick={() => window.location.href = '/cases'}>
            Посмотреть в действии
          </CTAButton>
        </VideoSection>
      </Container>
    </Section>
  );
};

export default HowItWorks; 