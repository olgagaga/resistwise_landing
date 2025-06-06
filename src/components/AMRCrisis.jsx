import { useState, useEffect } from 'react';
import './AMRCrisis.css';

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
    <section id="amr-crisis" className="amr-crisis-section">
      <div className="amr-crisis-container">
        <h2 className="amr-crisis-title">
          <span>⚠️</span>
          Устойчивость к Противомикробным Препаратам (УПП) – следующая «тихая пандемия»
        </h2>

        <div className="amr-crisis-content-grid">
          <div className="amr-crisis-facts-container">
            {facts.map((fact, index) => (
              <div key={index} className="amr-crisis-fact-card">
                <h3 className="amr-crisis-fact-title">{fact.title}</h3>
                <p className="amr-crisis-fact-text">{fact.text}</p>
              </div>
            ))}
          </div>

          <div className="amr-crisis-visualization-container">
            <div className="amr-crisis-map-container">
              Карта распространения AMR
            </div>
            
            <div className="amr-crisis-counter-container">
              <h3 className="amr-crisis-counter-title">Смертность от AMR в реальном времени</h3>
              <div className="amr-crisis-counter-value">{counter.toLocaleString()}</div>
              <p className="amr-crisis-counter-subtitle">случаев с начала отсчёта</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AMRCrisis; 