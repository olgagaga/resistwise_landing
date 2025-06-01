import styled from '@emotion/styled';
import { useState } from 'react';

const Section = styled.section`
  padding: 6rem 2rem;
  background-color: #fff;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 3rem;
`;

const Form = styled.form`
  background: #f8fafc;
  padding: 2rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: #1a1a1a;
  background-color: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  transition: all 0.2s;

  &:hover {
    border-color: #2563eb;
  }

  input {
    margin: 0;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #2563eb;
  color: white;
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

const ResultContainer = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  background-color: ${props => {
    switch (props.riskLevel) {
      case 'low':
        return '#dcfce7';
      case 'medium':
        return '#fef9c3';
      case 'high':
        return '#fee2e2';
      default:
        return '#f8fafc';
    }
  }};
  color: ${props => {
    switch (props.riskLevel) {
      case 'low':
        return '#166534';
      case 'medium':
        return '#854d0e';
      case 'high':
        return '#991b1b';
      default:
        return '#1a1a1a';
    }
  }};
`;

const ResultTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const ResultDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const Disclaimer = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #fef2f2;
  border-radius: 0.5rem;
  border-left: 4px solid #dc2626;
`;

const DisclaimerTitle = styled.h4`
  color: #991b1b;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const DisclaimerText = styled.p`
  color: #4a4a4a;
  font-size: 1rem;
  line-height: 1.6;
`;

const RiskCalculator = () => {
  const [formData, setFormData] = useState({
    age: '',
    symptoms: '',
    region: '',
    previousAntibiotics: '',
    hospitalStay: ''
  });
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple risk calculation logic (this is just an example)
    let riskScore = 0;
    
    if (formData.age === 'elderly') riskScore += 2;
    if (formData.symptoms === 'severe') riskScore += 3;
    if (formData.region === 'high') riskScore += 2;
    if (formData.previousAntibiotics === 'yes') riskScore += 2;
    if (formData.hospitalStay === 'yes') riskScore += 3;

    let riskLevel;
    let description;

    if (riskScore <= 3) {
      riskLevel = 'low';
      description = 'Ваш риск развития устойчивой инфекции относительно низкий. Однако помните о важности правильного использования антибиотиков и консультации с врачом.';
    } else if (riskScore <= 7) {
      riskLevel = 'medium';
      description = 'У вас средний риск развития устойчивой инфекции. Рекомендуется проконсультироваться с врачом для оценки вашего состояния.';
    } else {
      riskLevel = 'high';
      description = 'У вас повышенный риск развития устойчивой инфекции. Необходима консультация с врачом для оценки состояния и разработки плана лечения.';
    }

    setResult({ riskLevel, description });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Section>
      <Container>
        <Title>Калькулятор риска антибиотикорезистентности</Title>
        
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Возрастная группа</Label>
            <Select name="age" value={formData.age} onChange={handleChange} required>
              <option value="">Выберите возрастную группу</option>
              <option value="young">До 18 лет</option>
              <option value="adult">18-65 лет</option>
              <option value="elderly">Старше 65 лет</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Label>Тяжесть симптомов</Label>
            <Select name="symptoms" value={formData.symptoms} onChange={handleChange} required>
              <option value="">Выберите тяжесть симптомов</option>
              <option value="mild">Легкие</option>
              <option value="moderate">Умеренные</option>
              <option value="severe">Тяжелые</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Label>Регион проживания</Label>
            <Select name="region" value={formData.region} onChange={handleChange} required>
              <option value="">Выберите регион</option>
              <option value="low">Низкий уровень резистентности</option>
              <option value="medium">Средний уровень резистентности</option>
              <option value="high">Высокий уровень резистентности</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Label>Принимали ли вы антибиотики в последние 3 месяца?</Label>
            <RadioGroup>
              <RadioLabel>
                <input
                  type="radio"
                  name="previousAntibiotics"
                  value="yes"
                  checked={formData.previousAntibiotics === 'yes'}
                  onChange={handleChange}
                  required
                />
                Да
              </RadioLabel>
              <RadioLabel>
                <input
                  type="radio"
                  name="previousAntibiotics"
                  value="no"
                  checked={formData.previousAntibiotics === 'no'}
                  onChange={handleChange}
                  required
                />
                Нет
              </RadioLabel>
            </RadioGroup>
          </FormGroup>

          <FormGroup>
            <Label>Были ли вы госпитализированы в последние 6 месяцев?</Label>
            <RadioGroup>
              <RadioLabel>
                <input
                  type="radio"
                  name="hospitalStay"
                  value="yes"
                  checked={formData.hospitalStay === 'yes'}
                  onChange={handleChange}
                  required
                />
                Да
              </RadioLabel>
              <RadioLabel>
                <input
                  type="radio"
                  name="hospitalStay"
                  value="no"
                  checked={formData.hospitalStay === 'no'}
                  onChange={handleChange}
                  required
                />
                Нет
              </RadioLabel>
            </RadioGroup>
          </FormGroup>

          <SubmitButton type="submit">Оценить риск</SubmitButton>
        </Form>

        {result && (
          <ResultContainer riskLevel={result.riskLevel}>
            <ResultTitle>
              {result.riskLevel === 'low' && 'Низкий риск'}
              {result.riskLevel === 'medium' && 'Средний риск'}
              {result.riskLevel === 'high' && 'Высокий риск'}
            </ResultTitle>
            <ResultDescription>{result.description}</ResultDescription>
          </ResultContainer>
        )}

        <Disclaimer>
          <DisclaimerTitle>
            <span>⚠️</span>
            Внимание!
          </DisclaimerTitle>
          <DisclaimerText>
            Этот калькулятор предназначен только для образовательных целей и не является медицинской рекомендацией. 
            Для оценки состояния здоровья и назначения лечения обратитесь к квалифицированному врачу.
          </DisclaimerText>
        </Disclaimer>
      </Container>
    </Section>
  );
};

export default RiskCalculator; 