import { useParams, Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag, Share2, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { getPostBySlug, blogPosts } from '../data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams();
  const { t } = useTranslation();
  const { isRTL, currentLanguage } = useLanguage();

  const post = getPostBySlug(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

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

  const colors = categoryColors[post.category];

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  // Simple markdown-like rendering
  const renderContent = (content) => {
    const lines = content.trim().split('\n');
    const elements = [];
    let inList = false;
    let listItems = [];

    const closeList = () => {
      if (inList && listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} style={{
            marginBottom: '24px',
            paddingRight: isRTL ? '24px' : '0',
            paddingLeft: isRTL ? '0' : '24px'
          }}>
            {listItems.map((item, i) => (
              <li key={i} style={{
                color: 'rgba(255,255,255,0.8)',
                marginBottom: '8px',
                lineHeight: 1.8
              }}>{item}</li>
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      // Skip empty lines
      if (!trimmedLine) {
        closeList();
        return;
      }

      // H2
      if (trimmedLine.startsWith('## ')) {
        closeList();
        elements.push(
          <h2 key={index} style={{
            fontSize: '1.75rem',
            fontWeight: 700,
            color: 'white',
            marginTop: '48px',
            marginBottom: '20px'
          }}>
            {trimmedLine.replace('## ', '')}
          </h2>
        );
        return;
      }

      // H3
      if (trimmedLine.startsWith('### ')) {
        closeList();
        elements.push(
          <h3 key={index} style={{
            fontSize: '1.35rem',
            fontWeight: 600,
            color: 'white',
            marginTop: '36px',
            marginBottom: '16px'
          }}>
            {trimmedLine.replace('### ', '')}
          </h3>
        );
        return;
      }

      // H4
      if (trimmedLine.startsWith('#### ')) {
        closeList();
        elements.push(
          <h4 key={index} style={{
            fontSize: '1.1rem',
            fontWeight: 600,
            color: colors.text,
            marginTop: '28px',
            marginBottom: '12px'
          }}>
            {trimmedLine.replace('#### ', '')}
          </h4>
        );
        return;
      }

      // List items
      if (trimmedLine.startsWith('- ')) {
        inList = true;
        // Parse bold text in list items
        let itemContent = trimmedLine.replace('- ', '');
        if (itemContent.includes('**')) {
          const parts = itemContent.split('**');
          itemContent = parts.map((part, i) =>
            i % 2 === 1 ? <strong key={i} style={{ color: 'white' }}>{part}</strong> : part
          );
        }
        listItems.push(itemContent);
        return;
      }

      // Numbered list
      if (/^\d+\.\s/.test(trimmedLine)) {
        inList = true;
        let itemContent = trimmedLine.replace(/^\d+\.\s/, '');
        if (itemContent.includes('**')) {
          const parts = itemContent.split('**');
          itemContent = parts.map((part, i) =>
            i % 2 === 1 ? <strong key={i} style={{ color: 'white' }}>{part}</strong> : part
          );
        }
        listItems.push(itemContent);
        return;
      }

      // Code block
      if (trimmedLine.startsWith('```')) {
        closeList();
        return;
      }

      // Regular paragraph
      closeList();
      let paragraphContent = trimmedLine;

      // Handle links [text](url)
      if (paragraphContent.includes('[') && paragraphContent.includes('](')) {
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        const parts = [];
        let lastIndex = 0;
        let match;

        while ((match = linkRegex.exec(paragraphContent)) !== null) {
          if (match.index > lastIndex) {
            parts.push(paragraphContent.slice(lastIndex, match.index));
          }
          parts.push(
            <Link
              key={match.index}
              to={match[2]}
              style={{ color: colors.text, textDecoration: 'underline' }}
            >
              {match[1]}
            </Link>
          );
          lastIndex = match.index + match[0].length;
        }
        if (lastIndex < paragraphContent.length) {
          parts.push(paragraphContent.slice(lastIndex));
        }
        paragraphContent = parts;
      }

      // Handle bold **text**
      if (typeof paragraphContent === 'string' && paragraphContent.includes('**')) {
        const parts = paragraphContent.split('**');
        paragraphContent = parts.map((part, i) =>
          i % 2 === 1 ? <strong key={i} style={{ color: 'white' }}>{part}</strong> : part
        );
      }

      elements.push(
        <p key={index} style={{
          color: 'rgba(255,255,255,0.8)',
          fontSize: '1.1rem',
          lineHeight: 1.9,
          marginBottom: '20px'
        }}>
          {paragraphContent}
        </p>
      );
    });

    closeList();
    return elements;
  };

  const shareUrl = `https://shafrah.qa/blog/${post.slug}`;
  const shareTitle = post.title[currentLanguage];

  return (
    <div style={{ background: '#0f172a', minHeight: '100vh', direction: isRTL ? 'rtl' : 'ltr', textAlign: isRTL ? 'right' : 'left' }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        paddingTop: '140px',
        paddingBottom: '60px',
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
            top: '0',
            right: isRTL ? 'auto' : '10%',
            left: isRTL ? '10%' : 'auto',
            width: '600px',
            height: '600px',
            background: `radial-gradient(circle, ${colors.text}15 0%, transparent 70%)`,
            filter: 'blur(100px)'
          }} />
        </div>

        <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/blog"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'rgba(255,255,255,0.6)',
                textDecoration: 'none',
                marginBottom: '32px',
                fontSize: '0.95rem',
                transition: 'color 0.3s ease',
                flexDirection: isRTL ? 'row-reverse' : 'row'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = colors.text}
              onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
            >
              <ArrowLeft size={18} style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }} />
              {isRTL ? 'العودة للمدونة' : 'Back to Blog'}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ maxWidth: '800px' }}
          >
            {/* Category & Meta */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '24px',
              flexWrap: 'wrap',
              flexDirection: isRTL ? 'row-reverse' : 'row'
            }}>
              <span style={{
                padding: '6px 16px',
                background: colors.bg,
                border: `1px solid ${colors.border}`,
                borderRadius: '20px',
                fontSize: '0.85rem',
                color: colors.text,
                fontWeight: 500
              }}>
                {categoryNames[post.category][currentLanguage]}
              </span>
              <span style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.9rem',
                color: 'rgba(255,255,255,0.5)',
                flexDirection: isRTL ? 'row-reverse' : 'row'
              }}>
                <Calendar size={16} />
                {new Date(post.date).toLocaleDateString(currentLanguage === 'ar' ? 'ar-QA' : 'en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.9rem',
                color: 'rgba(255,255,255,0.5)',
                flexDirection: isRTL ? 'row-reverse' : 'row'
              }}>
                <Clock size={16} />
                {post.readTime} {isRTL ? 'دقائق قراءة' : 'min read'}
              </span>
            </div>

            {/* Title */}
            <h1 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.2,
              marginBottom: '24px'
            }}>
              {post.title[currentLanguage]}
            </h1>

            {/* Excerpt */}
            <p style={{
              fontSize: '1.25rem',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.7
            }}>
              {post.excerpt[currentLanguage]}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ paddingBottom: '80px' }}>
        <div className="container-custom">
          <div style={{ maxWidth: '800px' }}>
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '24px',
                padding: '48px',
                marginBottom: '48px'
              }}
            >
              {renderContent(post.content[currentLanguage])}
            </motion.article>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                flexWrap: 'wrap',
                marginBottom: '32px',
                flexDirection: isRTL ? 'row-reverse' : 'row'
              }}
            >
              <Tag size={18} style={{ color: 'rgba(255,255,255,0.5)' }} />
              {post.tags[currentLanguage].map((tag, index) => (
                <span
                  key={index}
                  style={{
                    padding: '6px 14px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.7)'
                  }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Share */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '24px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                flexDirection: isRTL ? 'row-reverse' : 'row'
              }}
            >
              <Share2 size={20} style={{ color: 'rgba(255,255,255,0.6)' }} />
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>
                {isRTL ? 'شارك المقال:' : 'Share this article:'}
              </span>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '10px',
                    color: 'rgba(255,255,255,0.7)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(29, 161, 242, 0.2)';
                    e.currentTarget.style.borderColor = '#1da1f2';
                    e.currentTarget.style.color = '#1da1f2';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                  }}
                >
                  <Twitter size={18} />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '10px',
                    color: 'rgba(255,255,255,0.7)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 119, 181, 0.2)';
                    e.currentTarget.style.borderColor = '#0077b5';
                    e.currentTarget.style.color = '#0077b5';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                  }}
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section style={{ paddingBottom: '120px' }}>
          <div className="container-custom">
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: 700,
              color: 'white',
              marginBottom: '32px'
            }}>
              {isRTL ? 'مقالات ذات صلة' : 'Related Articles'}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '16px',
                    padding: '24px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = colors.text;
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: 'white',
                    marginBottom: '8px'
                  }}>
                    {relatedPost.title[currentLanguage]}
                  </h3>
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: 1.6
                  }}>
                    {relatedPost.excerpt[currentLanguage].substring(0, 100)}...
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, rgba(245, 166, 35, 0.1) 0%, rgba(96, 165, 250, 0.1) 100%)',
        borderTop: '1px solid rgba(255,255,255,0.08)'
      }}>
        <div className="container-custom" style={{ textAlign: 'center' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 700,
            color: 'white',
            marginBottom: '16px'
          }}>
            {isRTL ? 'مستعد لبدء مشروعك؟' : 'Ready to Start Your Project?'}
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '1.1rem',
            marginBottom: '32px'
          }}>
            {isRTL ? 'تواصل معنا اليوم للحصول على استشارة مجانية' : 'Contact us today for a free consultation'}
          </p>
          <Link
            to="/contact"
            style={{
              display: 'inline-block',
              padding: '14px 32px',
              background: 'linear-gradient(135deg, #f5a623 0%, #fbbf24 100%)',
              color: '#0f172a',
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: '12px',
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(245, 166, 35, 0.4)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 25px rgba(245, 166, 35, 0.5)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(245, 166, 35, 0.4)';
            }}
          >
            {isRTL ? 'تواصل معنا' : 'Contact Us'}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
