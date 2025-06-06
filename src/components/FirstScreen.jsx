import { useState, useEffect } from 'react';
import { useContactForm } from '../context/ContactFormContext';
import logo from '../assets/logo.svg';
import heroBg from '../assets/hero-bg.svg';
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

  const navLinks = [
    { href: '#how-it-works', label: 'Как это работает' },
    { href: '#amr-crisis', label: 'УПП кризис' },
    { href: '#kazakhstan', label: 'Казахстан' },
    { href: '#calculator', label: 'Калькулятор' },
    { href: '#advantages', label: 'Преимущества' },
    { href: '#solutions', label: 'Решения' },
  ];

  return (
    <div className="first-screen">
      <div className="hero-background">
        <img src={heroBg} alt="" className="bg-image" />
      </div>
      
      <header className={`header-container ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="nav">
          <a href="#" className="logo">
            <img src={logo} alt="ResistWise Logo" className="logo-image" />
          </a>

          <button 
            className="menu-button" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>

          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button 
              className="contact-button"
              onClick={() => {
                openContactForm();
                setIsMenuOpen(false);
              }}
            >
              Связаться с нами
            </button>
          </div>
        </nav>
      </header>

      <div className="hero-content">
        <div className="content-section">
          <h1 className="title">
            ResistWise – борьба с бактериальной устойчивостью в реальном времени.
          </h1>
          <p className="subtitle">
            ResistWise помогает врачам назначать правильные антибиотики в каждый момент времени, используя ИИ и актуальные данные.
          </p>
          <button className="cta-button" onClick={openContactForm}>
            Запросить демо
          </button>
        </div>
        <div className="illustration-section">
          <img 
            src="/src/assets/Hero.png" 
            alt="AI-powered antibiotic resistance prediction illustration"
            className="illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstScreen; 