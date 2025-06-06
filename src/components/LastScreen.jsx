import { useState, useEffect } from 'react';
import { useContactForm } from '../context/ContactFormContext';
import heroBg from '../assets/hero-bg.svg';
import arrowDown from '../assets/ArrowDownCircle.svg';
import logo from '../assets/logo.svg';
import './LastScreen.css';

const LastScreen = () => {
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
    <div className="last-screen-first-screen">
      <div className="last-screen-hero-background">
        <img src={heroBg} alt="" className="last-screen-bg-image" />
      </div>

      <div className="last-screen-hero-content">
        <div className="last-screen-content-section">
          <h1 className="last-screen-title">Work With Us</h1>
          <p className="last-screen-subtitle">
            Request a free demo of ResistWise and get to know our software.
          </p>
          <button className="last-screen-cta-button" onClick={openContactForm}>
            BOOK A DEMO
          </button>
        </div>
      </div>

      <footer className={`footer-container ${isScrolled ? "footer-scrolled" : ""}`}>
        <nav className="footer-nav">
          <a href="#" className="footer-logo">
            <img src={logo} alt="ResistWise Logo" className="footer-logo-image" />
          </a>

          <div className={`footer-nav-links ${isMenuOpen ? "footer-nav-open" : ""}`}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="footer-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default LastScreen; 