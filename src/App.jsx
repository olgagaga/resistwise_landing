import FirstScreen from './components/FirstScreen'
import HowItWorks from './components/HowItWorks'
import AMRCrisis from './components/AMRCrisis'
import KazakhstanProblem from './components/KazakhstanProblem'
import RiskCalculator from './components/RiskCalculator'
import KeyAdvantages from './components/KeyAdvantages'
import Solutions from './components/Solutions'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import ContactForm from './components/ContactForm'
import { ContactFormProvider, useContactForm } from './context/ContactFormContext'

function AppContent() {
  const { isContactFormOpen, closeContactForm } = useContactForm();

  return (
    <div className="App">
      <FirstScreen />
      <HowItWorks />
      <AMRCrisis />
      <KazakhstanProblem />
      <RiskCalculator />
      <KeyAdvantages />
      <Solutions />
      <Footer />
      <Chatbot />
      <ContactForm isOpen={isContactFormOpen} onClose={closeContactForm} />
    </div>
  )
}

function App() {
  return (
    <ContactFormProvider>
      <AppContent />
    </ContactFormProvider>
  )
}

export default App
