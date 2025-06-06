import { useState, useEffect } from 'react';
import './AMRCrisis.css';
import misconceptionBg from '../assets/misconception-bg.svg';

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
      title: "1.27M",
      subtitle: "Deaths in 2019",
      text: "Bacterial AMR was directly responsible for 1.27 million deaths worldwide",
    },
    {
      title: "31%",
      subtitle: "Higher Death Risks",
      text: "Inappropriate antibiotic use increases death risk by 31% and hospital stays by 24%",
    },
    {
      title: "30-40%",
      subtitle: "Unnecessary Prescriptions",
      text: "Inappropriate antibiotic use increases death risk by 31% and hospital stays by 24%",
    },
  ];

  return (
    <section id="amr-crisis" className="amr-crisis-section">
      <div className="amr-crisis-container">
        <h2 className="amr-crisis-title">The Next Pandemic</h2>
        <h3>
          Antimicrobial Resistance is the Next Silent Pandemic. The global
          crisis requires immediate action and intelligent solutions
        </h3>

        <div className="amr-crisis-content-grid">
          <div className="amr-crisis-facts-container">
            {facts.map((fact, index) => (
              <div key={index} className="amr-crisis-fact-card">
                <h3 className="amr-crisis-fact-title">{fact.title}</h3>
                <h2 className="amr-crisis-fact-subtitle">{fact.subtitle}</h2>
                <p className="amr-crisis-fact-text">{fact.text}</p>
              </div>
            ))}
            <div className="amr-crisis-fact-card amr-crisis-wide-card">
              <h3 className="amr-crisis-fact-title">91.9% of Adults in Kazakhstan</h3>
              <h2 className="amr-crisis-fact-wide-text">Mistakenly Believe Antibiotics Treat The Common Cold</h2>
            </div>
          </div>

          {/* <div className="amr-crisis-visualization-container">
            <div className="amr-crisis-map-container">
              Карта распространения AMR
            </div>

            <div className="amr-crisis-counter-container">
              <h3 className="amr-crisis-counter-title">
                Смертность от AMR в реальном времени
              </h3>
              <div className="amr-crisis-counter-value">
                {counter.toLocaleString()}
              </div>
              <p className="amr-crisis-counter-subtitle">
                случаев с начала отсчёта
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AMRCrisis; 