import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Briefcase, Code, Rocket, Clock } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Portfolio = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const codeSnippets = ['projects[]', 'portfolio.map()', 'showcase()', 'render()'];

  const categories = isRTL
    ? ['تطبيقات الويب', 'تطبيقات الجوال', 'برمجيات مخصصة', 'تصميم UI/UX']
    : ['Web Apps', 'Mobile Apps', 'Custom Software', 'UI/UX Design'];

  return (
    <div style={{ background: '#0f172a', minHeight: '100vh', direction: isRTL ? 'rtl' : 'ltr', textAlign: isRTL ? 'right' : 'left' }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        paddingTop: '160px',
        paddingBottom: '80px',
        overflow: 'hidden'
      }}>
        {/* Background Effects */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />

          <div style={{
            position: 'absolute',
            top: '10%',
            left: isRTL ? 'auto' : '15%',
            right: isRTL ? '15%' : 'auto',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, transparent 70%)',
            filter: 'blur(80px)',
            animation: 'pulse 8s ease-in-out infinite'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '20%',
            right: isRTL ? 'auto' : '10%',
            left: isRTL ? '10%' : 'auto',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(245, 166, 35, 0.1) 0%, transparent 70%)',
            filter: 'blur(80px)',
            animation: 'pulse 10s ease-in-out infinite'
          }} />

          {codeSnippets.map((snippet, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -15, 0], opacity: [0.1, 0.25, 0.1] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                fontFamily: 'monospace',
                fontSize: '11px',
                color: i % 2 === 0 ? '#a855f7' : '#f5a623',
                top: `${20 + (i * 15)}%`,
                right: isRTL ? 'auto' : `${5 + (i * 20)}%`,
                left: isRTL ? `${5 + (i * 20)}%` : 'auto',
                opacity: 0.2
              }}
            >
              {snippet}
            </motion.span>
          ))}
        </div>

        <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 20px',
                background: 'rgba(168, 85, 247, 0.1)',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                borderRadius: '50px',
                marginBottom: '24px',
                flexDirection: isRTL ? 'row-reverse' : 'row'
              }}
            >
              <Briefcase size={16} style={{ color: '#a855f7' }} />
              <span style={{ color: '#a855f7', fontSize: '0.9rem', fontWeight: 500 }}>
                {isRTL ? 'أعمالنا' : 'Our Work'}
              </span>
            </motion.div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              color: 'white',
              marginBottom: '24px',
              lineHeight: 1.1
            }}>
              {t('portfolio.title')}
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.7
            }}>
              {t('portfolio.intro')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section style={{ padding: '60px 0 120px' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(245, 166, 35, 0.1) 100%)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '32px',
              padding: '80px 40px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Grid pattern */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }} />

            {/* Glowing orbs */}
            <div style={{
              position: 'absolute',
              top: '-100px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%)',
              filter: 'blur(60px)'
            }} />

            <div style={{ position: 'relative', zIndex: 10 }}>
              {/* Animated Icon Container */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  width: '120px',
                  height: '120px',
                  background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(245, 166, 35, 0.2) 100%)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 32px'
                }}
              >
                <Rocket size={48} style={{ color: '#a855f7' }} />
              </motion.div>

              {/* Code-style coming soon text */}
              <div style={{
                display: 'inline-block',
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                padding: '20px 32px',
                marginBottom: '24px',
                fontFamily: 'monospace',
                direction: 'ltr',
                textAlign: 'left'
              }}>
                <div style={{ fontSize: '0.9rem', lineHeight: 1.8 }}>
                  <span style={{ color: '#a855f7' }}>const</span>{' '}
                  <span style={{ color: '#60a5fa' }}>portfolio</span>{' '}
                  <span style={{ color: 'white' }}>=</span>{' '}
                  <span style={{ color: '#f5a623' }}>{'{'}</span>
                </div>
                <div style={{ paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.8 }}>
                  <span style={{ color: '#60a5fa' }}>status</span>:{' '}
                  <span style={{ color: '#22c55e' }}>"loading..."</span>,
                </div>
                <div style={{ paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.8 }}>
                  <span style={{ color: '#60a5fa' }}>projects</span>:{' '}
                  <span style={{ color: '#f5a623' }}>[]</span>
                </div>
                <div style={{ fontSize: '0.9rem', lineHeight: 1.8 }}>
                  <span style={{ color: '#f5a623' }}>{'}'}</span>;
                </div>
              </div>

              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 700,
                color: 'white',
                marginBottom: '16px'
              }}>
                {t('portfolio.comingSoon')}
              </h2>

              <p style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: '1.1rem',
                maxWidth: '500px',
                margin: '0 auto 32px',
                lineHeight: 1.7
              }}>
                {isRTL
                  ? 'نعمل حالياً على بناء مشاريع مذهلة. عد قريباً لرؤية أحدث أعمالنا!'
                  : "We're currently building amazing projects. Check back soon to see our latest work!"}
              </p>

              {/* Feature badges */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                justifyContent: 'center',
                flexDirection: isRTL ? 'row-reverse' : 'row'
              }}>
                {categories.map((item, index) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    style={{
                      padding: '8px 16px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                      color: 'rgba(255,255,255,0.7)',
                      fontSize: '0.9rem'
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
