import { useState, useEffect } from 'react';

const SnapchatAds = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    phone: '',
    email: '',
    budget: '',
    projectIdea: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Snapchat Pixel
  useEffect(() => {
    (function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function()
    {a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
    a.queue=[];var s='script';var r=t.createElement(s);r.async=!0;
    r.src=n;var u=t.getElementsByTagName(s)[0];
    u.parentNode.insertBefore(r,u);})(window,document,
    'https://sc-static.net/scevent.min.js');

    if (window.snaptr) {
      window.snaptr('init', 'YOUR_PIXEL_ID');
      window.snaptr('track', 'PAGE_VIEW');
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    if (window.snaptr) {
      window.snaptr('track', 'SIGN_UP');
    }

    try {
      const response = await fetch('https://email-api.shafrah.qa/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.contactName,
          email: formData.email,
          phone: formData.phone,
          subject: `[طلب إعلان] ${formData.businessName}`,
          message: `النشاط التجاري: ${formData.businessName}\nالمسؤول: ${formData.contactName}\nالهاتف: ${formData.phone}\nالبريد: ${formData.email}\nالميزانية: ${formData.budget}\n\nفكرة المشروع:\n${formData.projectIdea}`
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ type: 'success', message: 'تم الإرسال بنجاح! سنتواصل معك قريباً' });
        setFormData({ businessName: '', contactName: '', phone: '', email: '', budget: '', projectIdea: '' });
      } else {
        setStatus({ type: 'error', message: 'حدث خطأ. حاول مرة أخرى' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'حدث خطأ. حاول مرة أخرى' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    outline: 'none',
    boxSizing: 'border-box',
    WebkitAppearance: 'none',
    textAlign: 'right'
  };

  return (
    <div style={{
      background: '#fff',
      minHeight: '100vh',
      direction: 'rtl',
      padding: '40px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{
            fontSize: '24px',
            fontWeight: '700',
            color: '#111',
            marginBottom: '8px'
          }}>
            ابدأ حملتك الإعلانية
          </h1>
          <p style={{ color: '#666', fontSize: '15px' }}>
            املأ النموذج وسنتواصل معك
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Business Name */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#333', marginBottom: '6px' }}>
              اسم النشاط التجاري *
            </label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          {/* Contact Name */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#333', marginBottom: '6px' }}>
              اسم المسؤول *
            </label>
            <input
              type="text"
              name="contactName"
              value={formData.contactName}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          {/* Phone */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#333', marginBottom: '6px' }}>
              رقم الهاتف *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+974"
              dir="ltr"
              style={{...inputStyle, textAlign: 'left'}}
            />
          </div>

          {/* Email */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#333', marginBottom: '6px' }}>
              البريد الإلكتروني *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              dir="ltr"
              style={{...inputStyle, textAlign: 'left'}}
            />
          </div>

          {/* Budget */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#333', marginBottom: '6px' }}>
              الميزانية *
            </label>
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              placeholder="مثال: 2000 ر.ق"
              style={inputStyle}
            />
          </div>

          {/* Project Idea */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#333', marginBottom: '6px' }}>
              نبذة عن المشروع *
            </label>
            <textarea
              name="projectIdea"
              value={formData.projectIdea}
              onChange={handleChange}
              required
              rows={4}
              placeholder="اكتب فكرة عن مشروعك أو الموقع أو التطبيق..."
              style={{...inputStyle, resize: 'none'}}
            />
          </div>

          {/* Status */}
          {status.message && (
            <div style={{
              padding: '14px 16px',
              borderRadius: '10px',
              marginBottom: '16px',
              background: status.type === 'success' ? '#d4edda' : '#f8d7da',
              color: status.type === 'success' ? '#155724' : '#721c24',
              fontSize: '14px',
              textAlign: 'center'
            }}>
              {status.message}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              width: '100%',
              padding: '16px',
              fontSize: '16px',
              fontWeight: '600',
              color: '#fff',
              background: '#f5a623',
              border: 'none',
              borderRadius: '10px',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              opacity: isSubmitting ? 0.7 : 1,
              WebkitAppearance: 'none'
            }}
          >
            {isSubmitting ? 'جاري الإرسال...' : 'إرسال'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SnapchatAds;
