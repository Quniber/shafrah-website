import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Briefcase, Check, Smartphone } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { projects } from '../data/projects';

const Portfolio = () => {
  const { t } = useTranslation();
  const { isRTL, currentLanguage } = useLanguage();

  const codeSnippets = ['projects[]', 'portfolio.map()', 'showcase()', 'render()'];

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

      {/* Projects Section */}
      <section style={{ padding: '20px 0 120px' }}>
        <div className="container-custom" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '24px',
                overflow: 'hidden',
                transition: 'border-color 0.3s',
              }}
            >
              {/* Project Header with Logo */}
              <div style={{
                padding: '40px 36px 0',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                flexDirection: isRTL ? 'row-reverse' : 'row'
              }}>
                <div style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  background: project.id === 'beauty-porter' ? '#fff' : project.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  border: '1px solid rgba(255,255,255,0.1)'
                }}>
                  <img
                    src={project.logo}
                    alt={project.title[currentLanguage]}
                    style={{
                      width: project.id === 'beauty-porter' ? '60px' : '72px',
                      height: project.id === 'beauty-porter' ? '60px' : '72px',
                      objectFit: 'contain',
                      borderRadius: project.id === 'beauty-porter' ? '0' : '18px'
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '1.6rem',
                    fontWeight: 700,
                    color: 'white',
                    marginBottom: '6px'
                  }}>
                    {project.title[currentLanguage]}
                  </h3>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    flexDirection: isRTL ? 'row-reverse' : 'row',
                    flexWrap: 'wrap'
                  }}>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      fontSize: '0.85rem',
                      color: '#a855f7',
                      fontWeight: 500,
                      flexDirection: isRTL ? 'row-reverse' : 'row'
                    }}>
                      <Smartphone size={14} />
                      {isRTL ? 'تطبيق جوال' : 'Mobile App'}
                    </span>
                    <span style={{
                      padding: '3px 10px',
                      background: 'rgba(245, 166, 35, 0.15)',
                      border: '1px solid rgba(245, 166, 35, 0.3)',
                      borderRadius: '6px',
                      color: '#f5a623',
                      fontSize: '0.75rem',
                      fontWeight: 600
                    }}>
                      {project.status[currentLanguage]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div style={{ padding: '24px 36px 0' }}>
                <p style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '1.05rem',
                  lineHeight: 1.8
                }}>
                  {project.description[currentLanguage]}
                </p>
              </div>

              {/* Features & Info Grid */}
              <div style={{
                padding: '24px 36px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                gap: '24px'
              }}>
                {/* Features */}
                <div>
                  <h4 style={{
                    color: 'white',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    marginBottom: '14px'
                  }}>
                    {isRTL ? 'المميزات' : 'Key Features'}
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {project.features[currentLanguage].map((feature, i) => (
                      <li key={i} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        flexDirection: isRTL ? 'row-reverse' : 'row',
                        color: 'rgba(255,255,255,0.55)',
                        fontSize: '0.9rem',
                        lineHeight: 1.5
                      }}>
                        <Check size={16} style={{ color: '#22c55e', flexShrink: 0, marginTop: '2px' }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Platforms & Tech */}
                <div>
                  <h4 style={{
                    color: 'white',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    marginBottom: '14px'
                  }}>
                    {isRTL ? 'المنصات' : 'Platforms'}
                  </h4>
                  <div style={{
                    display: 'flex',
                    gap: '8px',
                    marginBottom: '24px',
                    flexDirection: isRTL ? 'row-reverse' : 'row'
                  }}>
                    {project.platforms.map((platform) => (
                      <span key={platform} style={{
                        padding: '6px 16px',
                        background: 'rgba(34, 197, 94, 0.1)',
                        border: '1px solid rgba(34, 197, 94, 0.2)',
                        borderRadius: '8px',
                        color: '#4ade80',
                        fontSize: '0.85rem',
                        fontWeight: 500
                      }}>
                        {platform}
                      </span>
                    ))}
                  </div>

                  <h4 style={{
                    color: 'white',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    marginBottom: '14px'
                  }}>
                    {isRTL ? 'التقنيات المستخدمة' : 'Technologies'}
                  </h4>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    flexDirection: isRTL ? 'row-reverse' : 'row'
                  }}>
                    {project.technologies.map((tech) => (
                      <span key={tech} style={{
                        padding: '6px 14px',
                        background: 'rgba(168, 85, 247, 0.1)',
                        border: '1px solid rgba(168, 85, 247, 0.2)',
                        borderRadius: '8px',
                        color: '#c084fc',
                        fontSize: '0.8rem',
                        fontWeight: 500
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
