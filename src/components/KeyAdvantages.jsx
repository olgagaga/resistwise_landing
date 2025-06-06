import './KeyAdvantages.css';
import { useContactForm } from '../context/ContactFormContext';

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
    <section id="advantages" className="key-advantages-section">
      <div className="key-advantages-container">
        <h2 className="key-advantages-title">
          Почему государственные учреждения доверяют ResistWise?
        </h2>
        
        <div className="key-advantages-grid">
          {features.map((feature, index) => (
            <div key={index} className="key-advantages-card">
              <div className="key-advantages-icon">
                {feature.icon}
              </div>
              <h3 className="key-advantages-card-title">{feature.title}</h3>
              <p className="key-advantages-card-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <button 
          className="key-advantages-cta-button"
          onClick={openContactForm}
        >
          Связаться с нами
        </button>
      </div>
    </section>
  );
};

export default KeyAdvantages; 