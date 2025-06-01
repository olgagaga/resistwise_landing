import styled from '@emotion/styled';

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 80vh;
`;

const ContentSection = styled.div`
  flex: 1;
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  line-height: 1.2;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #4a4a4a;
  margin-bottom: 2rem;
  line-height: 1.6;
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

const IllustrationSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Illustration = styled.img`
  max-width: 100%;
  height: auto;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <ContentSection>
        <Title>
          ResistWise – борьба с бактериальной устойчивостью в реальном времени.
        </Title>
        <Subtitle>
          ResistWise помогает врачам назначать правильные антибиотики в каждый момент времени, используя ИИ и актуальные данные.
        </Subtitle>
        <CTAButton onClick={() => window.location.href = '#demo-form'}>
          Запросить демо
        </CTAButton>
      </ContentSection>
      <IllustrationSection>
        <Illustration 
          src="/hero-illustration.svg" 
          alt="AI-powered antibiotic resistance prediction illustration"
        />
      </IllustrationSection>
    </HeroContainer>
  );
};

export default Hero; 