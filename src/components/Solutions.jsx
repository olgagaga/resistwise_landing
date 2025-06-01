import styled from '@emotion/styled';
import { useState } from 'react';
import { useContactForm } from '../context/ContactFormContext';

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
  margin-bottom: 4rem;
`;

const TabsContainer = styled.div`
  margin-bottom: 4rem;
`;

const TabsList = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Tab = styled.button`
  padding: 1rem 2rem;
  background-color: ${props => props.active ? '#2563eb' : '#f8fafc'};
  color: ${props => props.active ? 'white' : '#1a1a1a'};
  border: none;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;

  &:hover {
    background-color: ${props => props.active ? '#1d4ed8' : '#e2e8f0'};
  }
`;

const TabContent = styled.div`
  background: #f8fafc;
  padding: 3rem;
  border-radius: 1rem;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const TabDescription = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: #1a1a1a;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
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

const Solutions = () => {
  const [activeTab, setActiveTab] = useState('hospitals');
  const { openContactForm } = useContactForm();

  const tabs = [
    {
      id: 'hospitals',
      label: 'Для больниц',
      content: 'Снижение внутрибольничных инфекций и случаев неэффективного лечения'
    },
    {
      id: 'government',
      label: 'Для правительства',
      content: 'Улучшение мониторинга УПП и упрощение разработки национальной политики'
    },
    {
      id: 'researchers',
      label: 'Для исследователей и фармкомпаний',
      content: 'Доступ к реальным данным устойчивости к противомикробным препаратам'
    }
  ];

  return (
    <Section id="solutions">
      <Container>
        <Title>Разработано для масштабных систем здравоохранения</Title>

        <TabsContainer>
          <TabsList>
            {tabs.map(tab => (
              <Tab
                key={tab.id}
                active={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </Tab>
            ))}
          </TabsList>

          <TabContent>
            <TabDescription>
              {tabs.find(tab => tab.id === activeTab)?.content}
            </TabDescription>
          </TabContent>
        </TabsContainer>

        <CTAButton onClick={openContactForm}>
          Связаться с нами
        </CTAButton>
      </Container>
    </Section>
  );
};

export default Solutions; 