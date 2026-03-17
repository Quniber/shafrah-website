import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, MessageSquare, Zap } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Contact = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://email-api.shafrah.qa/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ type: 'success', message: t('contact.form.success') });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.message || t('contact.form.error') });
      }
    } catch (error) {
      setStatus({ type: 'error', message: t('contact.form.error') });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.info.email'),
      value: 'info@shafrah.qa',
      href: 'mailto:info@shafrah.qa',
      color: '#f5a623'
    },
    {
      icon: Phone,
      label: t('contact.info.phone'),
      value: '+974 5000 2048',
      href: 'tel:+97450002048',
      color: '#60a5fa'
    },
    {
      icon: MapPin,
      label: t('contact.info.address'),
      value: isRTL ? 'الريان، الدوحة، قطر' : 'Al Rayyan, Doha, Qatar',
      href: null,
      color: '#10b981'
    },
    {
      icon: Clock,
      label: t('contact.info.hours'),
      value: isRTL ? 'الأحد - الخميس، 09:00 - 16:00' : 'Sun - Thu, 09:00 - 16:00',
      href: null,
      color: '#a855f7'
    },
  ];

  const codeSnippets = ['sendMessage()', 'connect()', 'submit()', 'email.send()'];

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
            right: isRTL ? 'auto' : '15%',
            left: isRTL ? '15%' : 'auto',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(245, 166, 35, 0.12) 0%, transparent 70%)',
            filter: 'blur(80px)',
            animation: 'pulse 8s ease-in-out infinite'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '20%',
            left: isRTL ? 'auto' : '10%',
            right: isRTL ? '10%' : 'auto',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(96, 165, 250, 0.1) 0%, transparent 70%)',
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
                color: i % 2 === 0 ? '#f5a623' : '#60a5fa',
                top: `${20 + (i * 15)}%`,
                left: isRTL ? 'auto' : `${5 + (i * 20)}%`,
                right: isRTL ? `${5 + (i * 20)}%` : 'auto',
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
                background: 'rgba(245, 166, 35, 0.1)',
                border: '1px solid rgba(245, 166, 35, 0.3)',
                borderRadius: '50px',
                marginBottom: '24px',
                flexDirection: isRTL ? 'row-reverse' : 'row'
              }}
            >
              <MessageSquare size={16} style={{ color: '#f5a623' }} />
              <span style={{ color: '#f5a623', fontSize: '0.9rem', fontWeight: 500 }}>
                {isRTL ? 'تواصل معنا' : "Let's Connect"}
              </span>
            </motion.div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              color: 'white',
              marginBottom: '24px',
              lineHeight: 1.1
            }}>
              {t('contact.title')}
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.7
            }}>
              {t('contact.intro')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ padding: '40px 0 100px' }}>
        <div className="container-custom">
          <div className="grid-2-contact" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '60px' }}>
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'white',
                marginBottom: '32px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                flexDirection: isRTL ? 'row-reverse' : 'row',
                justifyContent: isRTL ? 'flex-end' : 'flex-start'
              }}>
                <span style={{ color: '#60a5fa' }}>{'<'}</span>
                {isRTL ? 'معلومات التواصل' : 'Contact Info'}
                <span style={{ color: '#60a5fa' }}>{'/>'}</span>
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '16px',
                      padding: '20px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '16px',
                      transition: 'all 0.3s ease',
                      flexDirection: isRTL ? 'row-reverse' : 'row'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.borderColor = item.color;
                      e.currentTarget.style.transform = isRTL ? 'translateX(-8px)' : 'translateX(8px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <div style={{
                      width: '52px',
                      height: '52px',
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}30`,
                      borderRadius: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <item.icon size={24} style={{ color: item.color }} />
                    </div>
                    <div style={{ textAlign: isRTL ? 'right' : 'left' }}>
                      <p style={{
                        color: 'rgba(255,255,255,0.5)',
                        fontSize: '0.85rem',
                        marginBottom: '4px'
                      }}>
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          style={{
                            color: 'white',
                            fontSize: '1.05rem',
                            fontWeight: 500,
                            textDecoration: 'none',
                            transition: 'color 0.3s ease'
                          }}
                          onMouseOver={(e) => e.currentTarget.style.color = item.color}
                          onMouseOut={(e) => e.currentTarget.style.color = 'white'}
                        >
                          <span dir="ltr">{item.value}</span>
                        </a>
                      ) : (
                        <p style={{ color: 'white', fontSize: '1.05rem', fontWeight: 500 }}>
                          <span dir="ltr">{item.value}</span>
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map placeholder */}
              <div style={{
                marginTop: '32px',
                height: '200px',
                background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(245, 166, 35, 0.1) 100%)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                                   linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
                  backgroundSize: '30px 30px'
                }} />
                <div style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
                  <MapPin size={36} style={{ color: '#f5a623', marginBottom: '12px' }} />
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>
                    {isRTL ? 'الريان، الدوحة، قطر' : 'Al Rayyan, Doha, Qatar'}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '24px',
                padding: '40px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Decorative corner glow */}
                <div style={{
                  position: 'absolute',
                  top: '-50px',
                  right: isRTL ? 'auto' : '-50px',
                  left: isRTL ? '-50px' : 'auto',
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(circle, rgba(245, 166, 35, 0.15) 0%, transparent 70%)',
                  filter: 'blur(40px)'
                }} />

                <div style={{ position: 'relative', zIndex: 10 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '32px',
                    flexDirection: isRTL ? 'row-reverse' : 'row',
                    justifyContent: isRTL ? 'flex-end' : 'flex-start'
                  }}>
                    <Zap size={24} style={{ color: '#f5a623' }} />
                    <h2 style={{
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: 'white'
                    }}>
                      {isRTL ? 'أرسل لنا رسالة' : 'Send us a message'}
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }} className="form-grid">
                      <div>
                        <label style={{
                          display: 'block',
                          color: 'rgba(255,255,255,0.7)',
                          fontSize: '0.9rem',
                          marginBottom: '8px',
                          fontWeight: 500
                        }}>
                          {t('contact.form.name')}
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          style={{
                            width: '100%',
                            padding: '14px 16px',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '12px',
                            color: 'white',
                            fontSize: '1rem',
                            outline: 'none',
                            transition: 'all 0.3s ease',
                            textAlign: isRTL ? 'right' : 'left'
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = '#f5a623';
                            e.target.style.boxShadow = '0 0 0 3px rgba(245, 166, 35, 0.1)';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                            e.target.style.boxShadow = 'none';
                          }}
                        />
                      </div>
                      <div>
                        <label style={{
                          display: 'block',
                          color: 'rgba(255,255,255,0.7)',
                          fontSize: '0.9rem',
                          marginBottom: '8px',
                          fontWeight: 500
                        }}>
                          {t('contact.form.email')}
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          style={{
                            width: '100%',
                            padding: '14px 16px',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '12px',
                            color: 'white',
                            fontSize: '1rem',
                            outline: 'none',
                            transition: 'all 0.3s ease',
                            textAlign: isRTL ? 'right' : 'left'
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = '#f5a623';
                            e.target.style.boxShadow = '0 0 0 3px rgba(245, 166, 35, 0.1)';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                            e.target.style.boxShadow = 'none';
                          }}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }} className="form-grid">
                      <div>
                        <label style={{
                          display: 'block',
                          color: 'rgba(255,255,255,0.7)',
                          fontSize: '0.9rem',
                          marginBottom: '8px',
                          fontWeight: 500
                        }}>
                          {t('contact.form.phone')}
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          style={{
                            width: '100%',
                            padding: '14px 16px',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '12px',
                            color: 'white',
                            fontSize: '1rem',
                            outline: 'none',
                            transition: 'all 0.3s ease',
                            textAlign: isRTL ? 'right' : 'left'
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = '#f5a623';
                            e.target.style.boxShadow = '0 0 0 3px rgba(245, 166, 35, 0.1)';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                            e.target.style.boxShadow = 'none';
                          }}
                        />
                      </div>
                      <div>
                        <label style={{
                          display: 'block',
                          color: 'rgba(255,255,255,0.7)',
                          fontSize: '0.9rem',
                          marginBottom: '8px',
                          fontWeight: 500
                        }}>
                          {t('contact.form.subject')}
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          style={{
                            width: '100%',
                            padding: '14px 16px',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '12px',
                            color: 'white',
                            fontSize: '1rem',
                            outline: 'none',
                            transition: 'all 0.3s ease',
                            textAlign: isRTL ? 'right' : 'left'
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = '#f5a623';
                            e.target.style.boxShadow = '0 0 0 3px rgba(245, 166, 35, 0.1)';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                            e.target.style.boxShadow = 'none';
                          }}
                        />
                      </div>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                      <label style={{
                        display: 'block',
                        color: 'rgba(255,255,255,0.7)',
                        fontSize: '0.9rem',
                        marginBottom: '8px',
                        fontWeight: 500
                      }}>
                        {t('contact.form.message')}
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: '12px',
                          color: 'white',
                          fontSize: '1rem',
                          outline: 'none',
                          resize: 'none',
                          transition: 'all 0.3s ease',
                          textAlign: isRTL ? 'right' : 'left'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#f5a623';
                          e.target.style.boxShadow = '0 0 0 3px rgba(245, 166, 35, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>

                    {status.message && (
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '16px',
                        borderRadius: '12px',
                        marginBottom: '24px',
                        background: status.type === 'success' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                        border: `1px solid ${status.type === 'success' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
                        flexDirection: isRTL ? 'row-reverse' : 'row'
                      }}>
                        {status.type === 'success' ? (
                          <CheckCircle size={20} style={{ color: '#10b981' }} />
                        ) : (
                          <AlertCircle size={20} style={{ color: '#ef4444' }} />
                        )}
                        <span style={{ color: status.type === 'success' ? '#10b981' : '#ef4444' }}>
                          {status.message}
                        </span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        padding: '16px 32px',
                        background: 'linear-gradient(135deg, #f5a623 0%, #fbbf24 100%)',
                        color: '#0f172a',
                        fontWeight: 600,
                        fontSize: '1rem',
                        border: 'none',
                        borderRadius: '12px',
                        cursor: isSubmitting ? 'not-allowed' : 'pointer',
                        opacity: isSubmitting ? 0.7 : 1,
                        boxShadow: '0 8px 32px rgba(245, 166, 35, 0.4)',
                        transition: 'all 0.3s ease',
                        flexDirection: isRTL ? 'row-reverse' : 'row'
                      }}
                      onMouseOver={(e) => {
                        if (!isSubmitting) {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 12px 40px rgba(245, 166, 35, 0.5)';
                        }
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 8px 32px rgba(245, 166, 35, 0.4)';
                      }}
                    >
                      {isSubmitting ? (
                        <span>{t('contact.form.sending')}</span>
                      ) : (
                        <>
                          <span>{t('contact.form.send')}</span>
                          <Send size={18} />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        @media (min-width: 1024px) {
          .grid-2-contact {
            grid-template-columns: 1fr 1.2fr !important;
          }
        }
        @media (max-width: 640px) {
          .form-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
