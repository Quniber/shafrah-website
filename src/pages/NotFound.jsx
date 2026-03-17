import { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowRight, ArrowLeft, Ghost } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';

const NotFound = () => {
  const { isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  const [isHovered, setIsHovered] = useState(false);

  const glitchChars = ['@', '#', '$', '%', '&', '!', '?', '*', '~'];

  return (
    <div style={{
      background: '#0f172a',
      minHeight: '100vh',
      direction: isRTL ? 'rtl' : 'ltr',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
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
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.12) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'pulse404 6s ease-in-out infinite'
        }} />

        {/* Floating glitch characters */}
        {glitchChars.map((char, i) => (
          <motion.span
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.05, 0.15, 0.05],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              fontFamily: 'monospace',
              fontSize: `${14 + i * 2}px`,
              color: i % 2 === 0 ? '#ef4444' : '#60a5fa',
              top: `${10 + (i * 9)}%`,
              left: `${5 + (i * 10)}%`,
            }}
          >
            {char}
          </motion.span>
        ))}
      </div>

      <div style={{ position: 'relative', zIndex: 10, padding: '40px 20px' }}>
        {/* Ghost icon */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          style={{ marginBottom: '24px' }}
        >
          <Ghost size={64} style={{ color: 'rgba(255,255,255,0.15)' }} strokeWidth={1} />
        </motion.div>

        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
          style={{ position: 'relative', marginBottom: '32px' }}
        >
          <h1 style={{
            fontSize: 'clamp(8rem, 20vw, 14rem)',
            fontWeight: 900,
            lineHeight: 1,
            background: 'linear-gradient(135deg, #ef4444 0%, #f97316 50%, #f5a623 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontFamily: 'monospace',
            position: 'relative'
          }}>
            404
          </h1>

          {/* Glitch layers */}
          <motion.h1
            animate={{ x: [-2, 2, -1, 0], opacity: [0.3, 0, 0.2, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              fontSize: 'clamp(8rem, 20vw, 14rem)',
              fontWeight: 900,
              lineHeight: 1,
              color: '#60a5fa',
              fontFamily: 'monospace',
              pointerEvents: 'none'
            }}
          >
            404
          </motion.h1>
        </motion.div>

        {/* Error Code Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 20px',
            background: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: '50px',
            marginBottom: '24px'
          }}
        >
          <span style={{ color: '#ef4444', fontSize: '0.85rem', fontFamily: 'monospace' }}>
            Error 404 — {isRTL ? 'الصفحة غير موجودة' : 'Page Not Found'}
          </span>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 700,
            color: 'white',
            marginBottom: '16px'
          }}>
            {isRTL ? 'عذراً، ضللت الطريق!' : 'Oops, you wandered off!'}
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '1.1rem',
            lineHeight: 1.7,
            maxWidth: '500px',
            margin: '0 auto 40px'
          }}>
            {isRTL
              ? 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها. لا تقلق، يمكنك العودة إلى الصفحة الرئيسية.'
              : "The page you're looking for doesn't exist or has been moved. Don't worry, let's get you back home."}
          </p>
        </motion.div>

        {/* Code snippet decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          style={{
            display: 'inline-block',
            padding: '12px 24px',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '12px',
            marginBottom: '40px',
            fontFamily: 'monospace',
            fontSize: '0.85rem',
            color: 'rgba(255,255,255,0.4)'
          }}
        >
          <span style={{ color: '#ef4444' }}>catch</span>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>(</span>
          <span style={{ color: '#f5a623' }}>err</span>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>)</span>
          {' => '}
          <span style={{ color: '#60a5fa' }}>redirect</span>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>(</span>
          <span style={{ color: '#10b981' }}>"/home"</span>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>)</span>
        </motion.div>

        <br />

        {/* Go Home Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '16px 40px',
              background: isHovered
                ? 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)'
                : 'linear-gradient(135deg, #f5a623 0%, #fbbf24 100%)',
              color: '#0f172a',
              fontWeight: 600,
              fontSize: '1rem',
              borderRadius: '12px',
              textDecoration: 'none',
              boxShadow: isHovered
                ? '0 12px 40px rgba(245, 166, 35, 0.5)'
                : '0 8px 32px rgba(245, 166, 35, 0.4)',
              transition: 'all 0.3s ease',
              transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
              flexDirection: isRTL ? 'row-reverse' : 'row'
            }}
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
          >
            <Home size={18} />
            {isRTL ? 'العودة للرئيسية' : 'Go Home'}
            <Arrow size={18} />
          </Link>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse404 {
          0%, 100% { opacity: 0.3; transform: translateX(-50%) scale(1); }
          50% { opacity: 0.5; transform: translateX(-50%) scale(1.15); }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
