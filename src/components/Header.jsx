import { useState, useEffect } from 'react';
import { useContactForm } from '../context/ContactFormContext';
import './Header.css';

const Header = () => {
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
    <header className={`header-container ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <a href="#" className="logo">
          <span className="logo-text">ResistWise</span>
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
  );
};

export default Header; 