import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Globe, Smartphone, Code, Palette, Award, Zap, Settings, HeadphonesIcon } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Home = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const services = [
    { icon: Globe, key: 'web', color: '#3b82f6' },
    { icon: Smartphone, key: 'mobile', color: '#22c55e' },
    { icon: Code, key: 'software', color: '#a855f7' },
    { icon: Palette, key: 'design', color: '#ec4899' },
  ];

  const stats = [
    { value: '1+', label: t('stats.years') },
    { value: '10+', label: t('stats.team') },
    { value: '15+', label: t('stats.technologies') },
    { value: '100%', label: t('stats.satisfaction') },
  ];

  const whyUsItems = [
    { icon: Award, key: 'quality' },
    { icon: Zap, key: 'fast' },
    { icon: Settings, key: 'custom' },
    { icon: HeadphonesIcon, key: 'support' },
  ];

  // Floating code snippets for background
  const codeSnippets = [
    { text: '<div>', top: '15%', left: isRTL ? 'auto' : '5%', right: isRTL ? '5%' : 'auto', delay: 0 },
    { text: 'const app = ()', top: '25%', right: isRTL ? 'auto' : '8%', left: isRTL ? '8%' : 'auto', delay: 0.2 },
    { text: '{ }', top: '60%', left: isRTL ? 'auto' : '3%', right: isRTL ? '3%' : 'auto', delay: 0.4 },
    { text: '</>', top: '70%', right: isRTL ? 'auto' : '5%', left: isRTL ? '5%' : 'auto', delay: 0.6 },
    { text: 'function()', top: '40%', left: isRTL ? 'auto' : '8%', right: isRTL ? '8%' : 'auto', delay: 0.8 },
    { text: '=> { }', top: '80%', right: isRTL ? 'auto' : '12%', left: isRTL ? '12%' : 'auto', delay: 1 },
  ];

  // Tech icons floating
  const techIcons = [
    { icon: '⚛️', top: '20%', right: isRTL ? 'auto' : '15%', left: isRTL ? '15%' : 'auto', size: 40 },
    { icon: '📱', top: '65%', left: isRTL ? 'auto' : '12%', right: isRTL ? '12%' : 'auto', size: 36 },
    { icon: '💻', top: '30%', left: isRTL ? 'auto' : '15%', right: isRTL ? '15%' : 'auto', size: 32 },
    { icon: '🚀', top: '75%', right: isRTL ? 'auto' : '18%', left: isRTL ? '18%' : 'auto', size: 38 },
  ];

  return (
    <div style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      {/* Creative Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
      }}>
        {/* Animated gradient orbs */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: isRTL ? 'auto' : '-10%',
          left: isRTL ? '-10%' : 'auto',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(26, 106, 154, 0.3) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'pulse 8s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-20%',
          left: isRTL ? 'auto' : '-10%',
          right: isRTL ? '-10%' : 'auto',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(245, 166, 35, 0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'pulse 10s ease-in-out infinite reverse',
        }} />

        {/* Grid pattern overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />

        {/* Floating code snippets */}
        {codeSnippets.map((snippet, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.15, y: 0 }}
            transition={{ delay: snippet.delay, duration: 1 }}
            style={{
              position: 'absolute',
              top: snippet.top,
              left: snippet.left,
              right: snippet.right,
              fontFamily: 'monospace',
              fontSize: '14px',
              color: '#1a6a9a',
              pointerEvents: 'none',
            }}
          >
            {snippet.text}
          </motion.div>
        ))}

        {/* Floating tech icons */}
        {techIcons.map((item, index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 3 + index,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              top: item.top,
              left: item.left,
              right: item.right,
              fontSize: item.size,
              opacity: 0.6,
              pointerEvents: 'none',
            }}
          >
            {item.icon}
          </motion.div>
        ))}

        {/* Main content */}
        <div className="container-custom" style={{ width: '100%', position: 'relative', zIndex: 10 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '60px',
            alignItems: 'center',
            padding: '100px 0'
          }}>
            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 20px',
                  background: 'rgba(245, 166, 35, 0.1)',
                  border: '1px solid rgba(245, 166, 35, 0.3)',
                  borderRadius: '50px',
                  marginBottom: '32px',
                  flexDirection: isRTL ? 'row-reverse' : 'row',
                }}
              >
                <span style={{ fontSize: '14px' }}>🚀</span>
                <span style={{ color: '#f5a623', fontSize: '14px', fontWeight: 500 }}>
                  {isRTL ? 'شركة تطوير برمجيات في قطر' : 'Software Development Company in Qatar'}
                </span>
              </motion.div>

              {/* Main headline */}
              <h1 style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: '24px',
                color: 'white',
              }}>
                {isRTL ? (
                  <>
                    نحوّل <span style={{ color: '#f5a623' }}>أفكارك</span> إلى
                    <br />
                    <span style={{
                      background: 'linear-gradient(135deg, #1a6a9a, #3b82f6)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}>تميّز رقمي</span>
                  </>
                ) : (
                  <>
                    We Transform <span style={{ color: '#f5a623' }}>Ideas</span> Into
                    <br />
                    <span style={{
                      background: 'linear-gradient(135deg, #1a6a9a, #3b82f6)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}>Digital Excellence</span>
                  </>
                )}
              </h1>

              {/* Subheadline */}
              <p style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.7,
                marginBottom: '40px',
                maxWidth: '700px',
                margin: '0 auto 40px',
              }}>
                {t('hero.subheadline')}
              </p>

              {/* CTA Buttons */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                justifyContent: 'center',
                marginBottom: '60px',
                flexDirection: isRTL ? 'row-reverse' : 'row',
              }}>
                <Link to="/contact" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '16px 36px',
                  background: 'linear-gradient(135deg, #f5a623, #f59e0b)',
                  color: 'white',
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderRadius: '12px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(245, 166, 35, 0.4)',
                  transition: 'all 0.3s ease',
                  flexDirection: isRTL ? 'row-reverse' : 'row',
                }}>
                  {t('hero.cta1')}
                  <Arrow size={20} />
                </Link>
                <Link to="/services" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '16px 36px',
                  background: 'rgba(255,255,255,0.1)',
                  color: 'white',
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderRadius: '12px',
                  textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                }}>
                  {t('hero.cta2')}
                </Link>
              </div>

              {/* Tech stack showcase */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                style={{ textAlign: 'center' }}
              >
                <p style={{
                  color: 'rgba(255,255,255,0.4)',
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  marginBottom: '16px'
                }}>
                  {isRTL ? 'التقنيات التي نستخدمها' : 'Technologies We Use'}
                </p>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '24px',
                  opacity: 0.6,
                  flexDirection: isRTL ? 'row-reverse' : 'row',
                }}>
                  {['React', 'Flutter', 'Node.js', 'Swift', 'Kotlin', 'Vue.js'].map((tech, index) => (
                    <span key={index} style={{
                      color: 'rgba(255,255,255,0.6)',
                      fontSize: '14px',
                      fontWeight: 500
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px' }}>
            {isRTL ? 'اسحب للأسفل' : 'Scroll Down'}
          </span>
          <div style={{
            width: '24px',
            height: '40px',
            border: '2px solid rgba(255,255,255,0.2)',
            borderRadius: '12px',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '8px',
          }}>
            <div style={{
              width: '4px',
              height: '8px',
              background: '#f5a623',
              borderRadius: '2px',
            }} />
          </div>
        </motion.div>

        {/* CSS Animation */}
        <style>{`
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.1); opacity: 0.8; }
          }
        `}</style>
      </section>

      {/* Services Section */}
      <section className="section" style={{ background: '#ffffff', textAlign: isRTL ? 'right' : 'left' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-header"
            style={{ textAlign: 'center' }}
          >
            <h2 className="heading-2" style={{ color: '#1a3a4a', marginBottom: '16px' }}>
              {t('services.title')}
            </h2>
            <p style={{ color: '#6b7280', fontSize: '1.125rem' }}>
              {t('services.intro')}
            </p>
          </motion.div>

          <div className="grid-4">
            {services.map((service, index) => (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
                style={{ textAlign: isRTL ? 'right' : 'left' }}
              >
                <div className="icon-box" style={{ backgroundColor: service.color, margin: isRTL ? '0 0 0 auto' : '0' }}>
                  <service.icon color="white" size={28} />
                </div>
                <h3 className="heading-3" style={{ color: '#1a3a4a', marginBottom: '12px' }}>
                  {t(`services.${service.key}.title`)}
                </h3>
                <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  {t(`services.${service.key}.short`)}
                </p>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/services" style={{
              color: '#1a6a9a',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              flexDirection: isRTL ? 'row-reverse' : 'row',
            }}>
              {t('hero.cta2')}
              <Arrow size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #1a6a9a, #145580)' }}>
        <div className="container-custom">
          <div className="grid-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ textAlign: 'center' }}
              >
                <div style={{ fontSize: '3.5rem', fontWeight: 700, color: 'white', marginBottom: '8px' }}>
                  {stat.value}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section" style={{ background: '#f8fafc', textAlign: isRTL ? 'right' : 'left' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-header"
            style={{ textAlign: 'center' }}
          >
            <h2 className="heading-2" style={{ color: '#1a3a4a' }}>
              {t('whyUs.title')}
            </h2>
          </motion.div>

          <div className="grid-4">
            {whyUsItems.map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ textAlign: 'center', padding: '24px' }}
              >
                <div className="icon-box-round" style={{ backgroundColor: '#f5a623', margin: '0 auto 20px' }}>
                  <item.icon color="white" size={32} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#1a3a4a', marginBottom: '12px' }}>
                  {t(`whyUs.${item.key}.title`)}
                </h3>
                <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  {t(`whyUs.${item.key}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}
          >
            <h2 className="heading-2" style={{ color: '#1a3a4a', marginBottom: '20px' }}>
              {t('contact.title')}
            </h2>
            <p style={{ color: '#6b7280', marginBottom: '32px', fontSize: '1.125rem' }}>
              {t('contact.intro')}
            </p>
            <Link to="/contact" className="btn btn-accent" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              flexDirection: isRTL ? 'row-reverse' : 'row',
            }}>
              {t('hero.cta1')}
              <Arrow size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
