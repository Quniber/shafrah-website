import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Target, Compass, Award, Lightbulb, Shield, Users, Code, Zap, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const About = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const values = [
    { icon: Award, key: 'excellence', color: '#f5a623' },
    { icon: Lightbulb, key: 'innovation', color: '#60a5fa' },
    { icon: Shield, key: 'integrity', color: '#10b981' },
    { icon: Users, key: 'partnership', color: '#a855f7' },
  ];

  const codeSnippets = ['const', 'async', 'await', 'export', 'import', 'function'];

  return (
    <div style={{ background: '#0f172a', minHeight: '100vh', direction: isRTL ? 'rtl' : 'ltr', textAlign: isRTL ? 'right' : 'left' }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        paddingTop: '160px',
        paddingBottom: '100px',
        overflow: 'hidden'
      }}>
        {/* Background Effects */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          {/* Grid Pattern */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />

          {/* Glowing Orbs */}
          <div style={{
            position: 'absolute',
            top: '10%',
            right: isRTL ? 'auto' : '10%',
            left: isRTL ? '10%' : 'auto',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(96, 165, 250, 0.15) 0%, transparent 70%)',
            filter: 'blur(80px)',
            animation: 'pulse 8s ease-in-out infinite'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '20%',
            left: isRTL ? 'auto' : '5%',
            right: isRTL ? '5%' : 'auto',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(245, 166, 35, 0.1) 0%, transparent 70%)',
            filter: 'blur(80px)',
            animation: 'pulse 10s ease-in-out infinite'
          }} />

          {/* Floating Code */}
          {codeSnippets.map((snippet, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -20, 0], opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                fontFamily: 'monospace',
                fontSize: '12px',
                color: i % 2 === 0 ? '#f5a623' : '#60a5fa',
                top: `${10 + (i * 12)}%`,
                left: isRTL ? 'auto' : `${5 + (i * 15)}%`,
                right: isRTL ? `${5 + (i * 15)}%` : 'auto',
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
                marginBottom: '24px',
                flexDirection: isRTL ? 'row-reverse' : 'row'
              }}
            >
              <Code size={16} style={{ color: '#f5a623' }} />
              <span style={{ color: '#f5a623', fontSize: '0.9rem', fontWeight: 500 }}>
                {isRTL ? 'تأسست في 2024 في قطر' : 'Founded in 2024 in Qatar'}
              </span>
            </motion.div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              color: 'white',
              marginBottom: '24px',
              lineHeight: 1.1
            }}>
              {t('about.title')}
            </h1>

            <p style={{
              fontSize: '1.25rem',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.7
            }}>
              {isRTL ? 'نبني مستقبل الحلول الرقمية، سطراً برمجياً تلو الآخر.' : 'Building the future of digital solutions, one line of code at a time.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section style={{
        position: 'relative',
        padding: '100px 0',
        background: 'linear-gradient(180deg, rgba(30, 41, 59, 0.5) 0%, transparent 100%)'
      }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '60px', alignItems: 'center' }} className="grid-2-about">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Decorative Code Block */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.9) 100%)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '16px',
                padding: '24px',
                fontFamily: 'monospace',
                position: 'relative',
                overflow: 'hidden',
                direction: 'ltr',
                textAlign: 'left'
              }}>
                {/* Window dots */}
                <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f5a623' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }} />
                </div>

                <div style={{ fontSize: '0.85rem', lineHeight: 2 }}>
                  <div><span style={{ color: '#a855f7' }}>const</span> <span style={{ color: '#60a5fa' }}>shafrah</span> <span style={{ color: 'white' }}>=</span> <span style={{ color: '#f5a623' }}>{'{'}</span></div>
                  <div style={{ paddingLeft: '20px' }}><span style={{ color: '#60a5fa' }}>name</span>: <span style={{ color: '#22c55e' }}>"Shafrah"</span>,</div>
                  <div style={{ paddingLeft: '20px' }}><span style={{ color: '#60a5fa' }}>founded</span>: <span style={{ color: '#f5a623' }}>2024</span>,</div>
                  <div style={{ paddingLeft: '20px' }}><span style={{ color: '#60a5fa' }}>location</span>: <span style={{ color: '#22c55e' }}>"Qatar"</span>,</div>
                  <div style={{ paddingLeft: '20px' }}><span style={{ color: '#60a5fa' }}>team</span>: <span style={{ color: '#22c55e' }}>"10+ passionate devs"</span>,</div>
                  <div style={{ paddingLeft: '20px' }}><span style={{ color: '#60a5fa' }}>mission</span>: <span style={{ color: '#22c55e' }}>"Digital Excellence"</span></div>
                  <div><span style={{ color: '#f5a623' }}>{'}'}</span>;</div>
                </div>

                {/* Glow effect */}
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-50%',
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(circle, rgba(96, 165, 250, 0.2) 0%, transparent 70%)',
                  filter: 'blur(40px)'
                }} />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 style={{
                fontSize: '2rem',
                fontWeight: 700,
                color: 'white',
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                flexDirection: isRTL ? 'row-reverse' : 'row',
                justifyContent: isRTL ? 'flex-end' : 'flex-start'
              }}>
                <span style={{ color: '#f5a623' }}>{'<'}</span>
                {isRTL ? 'قصتنا' : 'Our Story'}
                <span style={{ color: '#f5a623' }}>{'/>'}</span>
              </h2>

              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: 1.9 }}>
                {t('about.story').split('\n\n').map((paragraph, index) => (
                  <p key={index} style={{ marginBottom: '20px' }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section style={{ padding: '100px 0', position: 'relative' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gap: '32px' }} className="grid-2">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                position: 'relative',
                background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(96, 165, 250, 0.02) 100%)',
                border: '1px solid rgba(96, 165, 250, 0.2)',
                borderRadius: '24px',
                padding: '40px',
                overflow: 'hidden',
                textAlign: isRTL ? 'right' : 'left'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: isRTL ? 'auto' : '-50px',
                left: isRTL ? '-50px' : 'auto',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(96, 165, 250, 0.2) 0%, transparent 70%)',
                filter: 'blur(40px)'
              }} />

              <div style={{
                width: '64px',
                height: '64px',
                background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
                boxShadow: '0 8px 32px rgba(96, 165, 250, 0.3)',
                marginLeft: isRTL ? 'auto' : '0',
                marginRight: isRTL ? '0' : 'auto'
              }}>
                <Target size={28} style={{ color: 'white' }} />
              </div>

              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'white',
                marginBottom: '16px'
              }}>
                {t('about.vision.title')}
              </h3>
              <p style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '1rem',
                lineHeight: 1.8
              }}>
                {t('about.vision.description')}
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                position: 'relative',
                background: 'linear-gradient(135deg, rgba(245, 166, 35, 0.1) 0%, rgba(245, 166, 35, 0.02) 100%)',
                border: '1px solid rgba(245, 166, 35, 0.2)',
                borderRadius: '24px',
                padding: '40px',
                overflow: 'hidden',
                textAlign: isRTL ? 'right' : 'left'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: isRTL ? 'auto' : '-50px',
                left: isRTL ? '-50px' : 'auto',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(245, 166, 35, 0.2) 0%, transparent 70%)',
                filter: 'blur(40px)'
              }} />

              <div style={{
                width: '64px',
                height: '64px',
                background: 'linear-gradient(135deg, #f5a623 0%, #f59e0b 100%)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
                boxShadow: '0 8px 32px rgba(245, 166, 35, 0.3)',
                marginLeft: isRTL ? 'auto' : '0',
                marginRight: isRTL ? '0' : 'auto'
              }}>
                <Compass size={28} style={{ color: 'white' }} />
              </div>

              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'white',
                marginBottom: '16px'
              }}>
                {t('about.mission.title')}
              </h3>
              <p style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '1rem',
                lineHeight: 1.8
              }}>
                {t('about.mission.description')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{
        padding: '100px 0',
        position: 'relative',
        background: 'linear-gradient(180deg, transparent 0%, rgba(30, 41, 59, 0.3) 50%, transparent 100%)'
      }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: 'white',
              marginBottom: '16px'
            }}>
              <span style={{ color: '#60a5fa' }}>{'{ '}</span>
              {t('about.values.title')}
              <span style={{ color: '#60a5fa' }}>{' }'}</span>
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: '1.1rem',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              {isRTL ? 'المبادئ التي توجه كل ما نقوم به' : 'The principles that guide everything we do'}
            </p>
          </motion.div>

          <div className="grid-4" style={{ display: 'grid', gap: '24px' }}>
            {values.map((value, index) => (
              <motion.div
                key={value.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '20px',
                  padding: '32px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = value.color;
                  e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.3)`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: '72px',
                  height: '72px',
                  background: `linear-gradient(135deg, ${value.color}20 0%, ${value.color}10 100%)`,
                  border: `1px solid ${value.color}40`,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px'
                }}>
                  <value.icon size={32} style={{ color: value.color }} />
                </div>

                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'white',
                  marginBottom: '12px'
                }}>
                  {t(`about.values.${value.key}.title`)}
                </h3>
                <p style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '0.95rem',
                  lineHeight: 1.7
                }}>
                  {t(`about.values.${value.key}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '80px 0' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              background: 'linear-gradient(135deg, rgba(245, 166, 35, 0.1) 0%, rgba(96, 165, 250, 0.1) 100%)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '24px',
              padding: '60px 40px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }} />

            <div style={{ position: 'relative', zIndex: 10 }}>
              <Zap size={48} style={{ color: '#f5a623', marginBottom: '24px' }} />
              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                fontWeight: 700,
                color: 'white',
                marginBottom: '16px'
              }}>
                {isRTL ? 'هل أنت مستعد لبناء شيء مذهل؟' : 'Ready to Build Something Amazing?'}
              </h2>
              <p style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '1.1rem',
                marginBottom: '32px',
                maxWidth: '500px',
                margin: '0 auto 32px'
              }}>
                {isRTL ? 'دعنا نحول أفكارك إلى تميز رقمي معاً.' : "Let's transform your ideas into digital excellence together."}
              </p>
              <a
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px 40px',
                  background: 'linear-gradient(135deg, #f5a623 0%, #fbbf24 100%)',
                  color: '#0f172a',
                  fontWeight: 600,
                  fontSize: '1rem',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  boxShadow: '0 8px 32px rgba(245, 166, 35, 0.4)',
                  transition: 'all 0.3s ease',
                  flexDirection: isRTL ? 'row-reverse' : 'row'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(245, 166, 35, 0.5)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(245, 166, 35, 0.4)';
                }}
              >
                {isRTL ? 'ابدأ مشروعك' : 'Start Your Project'}
                <Arrow size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        @media (min-width: 768px) {
          .grid-2-about {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
