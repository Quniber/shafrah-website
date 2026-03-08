import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import { Menu, X, Globe } from 'lucide-react';

const Header = () => {
  const { t } = useTranslation();
  const { currentLanguage, toggleLanguage, isRTL } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/portfolio', label: t('nav.portfolio') },
    { path: '/blog', label: t('nav.blog') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backgroundColor: scrolled ? 'rgba(15, 23, 42, 0.95)' : 'rgba(15, 23, 42, 0.8)',
      backdropFilter: 'blur(20px)',
      borderBottom: scrolled ? '1px solid rgba(245, 166, 35, 0.2)' : '1px solid rgba(255,255,255,0.05)',
      transition: 'all 0.3s ease',
      direction: isRTL ? 'rtl' : 'ltr'
    }}>
      <nav className="container-custom">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '80px'
        }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{
                color: '#f5a623',
                fontSize: '1.25rem',
                fontWeight: 700,
                textShadow: '0 0 20px rgba(245, 166, 35, 0.5)'
              }}>
                {`{`}<span style={{ color: '#60a5fa' }}>{`</>`}</span>{`}`}
              </span>
              <span style={{
                color: 'white',
                fontSize: '1.25rem',
                fontWeight: 700,
                letterSpacing: '0.05em'
              }}>
                {isRTL ? 'شفرة' : 'SHAFRAH'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div style={{
            display: 'none',
            alignItems: 'center',
            gap: '8px'
          }} className="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  padding: '8px 16px',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  color: isActive(link.path) ? '#f5a623' : 'rgba(255,255,255,0.8)',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  backgroundColor: isActive(link.path) ? 'rgba(245, 166, 35, 0.1)' : 'transparent',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
                onMouseOver={(e) => {
                  if (!isActive(link.path)) {
                    e.currentTarget.style.color = '#f5a623';
                    e.currentTarget.style.backgroundColor = 'rgba(245, 166, 35, 0.05)';
                  }
                }}
                onMouseOut={(e) => {
                  if (!isActive(link.path)) {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side - Language toggle & CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              onClick={toggleLanguage}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 12px',
                fontSize: '0.9rem',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.8)',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#f5a623';
                e.currentTarget.style.color = '#f5a623';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
              }}
            >
              <Globe size={18} />
              <span>{currentLanguage === 'en' ? 'عربي' : 'EN'}</span>
            </button>

            <Link
              to="/contact"
              className="desktop-nav"
              style={{
                display: 'none',
                padding: '10px 24px',
                fontSize: '0.9rem',
                fontWeight: 600,
                color: '#0f172a',
                background: 'linear-gradient(135deg, #f5a623 0%, #fbbf24 100%)',
                border: 'none',
                borderRadius: '8px',
                textDecoration: 'none',
                boxShadow: '0 4px 15px rgba(245, 166, 35, 0.4)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(245, 166, 35, 0.5)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(245, 166, 35, 0.4)';
              }}
            >
              {t('nav.getQuote')}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mobile-menu-btn"
              style={{
                display: 'flex',
                padding: '8px',
                color: 'white',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div style={{
            padding: '16px 0',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            textAlign: isRTL ? 'right' : 'left'
          }} className="mobile-nav">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  display: 'block',
                  padding: '12px 16px',
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: isActive(link.path) ? '#f5a623' : 'rgba(255,255,255,0.8)',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  backgroundColor: isActive(link.path) ? 'rgba(245, 166, 35, 0.1)' : 'transparent',
                  textAlign: isRTL ? 'right' : 'left'
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              style={{
                display: 'block',
                textAlign: 'center',
                marginTop: '16px',
                padding: '12px 24px',
                fontWeight: 600,
                color: '#0f172a',
                background: 'linear-gradient(135deg, #f5a623 0%, #fbbf24 100%)',
                borderRadius: '8px',
                textDecoration: 'none'
              }}
            >
              {t('nav.getQuote')}
            </Link>
          </div>
        )}
      </nav>

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
          .mobile-nav {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
