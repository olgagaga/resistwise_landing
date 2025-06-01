import styled from '@emotion/styled';

const Section = styled.section`
  padding: 6rem 2rem;
  background-color: #f1f5f9;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const QuoteContainer = styled.div`
  background: white;
  padding: 4rem;
  border-radius: 1.5rem;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
  text-align: center;
  position: relative;
  max-width: 800px;
  margin: 0 auto;
`;

const QuoteMark = styled.div`
  font-size: 8rem;
  color: #2563eb;
  opacity: 0.1;
  position: absolute;
  top: -2rem;
  left: 2rem;
  font-family: Georgia, serif;
`;

const QuoteText = styled.blockquote`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.2;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
`;

const Source = styled.div`
  font-size: 1.1rem;
  color: #4a4a4a;
  font-style: italic;
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(#2563eb 1px, transparent 1px);
  background-size: 30px 30px;
  opacity: 0.1;
  z-index: 0;
`;

const KazakhstanProblem = () => {
  return (
    <Section id="kazakhstan">
      <BackgroundPattern />
      <Container>
        <QuoteContainer>
          <QuoteMark>"</QuoteMark>
          <QuoteText>
            91.9% жителей Казахстана ошибочно верят, что антибиотики необходимы для лечения простуды
          </QuoteText>
          <Source>
            Источник: Anapova, Guess et all (2019)
          </Source>
        </QuoteContainer>
      </Container>
    </Section>
  );
};

export default KazakhstanProblem; 