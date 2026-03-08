import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { BookOpen, Clock, ArrowRight, Calendar, Tag } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
  const { t } = useTranslation();
  const { isRTL, currentLanguage } = useLanguage();

  const codeSnippets = ['blog.posts()', 'articles[]', 'publish()', 'read()'];

  const categoryColors = {
    mobile: { bg: 'rgba(168, 85, 247, 0.1)', border: 'rgba(168, 85, 247, 0.3)', text: '#a855f7' },
    web: { bg: 'rgba(16, 185, 129, 0.1)', border: 'rgba(16, 185, 129, 0.3)', text: '#10b981' },
    business: { bg: 'rgba(245, 166, 35, 0.1)', border: 'rgba(245, 166, 35, 0.3)', text: '#f5a623' }
  };

  const categoryNames = {
    mobile: { en: 'Mobile Apps', ar: 'تطبيقات الجوال' },
    web: { en: 'Web Development', ar: 'تطوير الويب' },
    business: { en: 'Business', ar: 'أعمال' }
  };

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
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 70%)',
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
                color: i % 2 === 0 ? '#10b981' : '#60a5fa',
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
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: '50px',
                marginBottom: '24px',
                flexDirection: isRTL ? 'row-reverse' : 'row'
              }}
            >
              <BookOpen size={16} style={{ color: '#10b981' }} />
              <span style={{ color: '#10b981', fontSize: '0.9rem', fontWeight: 500 }}>
                {isRTL ? 'رؤى ومقالات' : 'Insights & Resources'}
              </span>
            </motion.div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              color: 'white',
              marginBottom: '24px',
              lineHeight: 1.1
            }}>
              {t('blog.title')}
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.7
            }}>
              {t('blog.intro')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section style={{ padding: '0 0 120px' }}>
        <div className="container-custom">
          <div className="grid-3" style={{ gap: '32px' }}>
            {blogPosts.map((post, index) => {
              const colors = categoryColors[post.category];
              return (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = colors.text;
                    e.currentTarget.style.transform = 'translateY(-8px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Image Placeholder */}
                  <div style={{
                    height: '200px',
                    background: `linear-gradient(135deg, ${colors.bg} 0%, rgba(15, 23, 42, 0.8) 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    {/* Grid pattern */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: `linear-gradient(${colors.text}10 1px, transparent 1px),
                                       linear-gradient(90deg, ${colors.text}10 1px, transparent 1px)`,
                      backgroundSize: '30px 30px'
                    }} />
                    {/* Code decoration */}
                    <div style={{
                      fontFamily: 'monospace',
                      fontSize: '3rem',
                      color: colors.text,
                      opacity: 0.3
                    }}>
                      {post.category === 'mobile' ? '{ }' : post.category === 'web' ? '</>' : '[ ]'}
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '28px' }}>
                    {/* Category & Date */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '16px',
                      flexWrap: 'wrap',
                      flexDirection: isRTL ? 'row-reverse' : 'row'
                    }}>
                      <span style={{
                        padding: '4px 12px',
                        background: colors.bg,
                        border: `1px solid ${colors.border}`,
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        color: colors.text,
                        fontWeight: 500
                      }}>
                        {categoryNames[post.category][currentLanguage]}
                      </span>
                      <span style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '0.85rem',
                        color: 'rgba(255,255,255,0.5)',
                        flexDirection: isRTL ? 'row-reverse' : 'row'
                      }}>
                        <Calendar size={14} />
                        {new Date(post.date).toLocaleDateString(currentLanguage === 'ar' ? 'ar-QA' : 'en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 style={{
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: 'white',
                      marginBottom: '12px',
                      lineHeight: 1.4
                    }}>
                      {post.title[currentLanguage]}
                    </h2>

                    {/* Excerpt */}
                    <p style={{
                      fontSize: '0.95rem',
                      color: 'rgba(255,255,255,0.6)',
                      lineHeight: 1.7,
                      marginBottom: '20px'
                    }}>
                      {post.excerpt[currentLanguage]}
                    </p>

                    {/* Footer */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexDirection: isRTL ? 'row-reverse' : 'row'
                    }}>
                      <span style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '0.85rem',
                        color: 'rgba(255,255,255,0.5)',
                        flexDirection: isRTL ? 'row-reverse' : 'row'
                      }}>
                        <Clock size={14} />
                        {post.readTime} {isRTL ? 'دقائق قراءة' : 'min read'}
                      </span>

                      <Link
                        to={`/blog/${post.slug}`}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          color: colors.text,
                          fontSize: '0.9rem',
                          fontWeight: 600,
                          textDecoration: 'none',
                          transition: 'gap 0.3s ease',
                          flexDirection: isRTL ? 'row-reverse' : 'row'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.gap = '10px'}
                        onMouseOut={(e) => e.currentTarget.style.gap = '6px'}
                      >
                        {isRTL ? 'اقرأ المزيد' : 'Read More'}
                        <ArrowRight size={16} style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }} />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
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

export default Blog;
