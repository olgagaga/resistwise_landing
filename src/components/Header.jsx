import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 1rem 2rem;
  transition: all 0.3s ease;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  text-decoration: none;
`;

const LogoText = styled.span`
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: white;
    flex-direction: column;
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled.a`
  color: #4a5568;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
  white-space: nowrap;

  &:hover {
    color: #2563eb;
  }
`;

const ContactButton = styled.a`
  padding: 0.5rem 1.5rem;
  background-color: #2563eb;
  color: white;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s;

  &:hover {
    background-color: #1d4ed8;
    transform: translateY(-2px);
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #4a5568;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <HeaderContainer style={{
      padding: isScrolled ? '0.75rem 2rem' : '1rem 2rem',
      boxShadow: isScrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : '0 1px 3px rgba(0, 0, 0, 0.1)'
    }}>
      <Nav>
        <Logo href="#">
          <LogoText>ResistWise</LogoText>
        </Logo>

        <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✕' : '☰'}
        </MenuButton>

        <NavLinks isOpen={isMenuOpen}>
          {navLinks.map(link => (
            <NavLink
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <ContactButton href="#contact">
            Связаться с нами
          </ContactButton>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header; 