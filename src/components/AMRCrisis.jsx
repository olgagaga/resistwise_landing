import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

const Section = styled.section`
  padding: 6rem 2rem;
  background-color: #fff;
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
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  span {
    color: #dc2626;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const FactCard = styled.div`
  background: #f8fafc;
  padding: 2rem;
  border-radius: 1rem;
  border-left: 4px solid #2563eb;
`;

const FactTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

const FactText = styled.p`
  color: #4a4a4a;
  line-height: 1.6;
  font-size: 1.1rem;
`;

const VisualizationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const MapContainer = styled.div`
  background: #f8fafc;
  border-radius: 1rem;
  padding: 1rem;
  aspect-ratio: 16/9;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  font-size: 1.25rem;
`;

const CounterContainer = styled.div`
  background: #f8fafc;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
`;

const CounterTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

const CounterValue = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #dc2626;
  margin-bottom: 0.5rem;
`;

const CounterSubtitle = styled.p`
  color: #4a4a4a;
  font-size: 1rem;
`;

const AMRCrisis = () => {
  const [counter, setCounter] = useState(0);
  
  // Simulating real-time growth of AMR cases
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => prev + 1);
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  const facts = [
    {
      title: 'Глобальная смертность',
      text: 'В 2019 году устойчивость к противомикробным препаратам стала непосредственной причиной 1,27 миллиона смертей во всём мире и способствовала ещё 4,95 миллионам смертей.'
    },
    {
      title: 'Риски неправильного использования',
      text: 'Неправильное использование антибиотиков повышает риск развития устойчивых инфекций, что увеличивает смертность на 31% и длительность пребывания в стационаре на 24%, увеличивая расходы на здравоохранение.'
    },
    {
      title: 'Избыточное назначение',
      text: 'По меньшей мере 30–40 % назначенных антибиотиков являются избыточными, так как назначаются при вирусных респираторных инфекциях.'
    }
  ];

  return (
    <Section>
      <Container>
        <Title>
          <span>⚠️</span>
          Устойчивость к Противомикробным Препаратам (УПП) – следующая «тихая пандемия»
        </Title>

        <ContentGrid>
          <FactsContainer>
            {facts.map((fact, index) => (
              <FactCard key={index}>
                <FactTitle>{fact.title}</FactTitle>
                <FactText>{fact.text}</FactText>
              </FactCard>
            ))}
          </FactsContainer>

          <VisualizationContainer>
            <MapContainer>
              Карта распространения AMR
            </MapContainer>
            
            <CounterContainer>
              <CounterTitle>Смертность от AMR в реальном времени</CounterTitle>
              <CounterValue>{counter.toLocaleString()}</CounterValue>
              <CounterSubtitle>случаев с начала отсчёта</CounterSubtitle>
            </CounterContainer>
          </VisualizationContainer>
        </ContentGrid>
      </Container>
    </Section>
  );
};

export default AMRCrisis; 