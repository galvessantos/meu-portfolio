import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          if (sectionId === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            const elementTop = element.offsetTop;
            const headerHeight = 80;
            const offset = -170;
            window.scrollTo({
              top: elementTop - headerHeight - offset,
              behavior: 'smooth'
            });
          }
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        if (sectionId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const elementTop = element.offsetTop;
          const headerHeight = 80;
          const offset = -170;
          window.scrollTo({
            top: elementTop - headerHeight - offset,
            behavior: 'smooth'
          });
        }
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navigateToResume = () => {
    navigate('/curriculo');
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { label: 'Home', id: 'home', type: 'scroll' },
    { label: 'Sobre', id: 'about', type: 'scroll' },
    { label: 'Projetos', id: 'projetos', type: 'scroll' },
    { label: 'Contato', id: 'contato', type: 'scroll' }
  ];

  const handleNavClick = (item) => {
    if (item.type === 'navigate') {
      navigateToResume();
    } else {
      scrollToSection(item.id);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-spacer"></div>
        
        <nav className="nav-desktop">
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <button 
                  onClick={() => handleNavClick(item)}
                  className="nav-link"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-cta">
          <button 
            onClick={navigateToResume}
            className="cta-button secondary"
          >
            <span>Currículo</span>
          </button>
          <button 
            onClick={() => scrollToSection('contato')}
            className="cta-button"
          >
            <span>Vamos Conversar</span>
          </button>
        </div>

        <button 
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            {navItems.map((item, index) => (
              <li key={index} className="mobile-nav-item">
                <button 
                  onClick={() => handleNavClick(item)}
                  className="mobile-nav-link"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="mobile-cta">
            <button 
              onClick={navigateToResume}
              className="mobile-cta-button secondary"
            >
              Currículo
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="mobile-cta-button"
            >
              Vamos Conversar
            </button>
          </div>
        </nav>
      </div>

      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
}

export default Header;