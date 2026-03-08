import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import { Mail, Phone, MapPin, Clock, Linkedin, Instagram, Twitter, Github, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const quickLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/portfolio', label: t('nav.portfolio') },
    { path: '/blog', label: t('nav.blog') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const contactItems = [
    { icon: Mail, value: 'info@shafrah.qa', href: 'mailto:info@shafrah.qa' },
    { icon: Phone, value: '+974 5000 1403', href: 'tel:+97450001403' },
    { icon: MapPin, value: 'Al Rayyan, Doha, Qatar', href: null },
    { icon: Clock, value: isRTL ? 'الأحد - الخميس، 09:00 - 16:00' : 'Sun - Thu, 09:00 - 16:00', href: null },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  const codeSnippets = ['{ }', '</>', 'fn()', '[ ]', '==='];

  return (
    <footer style={{
      position: 'relative',
      background: 'linear-gradient(180deg, #0f172a 0%, #0a0f1a 100%)',
      color: 'white',
      overflow: 'hidden',
      direction: isRTL ? 'rtl' : 'ltr',
      textAlign: isRTL ? 'right' : 'left'
    }}>
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        pointerEvents: 'none'
      }}>
        {/* Grid Pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />

        {/* Glowing Orbs */}
        <div style={{
          position: 'absolute',
          top: '-100px',
          right: isRTL ? 'auto' : '-100px',
          left: isRTL ? '-100px' : 'auto',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(245, 166, 35, 0.1) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-100px',
          left: isRTL ? 'auto' : '-100px',
          right: isRTL ? '-100px' : 'auto',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(96, 165, 250, 0.1) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }} />

        {/* Floating Code Snippets */}
        {codeSnippets.map((snippet, index) => (
          <motion.span
            key={index}
            animate={{ y: [0, -10, 0], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 4 + index, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              fontFamily: 'monospace',
              fontSize: '14px',
              color: index % 2 === 0 ? '#f5a623' : '#60a5fa',
              opacity: 0.15,
              top: `${20 + (index * 15)}%`,
              left: isRTL ? 'auto' : `${10 + (index * 20)}%`,
              right: isRTL ? `${10 + (index * 20)}%` : 'auto'
            }}
          >
            {snippet}
          </motion.span>
        ))}
      </div>

      {/* Main Footer Content */}
      <div className="container-custom" style={{ position: 'relative', zIndex: 10, paddingTop: '80px', paddingBottom: '40px' }}>
        <div className="footer-grid">
          {/* Logo & Tagline */}
          <div>
            <Link to="/" style={{ display: 'inline-block', marginBottom: '24px', textDecoration: 'none' }}>
              <div>
                <span style={{
                  color: '#f5a623',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  textShadow: '0 0 20px rgba(245, 166, 35, 0.5)'
                }}>
                  {`{`}<span style={{ color: '#60a5fa' }}>{`</>`}</span>{`}`}
                </span>
                <div style={{
                  color: 'white',
                  fontSize: '2rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em'
                }}>
                  {isRTL ? 'شفرة' : 'SHAFRAH'}
                </div>
              </div>
            </Link>
            <p style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: '0.95rem',
              lineHeight: 1.8,
              marginBottom: '24px',
              maxWidth: '300px'
            }}>
              {t('footer.tagline')}
            </p>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '12px', flexDirection: isRTL ? 'row-reverse' : 'row', justifyContent: isRTL ? 'flex-end' : 'flex-start' }}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  style={{
                    width: '44px',
                    height: '44px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.7)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(245, 166, 35, 0.2)';
                    e.currentTarget.style.borderColor = '#f5a623';
                    e.currentTarget.style.color = '#f5a623';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                  }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '1.125rem',
              fontWeight: 600,
              marginBottom: '24px',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              flexDirection: isRTL ? 'row-reverse' : 'row',
              justifyContent: isRTL ? 'flex-end' : 'flex-start'
            }}>
              <span style={{ color: '#f5a623' }}>//</span>
              {t('footer.quickLinks')}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {quickLinks.map((link) => (
                <li key={link.path} style={{ marginBottom: '12px' }}>
                  <Link
                    to={link.path}
                    style={{
                      color: 'rgba(255,255,255,0.6)',
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'all 0.3s ease',
                      flexDirection: isRTL ? 'row-reverse' : 'row'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = '#f5a623';
                      e.currentTarget.style.paddingRight = isRTL ? '8px' : '0';
                      e.currentTarget.style.paddingLeft = isRTL ? '0' : '8px';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                      e.currentTarget.style.paddingRight = '0';
                      e.currentTarget.style.paddingLeft = '0';
                    }}
                  >
                    <ArrowUpRight size={14} style={{ opacity: 0.5, transform: isRTL ? 'scaleX(-1)' : 'none' }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              fontSize: '1.125rem',
              fontWeight: 600,
              marginBottom: '24px',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              flexDirection: isRTL ? 'row-reverse' : 'row',
              justifyContent: isRTL ? 'flex-end' : 'flex-start'
            }}>
              <span style={{ color: '#60a5fa' }}>//</span>
              {t('services.title')}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['web', 'mobile', 'software', 'design'].map((service) => (
                <li key={service} style={{ marginBottom: '12px' }}>
                  <Link
                    to="/services"
                    style={{
                      color: 'rgba(255,255,255,0.6)',
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'all 0.3s ease',
                      flexDirection: isRTL ? 'row-reverse' : 'row'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = '#60a5fa';
                      e.currentTarget.style.paddingRight = isRTL ? '8px' : '0';
                      e.currentTarget.style.paddingLeft = isRTL ? '0' : '8px';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                      e.currentTarget.style.paddingRight = '0';
                      e.currentTarget.style.paddingLeft = '0';
                    }}
                  >
                    <span style={{ color: '#60a5fa', opacity: 0.5 }}>{'<'}</span>
                    {t(`services.${service}.title`)}
                    <span style={{ color: '#60a5fa', opacity: 0.5 }}>{'/>'}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{
              fontSize: '1.125rem',
              fontWeight: 600,
              marginBottom: '24px',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              flexDirection: isRTL ? 'row-reverse' : 'row',
              justifyContent: isRTL ? 'flex-end' : 'flex-start'
            }}>
              <span style={{ color: '#f5a623' }}>//</span>
              {t('footer.contactUs')}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {contactItems.map((item, index) => (
                <li key={index} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  marginBottom: '16px',
                  flexDirection: isRTL ? 'row-reverse' : 'row',
                  justifyContent: isRTL ? 'flex-end' : 'flex-start'
                }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(245, 166, 35, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <item.icon size={16} style={{ color: '#f5a623' }} />
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      style={{
                        color: 'rgba(255,255,255,0.6)',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        lineHeight: '36px',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.color = '#f5a623'}
                      onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span style={{
                      color: 'rgba(255,255,255,0.6)',
                      fontSize: '0.9rem',
                      lineHeight: '36px'
                    }}>
                      {item.value}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          marginTop: '60px',
          paddingTop: '24px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.85rem',
            color: 'rgba(255,255,255,0.4)',
            fontFamily: 'monospace'
          }}>
            <span style={{ color: '#f5a623' }}>{'<'}</span>
            <span>{isRTL ? 'صُنع بشغف' : 'Built with passion'}</span>
            <span style={{ color: '#60a5fa' }}>{'/>'}</span>
          </div>
          <p style={{
            color: 'rgba(255,255,255,0.4)',
            fontSize: '0.9rem',
            textAlign: 'center'
          }}>
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
