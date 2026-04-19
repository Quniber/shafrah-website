import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Smartphone, Monitor, Database, MessageSquare } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Start = () => {
  const { isRTL } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    service: '',
    timeline: '',
    budget: '',
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    { id: 'app', label: isRTL ? 'تطبيق جوال' : 'Mobile App', icon: Smartphone },
    { id: 'website', label: isRTL ? 'موقع' : 'Website', icon: Monitor },
    { id: 'system', label: isRTL ? 'نظام إدارة' : 'Management System', icon: Database },
    { id: 'other', label: isRTL ? 'غيره' : 'Other', icon: MessageSquare },
  ];

  const timelines = [
    { id: 'this-month', label: isRTL ? 'هالشهر' : 'This month' },
    { id: '3-months', label: isRTL ? 'خلال ٣ شهور' : 'Within 3 months' },
    { id: 'exploring', label: isRTL ? 'أستكشف' : 'Exploring' },
  ];

  const budgets = [
    { id: 'under-10k', label: isRTL ? 'أقل من 10K' : 'Under 10K' },
    { id: '10-30k', label: '10K – 30K' },
    { id: '30-50k', label: '30K – 50K' },
    { id: '50k+', label: '50K+' },
  ];

  const updateForm = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const canSubmit = formData.name && formData.phone && formData.service;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    const serviceLabel = services.find(s => s.id === formData.service)?.label || '—';
    const timelineLabel = timelines.find(t => t.id === formData.timeline)?.label || 'لم يحدد';
    const budgetLabel = budgets.find(b => b.id === formData.budget)?.label || 'لم يحدد';

    const fullMessage = `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;direction:rtl;text-align:right;">
  <div style="background:linear-gradient(135deg,#0f172a,#1e293b);padding:28px;text-align:center;border-radius:12px 12px 0 0;">
    <h1 style="color:#EB7E25;margin:0;font-size:22px;">طلب جديد — ابدأ مشروعك</h1>
    <p style="color:rgba(255,255,255,0.5);margin:8px 0 0;font-size:14px;">من صفحة shafrah.qa/start</p>
  </div>
  <div style="background:#f8fafc;padding:28px;">
    <table style="width:100%;border-collapse:collapse;">
      <tr><td style="padding:10px 0;color:#64748b;font-weight:bold;width:140px;">الاسم:</td><td style="padding:10px 0;color:#0f172a;">${formData.name}</td></tr>
      <tr><td style="padding:10px 0;color:#64748b;font-weight:bold;">الهاتف:</td><td style="padding:10px 0;color:#0f172a;"><a href="tel:${formData.phone}" style="color:#01699C;">${formData.phone}</a></td></tr>
      <tr><td style="padding:10px 0;color:#64748b;font-weight:bold;">الشركة/المشروع:</td><td style="padding:10px 0;color:#0f172a;">${formData.company || '—'}</td></tr>
      <tr><td style="padding:10px 0;color:#64748b;font-weight:bold;">الخدمة:</td><td style="padding:10px 0;color:#0f172a;">${serviceLabel}</td></tr>
      <tr><td style="padding:10px 0;color:#64748b;font-weight:bold;">موعد البدء:</td><td style="padding:10px 0;color:#0f172a;">${timelineLabel}</td></tr>
      <tr><td style="padding:10px 0;color:#64748b;font-weight:bold;">الميزانية:</td><td style="padding:10px 0;color:#0f172a;">${budgetLabel}</td></tr>
    </table>
  </div>
  <div style="background:#0f172a;padding:16px;text-align:center;border-radius:0 0 12px 12px;">
    <p style="color:#64748b;margin:0;font-size:12px;">shafrah.qa/start</p>
  </div>
</div>`.trim();

    try {
      const response = await fetch('https://email-api.shafrah.qa/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: 'no-reply@shafrah.qa',
          phone: formData.phone,
          subject: `[طلب جديد] ${formData.name} — ${serviceLabel}`,
          message: fullMessage,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setStatus({ type: 'success', message: isRTL ? 'تم إرسال طلبك بنجاح! بنتواصل معك قريباً' : 'Sent successfully! We will contact you soon' });
      } else {
        setStatus({ type: 'error', message: isRTL ? 'حصل خطأ، حاول مرة ثانية' : 'Error, please try again' });
      }
    } catch {
      setStatus({ type: 'error', message: isRTL ? 'حصل خطأ، حاول مرة ثانية' : 'Error, please try again' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = {
    width: '100%', padding: '14px 16px',
    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '12px', color: 'white', fontSize: '1rem', outline: 'none',
    transition: 'border-color 0.3s', textAlign: isRTL ? 'right' : 'left', fontFamily: 'inherit',
  };

  const labelStyle = {
    display: 'block', color: 'rgba(255,255,255,0.7)',
    fontSize: '0.95rem', marginBottom: '10px', fontWeight: 600,
  };

  const choiceBtn = (active) => ({
    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
    padding: '14px 20px',
    background: active ? 'rgba(235,126,37,0.15)' : 'rgba(255,255,255,0.04)',
    border: `1.5px solid ${active ? '#EB7E25' : 'rgba(255,255,255,0.08)'}`,
    borderRadius: '12px',
    color: active ? '#EB7E25' : 'rgba(255,255,255,0.6)',
    fontSize: '0.95rem', fontWeight: 600,
    cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'inherit',
  });

  return (
    <div style={{ background: '#0f172a', minHeight: '100vh', direction: isRTL ? 'rtl' : 'ltr', textAlign: isRTL ? 'right' : 'left' }}>

      {/* Hero */}
      <section style={{ position: 'relative', paddingTop: '140px', paddingBottom: '50px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{
            position: 'absolute', top: '5%',
            right: isRTL ? 'auto' : '10%', left: isRTL ? '10%' : 'auto',
            width: '500px', height: '500px',
            background: 'radial-gradient(circle, rgba(235,126,37,0.15) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }} />
        </div>

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '700px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'white', marginBottom: '20px', lineHeight: 1.2 }}>
              {isRTL ? (<>ابدأ <span style={{ color: '#EB7E25' }}>مشروعك</span></>) : (<>Start your <span style={{ color: '#EB7E25' }}>project</span></>)}
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
              {isRTL ? 'عبّي البيانات وبنتواصل معك' : 'Fill in your details and we will reach out'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section style={{ padding: '20px 0 100px' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div style={{
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '24px', padding: '40px', position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: '-50px',
                right: isRTL ? 'auto' : '-50px', left: isRTL ? '-50px' : 'auto',
                width: '200px', height: '200px',
                background: 'radial-gradient(circle, rgba(235,126,37,0.1) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }} />

              <div style={{ position: 'relative', zIndex: 10 }}>
                {status.type === 'success' ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '40px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <CheckCircle size={56} style={{ color: '#10b981', marginBottom: '16px' }} />
                    <h3 style={{ color: 'white', fontSize: '1.4rem', marginBottom: '8px' }}>
                      {isRTL ? 'تم إرسال طلبك!' : 'Request Sent!'}
                    </h3>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem' }}>
                      {isRTL ? 'بنتواصل معك قريباً' : 'We will contact you soon'}
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {/* Name */}
                    <div style={{ marginBottom: '20px' }}>
                      <label style={labelStyle}>{isRTL ? 'اسمك' : 'Your name'} *</label>
                      <input type="text" value={formData.name} onChange={e => updateForm('name', e.target.value)} required style={inputStyle}
                        onFocus={e => e.target.style.borderColor = '#EB7E25'}
                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                      />
                    </div>

                    {/* Phone */}
                    <div style={{ marginBottom: '20px' }}>
                      <label style={labelStyle}>{isRTL ? 'رقم التواصل' : 'Phone number'} *</label>
                      <input type="tel" value={formData.phone} onChange={e => updateForm('phone', e.target.value)} required style={inputStyle}
                        onFocus={e => e.target.style.borderColor = '#EB7E25'}
                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                      />
                    </div>

                    {/* Company */}
                    <div style={{ marginBottom: '24px' }}>
                      <label style={labelStyle}>{isRTL ? 'اسم الشركة / المشروع' : 'Company / Project name'}</label>
                      <input type="text" value={formData.company} onChange={e => updateForm('company', e.target.value)} style={inputStyle}
                        onFocus={e => e.target.style.borderColor = '#EB7E25'}
                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                      />
                    </div>

                    {/* Service */}
                    <div style={{ marginBottom: '24px' }}>
                      <label style={labelStyle}>{isRTL ? 'وش تحتاج؟' : 'What do you need?'} *</label>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                        {services.map(svc => (
                          <button key={svc.id} type="button" onClick={() => updateForm('service', svc.id)} style={choiceBtn(formData.service === svc.id)}>
                            <svc.icon size={16} /> {svc.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Timeline */}
                    <div style={{ marginBottom: '24px' }}>
                      <label style={labelStyle}>{isRTL ? 'متى تبي تبدأ؟' : 'When do you want to start?'}</label>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
                        {timelines.map(t => (
                          <button key={t.id} type="button" onClick={() => updateForm('timeline', t.id)} style={choiceBtn(formData.timeline === t.id)}>
                            {t.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Budget */}
                    <div style={{ marginBottom: '28px' }}>
                      <label style={labelStyle}>{isRTL ? 'الميزانية المتوقعة' : 'Expected budget'}</label>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                        {budgets.map(b => (
                          <button key={b.id} type="button" onClick={() => updateForm('budget', b.id)} style={choiceBtn(formData.budget === b.id)}>
                            {b.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Submit */}
                    <button type="submit" disabled={isSubmitting || !canSubmit} style={{
                      width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                      padding: '16px 32px', background: canSubmit ? '#EB7E25' : 'rgba(235,126,37,0.3)',
                      color: 'white', fontWeight: 700, fontSize: '1rem',
                      border: 'none', borderRadius: '12px',
                      cursor: (isSubmitting || !canSubmit) ? 'not-allowed' : 'pointer',
                      opacity: isSubmitting ? 0.7 : 1,
                      boxShadow: canSubmit ? '0 8px 32px rgba(235,126,37,0.3)' : 'none',
                      fontFamily: 'inherit', transition: 'all 0.2s',
                    }}>
                      {isSubmitting ? (
                        <span>{isRTL ? 'جاري الإرسال...' : 'Sending...'}</span>
                      ) : (
                        <>
                          <span>{isRTL ? 'أرسل' : 'Submit'}</span>
                          <Send size={18} />
                        </>
                      )}
                    </button>

                    {status.type === 'error' && (
                      <div style={{
                        display: 'flex', alignItems: 'center', gap: '10px', marginTop: '16px',
                        padding: '14px', borderRadius: '12px',
                        background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)',
                        flexDirection: isRTL ? 'row-reverse' : 'row',
                      }}>
                        <AlertCircle size={18} style={{ color: '#ef4444' }} />
                        <span style={{ color: '#ef4444', fontSize: '0.9rem' }}>{status.message}</span>
                      </div>
                    )}
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          form div[style*="grid-template-columns: 1fr 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default Start;
