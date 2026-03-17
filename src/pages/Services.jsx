import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Smartphone, Code, Palette, Search, FileText, PenTool, Settings, TestTube, Rocket, Check, ArrowRight, ArrowLeft, ChevronDown, HelpCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Services = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      q: isRTL ? 'كم يستغرق بناء موقع إلكتروني أو تطبيق؟' : 'How long does it take to build a website or app?',
      a: isRTL
        ? 'يعتمد الجدول الزمني على مدى تعقيد المشروع. عادةً، يستغرق الموقع الإلكتروني من 4 إلى 8 أسابيع، بينما قد يستغرق التطبيق من 8 إلى 16 أسبوعاً. نقدم جدولاً زمنياً مفصلاً بعد مرحلة الاكتشاف.'
        : 'Timelines depend on project complexity. Typically, a website takes 4-8 weeks, while a mobile app may take 8-16 weeks. We provide a detailed timeline after the discovery phase.',
    },
    {
      q: isRTL ? 'ما هي التقنيات التي تستخدمونها؟' : 'What technologies do you use?',
      a: isRTL
        ? 'نستخدم أحدث التقنيات مثل React و Next.js و Flutter و React Native و Node.js و Python. نختار التقنية الأنسب بناءً على متطلبات مشروعك لضمان أفضل أداء وقابلية للتوسع.'
        : 'We use modern technologies like React, Next.js, Flutter, React Native, Node.js, and Python. We choose the best-fit technology based on your project requirements to ensure optimal performance and scalability.',
    },
    {
      q: isRTL ? 'هل تقدمون دعماً فنياً مستمراً بعد الإطلاق؟' : 'Do you provide ongoing support after launch?',
      a: isRTL
        ? 'نعم، نقدم حزم دعم وصيانة مستمرة تشمل مراقبة الأداء وتحديثات الأمان وإصلاح الأخطاء وإضافة ميزات جديدة. نضمن أن يظل مشروعك يعمل بسلاسة وكفاءة.'
        : 'Yes, we offer ongoing support and maintenance packages that include performance monitoring, security updates, bug fixes, and feature additions. We ensure your project stays running smoothly and efficiently.',
    },
    {
      q: isRTL ? 'كم تكلفة المشروع؟' : 'How much does a project cost?',
      a: isRTL
        ? 'تختلف التكلفة حسب نطاق المشروع ومتطلباته. نقدم استشارة مجانية لفهم احتياجاتك وتقديم عرض سعر مفصل وشفاف. نحرص على تقديم قيمة ممتازة مقابل استثمارك.'
        : 'Costs vary based on project scope and requirements. We offer a free consultation to understand your needs and provide a detailed, transparent quote. We focus on delivering excellent value for your investment.',
    },
    {
      q: isRTL ? 'هل تعملون مع الشركات الناشئة؟' : 'Do you work with startups?',
      a: isRTL
        ? 'بالتأكيد! نحب العمل مع الشركات الناشئة ونقدم حلولاً مرنة تناسب ميزانياتها. لدينا خبرة في بناء منتجات MVP وتوسيعها مع نمو الأعمال. نفهم تحديات الشركات الناشئة ونقدم شراكة حقيقية.'
        : 'Absolutely! We love working with startups and offer flexible solutions that fit their budgets. We have experience building MVPs and scaling them as the business grows. We understand startup challenges and provide a true partnership.',
    },
    {
      q: isRTL ? 'هل يمكنكم إعادة تصميم موقع أو تطبيق موجود؟' : 'Can you redesign an existing website or app?',
      a: isRTL
        ? 'نعم، نقدم خدمات إعادة التصميم والتطوير للمواقع والتطبيقات الحالية. نحلل مشروعك الحالي ونقدم توصيات لتحسين تجربة المستخدم والأداء والتصميم مع الحفاظ على ما يعمل بشكل جيد.'
        : 'Yes, we offer redesign and redevelopment services for existing websites and apps. We analyze your current project and provide recommendations to improve UX, performance, and design while preserving what works well.',
    },
  ];

  const services = [
    {
      icon: Globe,
      key: 'web',
      color: '#60a5fa',
      gradient: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)'
    },
    {
      icon: Smartphone,
      key: 'mobile',
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
    },
    {
      icon: Code,
      key: 'software',
      color: '#a855f7',
      gradient: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)'
    },
    {
      icon: Palette,
      key: 'design',
      color: '#f5a623',
      gradient: 'linear-gradient(135deg, #f5a623 0%, #f59e0b 100%)'
    },
  ];

  const processSteps = [
    { icon: Search, key: 'step1', number: '01', color: '#60a5fa' },
    { icon: FileText, key: 'step2', number: '02', color: '#f5a623' },
    { icon: PenTool, key: 'step3', number: '03', color: '#10b981' },
    { icon: Settings, key: 'step4', number: '04', color: '#a855f7' },
    { icon: TestTube, key: 'step5', number: '05', color: '#ef4444' },
    { icon: Rocket, key: 'step6', number: '06', color: '#f5a623' },
  ];

  const codeSnippets = ['npm install', 'git commit', 'flutter build', 'react-native', 'swift', 'kotlin'];

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
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />

          <div style={{
            position: 'absolute',
            top: '5%',
            left: isRTL ? 'auto' : '10%',
            right: isRTL ? '10%' : 'auto',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(96, 165, 250, 0.15) 0%, transparent 70%)',
            filter: 'blur(80px)',
            animation: 'pulse 8s ease-in-out infinite'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '10%',
            right: isRTL ? 'auto' : '5%',
            left: isRTL ? '5%' : 'auto',
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
                color: i % 2 === 0 ? '#f5a623' : '#60a5fa',
                top: `${15 + (i * 12)}%`,
                right: isRTL ? 'auto' : `${5 + (i * 12)}%`,
                left: isRTL ? `${5 + (i * 12)}%` : 'auto',
                opacity: 0.2
              }}
            >
              $ {snippet}
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
                background: 'rgba(96, 165, 250, 0.1)',
                border: '1px solid rgba(96, 165, 250, 0.3)',
                borderRadius: '50px',
                marginBottom: '24px',
                flexDirection: isRTL ? 'row-reverse' : 'row'
              }}
            >
              <Code size={16} style={{ color: '#60a5fa' }} />
              <span style={{ color: '#60a5fa', fontSize: '0.9rem', fontWeight: 500 }}>
                {isRTL ? 'خدمات تطوير متكاملة' : 'Full-Stack Development Services'}
              </span>
            </motion.div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              color: 'white',
              marginBottom: '24px',
              lineHeight: 1.1
            }}>
              {t('services.title')}
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.7,
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              {t('services.intro')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section style={{ padding: '80px 0' }}>
        <div className="container-custom">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '100px' }}>
            {services.map((service, index) => (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`service-row service-row-${index % 2}`}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '60px',
                  alignItems: 'center'
                }}
              >
                {/* Icon/Visual */}
                <div style={{ order: index % 2 === 1 ? 2 : 1 }} className={`service-visual service-visual-${index % 2}`}>
                  <div style={{
                    position: 'relative',
                    aspectRatio: '4/3',
                    background: `linear-gradient(135deg, ${service.color}15 0%, ${service.color}05 100%)`,
                    border: `1px solid ${service.color}30`,
                    borderRadius: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden'
                  }}>
                    {/* Grid overlay */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: `linear-gradient(${service.color}10 1px, transparent 1px),
                                       linear-gradient(90deg, ${service.color}10 1px, transparent 1px)`,
                      backgroundSize: '30px 30px'
                    }} />

                    {/* Glow */}
                    <div style={{
                      position: 'absolute',
                      width: '200px',
                      height: '200px',
                      background: `radial-gradient(circle, ${service.color}40 0%, transparent 70%)`,
                      filter: 'blur(40px)'
                    }} />

                    <service.icon size={100} style={{ color: service.color, position: 'relative', zIndex: 10 }} strokeWidth={1} />
                  </div>
                </div>

                {/* Content */}
                <div style={{ order: index % 2 === 1 ? 1 : 2 }} className={`service-content service-content-${index % 2}`}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px 14px',
                    background: `${service.color}15`,
                    border: `1px solid ${service.color}30`,
                    borderRadius: '6px',
                    marginBottom: '20px'
                  }}>
                    <span style={{ color: service.color, fontSize: '0.8rem', fontFamily: 'monospace' }}>
                      {'<'}{service.key}{' />'}
                    </span>
                  </div>

                  <h2 style={{
                    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                    fontWeight: 700,
                    color: 'white',
                    marginBottom: '20px'
                  }}>
                    {t(`services.${service.key}.title`)}
                  </h2>
                  <p style={{
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '1.05rem',
                    lineHeight: 1.8,
                    marginBottom: '28px'
                  }}>
                    {t(`services.${service.key}.description`)}
                  </p>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {t(`services.${service.key}.features`, { returnObjects: true }).map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: isRTL ? 10 : -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          marginBottom: '12px',
                          flexDirection: isRTL ? 'row-reverse' : 'row'
                        }}
                      >
                        <div style={{
                          width: '22px',
                          height: '22px',
                          borderRadius: '6px',
                          background: `${service.color}20`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '2px'
                        }}>
                          <Check size={12} style={{ color: service.color }} />
                        </div>
                        <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{
        padding: '100px 0',
        position: 'relative',
        background: 'linear-gradient(180deg, rgba(30, 41, 59, 0.5) 0%, transparent 50%, rgba(30, 41, 59, 0.5) 100%)'
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
              <span style={{ color: '#f5a623' }}>{'// '}</span>
              {t('process.title')}
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: '1.1rem',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              {isRTL ? 'منهجيتنا المثبتة تضمن تسليم المشاريع بنجاح' : 'Our proven methodology ensures successful project delivery'}
            </p>
          </motion.div>

          <div className="grid-3" style={{ display: 'grid', gap: '24px' }}>
            {processSteps.map((step, index) => (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  position: 'relative',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '20px',
                  padding: '32px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  textAlign: isRTL ? 'right' : 'left'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = step.color;
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Step Number */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: isRTL ? 'auto' : '16px',
                  left: isRTL ? '16px' : 'auto',
                  fontSize: '3rem',
                  fontWeight: 800,
                  color: 'rgba(255,255,255,0.05)',
                  fontFamily: 'monospace'
                }}>
                  {step.number}
                </div>

                <div style={{
                  width: '56px',
                  height: '56px',
                  background: `${step.color}15`,
                  border: `1px solid ${step.color}30`,
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  marginLeft: isRTL ? 'auto' : '0',
                  marginRight: isRTL ? '0' : 'auto'
                }}>
                  <step.icon size={26} style={{ color: step.color }} />
                </div>

                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'white',
                  marginBottom: '12px'
                }}>
                  {t(`process.${step.key}.title`)}
                </h3>
                <p style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '0.95rem',
                  lineHeight: 1.7
                }}>
                  {t(`process.${step.key}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{
        padding: '100px 0',
        position: 'relative'
      }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 20px',
                background: 'rgba(96, 165, 250, 0.1)',
                border: '1px solid rgba(96, 165, 250, 0.3)',
                borderRadius: '50px',
                marginBottom: '24px',
                flexDirection: isRTL ? 'row-reverse' : 'row'
              }}
            >
              <HelpCircle size={16} style={{ color: '#60a5fa' }} />
              <span style={{ color: '#60a5fa', fontSize: '0.9rem', fontWeight: 500 }}>
                {isRTL ? 'أسئلة شائعة' : 'FAQ'}
              </span>
            </motion.div>

            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: 'white',
              marginBottom: '16px'
            }}>
              <span style={{ color: '#f5a623' }}>{'// '}</span>
              {isRTL ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: '1.1rem',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              {isRTL ? 'إجابات على الأسئلة الأكثر شيوعاً حول خدماتنا' : 'Answers to the most common questions about our services'}
            </p>
          </motion.div>

          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                style={{
                  background: openFAQ === index ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.03)',
                  border: openFAQ === index ? '1px solid rgba(96, 165, 250, 0.3)' : '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  style={{
                    width: '100%',
                    padding: '24px 28px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    textAlign: isRTL ? 'right' : 'left',
                    flexDirection: isRTL ? 'row-reverse' : 'row'
                  }}
                >
                  <span style={{
                    color: openFAQ === index ? '#60a5fa' : 'white',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    transition: 'color 0.3s ease',
                    lineHeight: 1.5
                  }}>
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ flexShrink: 0 }}
                  >
                    <ChevronDown size={20} style={{ color: openFAQ === index ? '#60a5fa' : 'rgba(255,255,255,0.4)' }} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p style={{
                        padding: '0 28px 24px',
                        color: 'rgba(255,255,255,0.6)',
                        fontSize: '0.95rem',
                        lineHeight: 1.8,
                        margin: 0,
                        textAlign: isRTL ? 'right' : 'left'
                      }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
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
              background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(245, 166, 35, 0.1) 100%)',
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
              inset: 0,
              backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }} />

            <div style={{ position: 'relative', zIndex: 10 }}>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                fontWeight: 700,
                color: 'white',
                marginBottom: '16px'
              }}>
                {isRTL ? 'هل أنت مستعد لبدء مشروعك؟' : 'Ready to Start Your Project?'}
              </h2>
              <p style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '1.1rem',
                marginBottom: '32px',
                maxWidth: '500px',
                margin: '0 auto 32px'
              }}>
                {isRTL ? 'دعنا نناقش كيف يمكننا تحويل رؤيتك إلى واقع.' : "Let's discuss how we can help bring your vision to life."}
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
                {isRTL ? 'تواصل معنا' : 'Get in Touch'}
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
        @media (min-width: 1024px) {
          .service-row {
            grid-template-columns: 1fr 1fr !important;
          }
          .service-row-1 .service-visual {
            order: 2 !important;
          }
          .service-row-1 .service-content {
            order: 1 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;
