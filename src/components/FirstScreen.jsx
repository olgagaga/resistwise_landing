import { useState, useEffect } from 'react';
import { useContactForm } from '../context/ContactFormContext';
import logo from '../assets/logo.svg';
import heroBg from '../assets/hero-bg.svg';
import arrowDown from '../assets/ArrowDownCircle.svg';
import './FirstScreen.css';

const FirstScreen = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openContactForm } = useContactForm();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollDown = () => {
    const nextSection = document.getElementById('amr-crisis');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { href: '#how-it-works', label: 'HOME' },
    { href: '#amr-crisis', label: 'ABOUT' },
    { href: '#kazakhstan', label: 'FEATURES' },
    { href: '#calculator', label: 'RESULTS' },
    { href: '#advantages', label: 'CONTACT' },
  ];

  return (
    <div className="first-screen">
      <div className="hero-background">
        <img src={heroBg} alt="" className="bg-image" />
      </div>

      <header className={`header-container ${isScrolled ? "scrolled" : ""}`}>
        <nav className="nav">
          <a href="#" className="logo">
            <img src={logo} alt="ResistWise Logo" className="logo-image" />
          </a>

          <button
            className="menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>

          <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            {/* <button
              className="contact-button"
              onClick={() => {
                openContactForm();
                setIsMenuOpen(false);
              }}
            >
              BOOK A DEMO
            </button> */}
          </div>
        </nav>
      </header>

      <div className="hero-content">
        <div className="content-section">
          <h1 className="title">Fighting AMR in Real-Time.</h1>
          <p className="subtitle">
            AI-Powered Precision Antibiotic Prescriptions – ResistWise helps
            doctors prescribe the right antibiotic at the right time by
            leveraging AI and real-time resistance data.
          </p>
          <button className="cta-button" onClick={openContactForm}>
            BOOK A DEMO
          </button>
        </div>
      </div>

      <button className="scroll-down" onClick={handleScrollDown}>
        <img src={arrowDown} alt="Scroll down" />
      </button>
    </div>
  );
};

export default FirstScreen; 