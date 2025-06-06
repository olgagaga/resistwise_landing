import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Patient Data Input',
      description: 'Analysis, symptoms, demographics'
    },
    {
      number: '2',
      title: 'AI Analyzes Resistance Trends',
      description: 'Real-time data from hospitals and environment'
    },
    {
      number: '3',
      title: 'Doctor Receives Optimized Recommendations',
      description: 'Minimizing unnecessary antibiotic use'
    },
    {
      number: '4',
      title: 'Better Treatment, Controlled Resistance',
      description: 'Optimal outcomes for patients and healthcare system'
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="how-it-works-container">
        <h2 className="how-it-works-title">
          AI-Powered Antibiotic Stewardship
        </h2>
        <p className="how-it-works-subtitle">
          Smarter, Safer, and Faster prescription decisions – ResistWise helps
          doctors prescribe the right antibiotic at the right time
        </p>

        <div className="how-it-works-steps-container">
          {steps.map((step, index) => (
            <div key={index} className="how-it-works-step">
              <div className="how-it-works-step-number">
                <span>{step.number}</span>
              </div>
              <div className="how-it-works-step-content">
                <h3 className="how-it-works-step-title">{step.title}</h3>
                <span className="how-it-works-step-separator">–</span>
                <p className="how-it-works-step-description">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="how-it-works-video-section">
          <div className="how-it-works-video-container">
            <div className="how-it-works-video-placeholder">
              Video demonstration of the system
            </div>
          </div>
          <button
            className="how-it-works-cta-button"
            onClick={() => (window.location.href = "/cases")}
          >
            See it in action
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default HowItWorks; 