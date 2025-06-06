import './KeyAdvantages.css';
import { useContactForm } from '../context/ContactFormContext';

const KeyAdvantages = () => {
  const { openContactForm } = useContactForm();
  
  const features = [
    {
      icon: "🎯",
      title: "Personalized AI-driven Prescriptions",
      description:
        "Goes beyond guidelines with patient-specific resistance insights and real-time adaptation",
    },
    {
      icon: "🔗",
      title: "Seamless EHR Integration",
      description:
        "Works with existing hospital systems for easy adoption and streamlined workflows",
    },
    {
      icon: "📈",
      title: "Scalable Solutions",
      description:
        "From individual hospitals to nationwide AI-driven AMR monitoring systems",
    },
  ];

  return (
    <section id="advantages" className="key-advantages-section">
      <div className="key-advantages-container">
        <h2 className="key-advantages-title">Trust</h2>
        <h3>
          Why Hospitals & Governments Trust ResistWise? Three key differentiators that set us apart.
        </h3>

        <div className="key-advantages-grid">
          {features.map((feature, index) => (
            <div key={index} className="key-advantages-card">
              <div className="key-advantages-icon">{feature.icon}</div>
              <h3 className="key-advantages-card-title">{feature.title}</h3>
              <p className="key-advantages-card-description">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyAdvantages; 