import FirstScreen from './components/FirstScreen'
import HowItWorks from './components/HowItWorks'
import AMRCrisis from './components/AMRCrisis'
import RiskCalculator from './components/RiskCalculator'
import KeyAdvantages from './components/KeyAdvantages'
import Solutions from './components/Solutions'
import Chatbot from './components/Chatbot'
import ContactForm from './components/ContactForm'
import LastScreen from './components/LastScreen'
import { ContactFormProvider, useContactForm } from './context/ContactFormContext'

function AppContent() {
  const { isContactFormOpen, closeContactForm } = useContactForm();

  return (
    <div className="App">
      <FirstScreen />
      <AMRCrisis />
      <HowItWorks />
      {/* <RiskCalculator /> */}
      <KeyAdvantages />
      {/* <Solutions /> */}
      <LastScreen />
      {/* <Chatbot /> */}
      <ContactForm isOpen={isContactFormOpen} onClose={closeContactForm} />
    </div>
  );
}

function App() {
  return (
    <ContactFormProvider>
      <AppContent />
    </ContactFormProvider>
  )
}

export default App
