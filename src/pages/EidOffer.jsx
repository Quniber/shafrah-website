import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Gift, Smartphone, Monitor, Database, MessageSquare, Bot, FileText, Clock, CalendarDays, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const EidOffer = () => {
  const { isRTL } = useLanguage();
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const [formData, setFormData] = useState({
    // Step 1 — Project status
    projectStatus: '', // 'ready' or 'planning'
    hasDocuments: '',   // 'yes' or 'no' (only if projectStatus === 'ready')
    // Step 2 — Details
    selectedServices: [],
    timeline: '',       // delivery timeline
    startDate: '',      // expected start
    readyIn7Days: '',   // 'yes' or 'no'
    // Step 3 — Idea
    message: '',
    // Step 4 — Contact
    name: '',
    email: '',
    phone: '',
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    { id: 'app', label: isRTL ? 'تطبيق جوال' : 'Mobile App', icon: Smartphone },
    { id: 'website', label: isRTL ? 'موقع ويب' : 'Website', icon: Monitor },
    { id: 'system', label: isRTL ? 'نظام إدارة' : 'Management System', icon: Database },
    { id: 'crm', label: 'CRM', icon: Database },
    { id: 'bot', label: isRTL ? 'بوت واتساب' : 'WhatsApp Bot', icon: Bot },
    { id: 'other', label: isRTL ? 'شي ثاني' : 'Other', icon: MessageSquare },
  ];

  const timelines = [
    { id: '1month', label: isRTL ? 'أقل من شهر' : 'Less than 1 month' },
    { id: '1-3months', label: isRTL ? '١ - ٣ شهور' : '1 - 3 months' },
    { id: '3-6months', label: isRTL ? '٣ - ٦ شهور' : '3 - 6 months' },
    { id: 'flexible', label: isRTL ? 'مرن' : 'Flexible' },
  ];

  const startDates = [
    { id: 'immediately', label: isRTL ? 'فوراً' : 'Immediately' },
    { id: '1week', label: isRTL ? 'خلال أسبوع' : 'Within a week' },
    { id: '2weeks', label: isRTL ? 'خلال أسبوعين' : 'Within 2 weeks' },
    { id: '1month', label: isRTL ? 'خلال شهر' : 'Within a month' },
  ];

  const updateForm = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleService = (id) => {
    setFormData(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(id)
        ? prev.selectedServices.filter(s => s !== id)
        : [...prev.selectedServices, id]
    }));
  };

  const canNext = () => {
    if (step === 1) return formData.projectStatus !== '';
    if (step === 2) return formData.selectedServices.length > 0;
    if (step === 3) return true;
    if (step === 4) return formData.name && formData.phone && formData.email;
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    const serviceLabels = formData.selectedServices.map(id => services.find(s => s.id === id)?.label).join(', ');
    const timelineLabel = timelines.find(t => t.id === formData.timeline)?.label || 'لم يحدد';
    const startLabel = startDates.find(s => s.id === formData.startDate)?.label || 'لم يحدد';

    const readyStatus = formData.projectStatus === 'ready' ? '✅ جاهز' : '📋 تحت التخطيط';
    const docsStatus = formData.hasDocuments === 'yes' ? '✅ جاهزة' : '❌ غير جاهزة';
    const ready7 = formData.readyIn7Days === 'yes' ? '✅ نعم' : formData.readyIn7Days === 'no' ? '❌ لا' : '—';

    const fullMessage = `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;direction:rtl;text-align:right;">
  <div style="background:linear-gradient(135deg,#0f172a,#1e293b);padding:28px;text-align:center;border-radius:12px 12px 0 0;">
    <h1 style="color:#EB7E25;margin:0;font-size:22px;">🌙 طلب عرض العيد — جديد</h1>
    <p style="color:rgba(255,255,255,0.5);margin:8px 0 0;font-size:14px;">من صفحة shafrah.qa/eid-offer</p>
  </div>

  <div style="background:#f8fafc;padding:28px;">
    <h3 style="color:#0f172a;margin:0 0 16px;font-size:16px;border-bottom:2px solid #EB7E25;padding-bottom:8px;">👤 بيانات العميل</h3>
    <table style="width:100%;border-collapse:collapse;">
      <tr><td style="padding:10px 0;color:#64748b;font-weight:bold;width:140px;">الاسم:</td><td style="padding:10px 0;color:#0f172a;font-size:15px;">${formData.name}</td></tr>
      <tr><td style="padding:10px 0;color:#64748b;font-weight:bold;">الهاتف:</td><td style="padding:10px 0;color:#0f172a;font-size:15px;"><a href="tel:${formData.phone}" style="color:#01699C;">${formData.phone}</a></td></tr>
      <tr><td style="padding:10px 0;color:#64748b;font-weight:bold;">الإيميل:</td><td style="padding:10px 0;color:#0f172a;font-size:15px;"><a href="mailto:${formData.email}" style="color:#01699C;">${formData.email}</a></td></tr>
    </table>

    <h3 style="color:#0f172a;margin:24px 0 16px;font-size:16px;border-bottom:2px solid #EB7E25;padding-bottom:8px;">📊 حالة المشروع</h3>
    <table style="width:100%;border-collapse:collapse;">
      <tr><td style="padding:10px 0;color:#64748b;font-weight:bold;width:140px;">الحالة:</td><td style="padding:10px 0;color:#0f172a;font-size:15px;">${readyStatus}</td></tr>
      ${formData.projectStatus === 'ready' ? `<tr><td style="padding:10px 0;color:#64748b;font-weight:bold;">الأوراق الرسمية:</td><td style="padding:10px 0;color:#0f172a;font-size:15px;">${docsStatus}</td></tr>` : ''}
    </table>

    <h3 style="color:#0f172a;margin:24px 0 16px;font-size:16px;border-bottom:2px solid #EB7E25;padding-bottom:8px;">⚙️ تفاصيل المشروع</h3>
    <table style="width:100%;border-collapse:collapse;">
      <tr><td style="padding:10px 0;color:#64748b;font-weight:bold;width:140px;">الخدمات:</td><td style="padding:10px 0;color:#0f172a;font-size:15px;">${serviceLabels || '—'}</td></tr>
      <tr><td style="padding:10px 0;color:#64748b;font-weight:bold;">مدة الاستلام:</td><td style="padding:10px 0;color:#0f172a;font-size:15px;">${timelineLabel}</td></tr>
      <tr><td style="padding:10px 0;color:#64748b;font-weight:bold;">البدء المتوقع:</td><td style="padding:10px 0;color:#0f172a;font-size:15px;">${startLabel}</td></tr>
      <tr><td style="padding:10px 0;color:#64748b;font-weight:bold;">جاهز خلال ٧ أيام:</td><td style="padding:10px 0;color:#0f172a;font-size:15px;">${ready7}</td></tr>
    </table>

    <h3 style="color:#0f172a;margin:24px 0 16px;font-size:16px;border-bottom:2px solid #EB7E25;padding-bottom:8px;">💡 وصف الفكرة</h3>
    <div style="background:white;padding:16px;border-radius:8px;border:1px solid #e2e8f0;">
      <p style="color:#0f172a;line-height:1.8;margin:0;white-space:pre-wrap;font-size:14px;">${formData.message || 'لم يكتب وصف'}</p>
    </div>
  </div>

  <div style="background:#0f172a;padding:16px;text-align:center;border-radius:0 0 12px 12px;">
    <p style="color:#64748b;margin:0;font-size:12px;">عرض العيد — shafrah.qa/eid-offer</p>
  </div>
</div>
    `.trim();

    try {
      const response = await fetch('https://email-api.shafrah.qa/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `[عرض العيد] طلب جديد — ${formData.name}`,
          message: fullMessage,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          type: 'success',
          message: isRTL ? 'تم إرسال طلبك بنجاح! بنتواصل معك قريباً' : 'Sent successfully! We will contact you soon'
        });
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
    padding: '14px 20px', width: '100%',
    background: active ? 'rgba(235,126,37,0.15)' : 'rgba(255,255,255,0.04)',
    border: `1.5px solid ${active ? '#EB7E25' : 'rgba(255,255,255,0.08)'}`,
    borderRadius: '12px',
    color: active ? '#EB7E25' : 'rgba(255,255,255,0.6)',
    fontSize: '0.95rem', fontWeight: 600,
    cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'inherit',
  });

  const pillBtn = (active) => ({
    display: 'inline-flex', alignItems: 'center', gap: '6px',
    padding: '10px 18px',
    background: active ? 'rgba(235,126,37,0.15)' : 'rgba(255,255,255,0.04)',
    border: `1.5px solid ${active ? '#EB7E25' : 'rgba(255,255,255,0.08)'}`,
    borderRadius: '10px',
    color: active ? '#EB7E25' : 'rgba(255,255,255,0.6)',
    fontSize: '0.85rem', fontWeight: 600,
    cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'inherit',
  });

  // Progress bar
  const ProgressBar = () => (
    <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
      {[1, 2, 3, 4].map(s => (
        <div key={s} style={{
          flex: 1, height: '4px', borderRadius: '2px',
          background: s <= step ? '#EB7E25' : 'rgba(255,255,255,0.08)',
          transition: 'background 0.3s',
        }} />
      ))}
    </div>
  );

  const stepLabels = isRTL
    ? ['حالة المشروع', 'تفاصيل المشروع', 'وصف الفكرة', 'بياناتك']
    : ['Project Status', 'Project Details', 'Your Idea', 'Your Info'];

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
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '8px 20px', background: 'rgba(235,126,37,0.1)',
              border: '1px solid rgba(235,126,37,0.3)', borderRadius: '50px',
              marginBottom: '24px',
            }}>
              <Gift size={16} style={{ color: '#EB7E25' }} />
              <span style={{ color: '#EB7E25', fontSize: '0.9rem', fontWeight: 600 }}>
                {isRTL ? 'عرض العيد 🌙' : 'Eid Offer 🌙'}
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'white', marginBottom: '20px', lineHeight: 1.2 }}>
              {isRTL ? (<>نبني لك <span style={{ color: '#EB7E25' }}>اللي تبيه</span></>) : (<>We build <span style={{ color: '#EB7E25' }}>what you need</span></>)}
            </h1>

            <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
              {isRTL ? 'تطبيق، موقع، نظام إدارة، أو أي حل تقني — أول شهرين مجاناً' : 'App, website, management system — first 2 months free'}
            </p>

            <div style={{ display: 'inline-block', background: '#EB7E25', color: 'white', fontSize: '1.1rem', fontWeight: 800, padding: '10px 28px', marginTop: '12px' }}>
              {isRTL ? 'أول شهرين مجاناً' : 'First 2 months FREE'}
            </div>
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
                {/* Step indicator */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)' }}>
                    {step} / {totalSteps}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: '#EB7E25', fontWeight: 600 }}>
                    {stepLabels[step - 1]}
                  </span>
                </div>
                <ProgressBar />

                {status.type === 'success' ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '40px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <CheckCircle size={56} style={{ color: '#10b981', marginBottom: '16px' }} />
                    <h3 style={{ color: 'white', fontSize: '1.4rem', marginBottom: '8px' }}>
                      {isRTL ? 'تم إرسال طلبك!' : 'Request Sent!'}
                    </h3>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem' }}>
                      {isRTL ? 'بنتواصل معك خلال ٢٤ ساعة' : 'We will contact you within 24 hours'}
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <AnimatePresence mode="wait">

                      {/* ═══ STEP 1: Project Status ═══ */}
                      {step === 1 && (
                        <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                          <label style={labelStyle}>
                            <FileText size={16} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: isRTL ? '0' : '6px', marginRight: isRTL ? '6px' : '0' }} />
                            {isRTL ? 'مشروعك جاهز ولا تحت التخطيط؟' : 'Is your project ready or still planning?'}
                          </label>
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
                            <button type="button" onClick={() => updateForm('projectStatus', 'ready')} style={choiceBtn(formData.projectStatus === 'ready')}>
                              {isRTL ? 'جاهز' : 'Ready'}
                            </button>
                            <button type="button" onClick={() => { updateForm('projectStatus', 'planning'); updateForm('hasDocuments', ''); }} style={choiceBtn(formData.projectStatus === 'planning')}>
                              {isRTL ? 'تحت التخطيط' : 'Still Planning'}
                            </button>
                          </div>

                          {formData.projectStatus === 'ready' && (
                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ duration: 0.3 }}>
                              <label style={labelStyle}>
                                {isRTL ? 'الأوراق الرسمية جاهزة؟ (سجل تجاري، رخصة، الخ)' : 'Are official documents ready? (CR, license, etc.)'}
                              </label>
                              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                <button type="button" onClick={() => updateForm('hasDocuments', 'yes')} style={choiceBtn(formData.hasDocuments === 'yes')}>
                                  {isRTL ? 'نعم' : 'Yes'}
                                </button>
                                <button type="button" onClick={() => updateForm('hasDocuments', 'no')} style={choiceBtn(formData.hasDocuments === 'no')}>
                                  {isRTL ? 'لا' : 'No'}
                                </button>
                              </div>
                            </motion.div>
                          )}
                        </motion.div>
                      )}

                      {/* ═══ STEP 2: Details ═══ */}
                      {step === 2 && (
                        <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                          {/* Services */}
                          <label style={labelStyle}>{isRTL ? 'وش تحتاج؟' : 'What do you need?'}</label>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '24px' }}>
                            {services.map(svc => (
                              <button key={svc.id} type="button" onClick={() => toggleService(svc.id)} style={pillBtn(formData.selectedServices.includes(svc.id))}>
                                <svc.icon size={15} /> {svc.label}
                              </button>
                            ))}
                          </div>

                          {/* Timeline */}
                          <label style={labelStyle}>
                            <Clock size={16} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: isRTL ? '0' : '6px', marginRight: isRTL ? '6px' : '0' }} />
                            {isRTL ? 'كم المدة المطلوبة للاستلام؟' : 'Delivery timeline?'}
                          </label>
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '24px' }}>
                            {timelines.map(t => (
                              <button key={t.id} type="button" onClick={() => updateForm('timeline', t.id)} style={choiceBtn(formData.timeline === t.id)}>
                                {t.label}
                              </button>
                            ))}
                          </div>

                          {/* Start date */}
                          <label style={labelStyle}>
                            <CalendarDays size={16} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: isRTL ? '0' : '6px', marginRight: isRTL ? '6px' : '0' }} />
                            {isRTL ? 'متى موعد البدء المتوقع؟' : 'Expected start date?'}
                          </label>
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '24px' }}>
                            {startDates.map(s => (
                              <button key={s.id} type="button" onClick={() => updateForm('startDate', s.id)} style={choiceBtn(formData.startDate === s.id)}>
                                {s.label}
                              </button>
                            ))}
                          </div>

                          {/* Ready in 7 days */}
                          <label style={labelStyle}>
                            <Zap size={16} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: isRTL ? '0' : '6px', marginRight: isRTL ? '6px' : '0' }} />
                            {isRTL ? 'جاهز تبدأ خلال ٧ أيام؟' : 'Ready to start within 7 days?'}
                          </label>
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                            <button type="button" onClick={() => updateForm('readyIn7Days', 'yes')} style={choiceBtn(formData.readyIn7Days === 'yes')}>
                              {isRTL ? 'نعم' : 'Yes'}
                            </button>
                            <button type="button" onClick={() => updateForm('readyIn7Days', 'no')} style={choiceBtn(formData.readyIn7Days === 'no')}>
                              {isRTL ? 'لا' : 'No'}
                            </button>
                          </div>
                        </motion.div>
                      )}

                      {/* ═══ STEP 3: Idea ═══ */}
                      {step === 3 && (
                        <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                          <label style={labelStyle}>{isRTL ? 'وصف مختصر لفكرتك (اختياري)' : 'Brief description of your idea (optional)'}</label>
                          <textarea
                            name="message" value={formData.message} onChange={(e) => updateForm('message', e.target.value)}
                            rows={6}
                            placeholder={isRTL ? 'قولنا عن مشروعك أو فكرتك...' : 'Tell us about your project or idea...'}
                            style={{ ...inputStyle, resize: 'none' }}
                            onFocus={e => e.target.style.borderColor = '#EB7E25'}
                            onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                          />
                        </motion.div>
                      )}

                      {/* ═══ STEP 4: Contact Info ═══ */}
                      {step === 4 && (
                        <motion.div key="s4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                          <div style={{ marginBottom: '16px' }}>
                            <label style={labelStyle}>{isRTL ? 'الاسم' : 'Name'} *</label>
                            <input type="text" value={formData.name} onChange={e => updateForm('name', e.target.value)} required style={inputStyle}
                              onFocus={e => e.target.style.borderColor = '#EB7E25'}
                              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                            />
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                            <div>
                              <label style={labelStyle}>{isRTL ? 'رقم الهاتف' : 'Phone'} *</label>
                              <input type="tel" value={formData.phone} onChange={e => updateForm('phone', e.target.value)} required style={inputStyle}
                                onFocus={e => e.target.style.borderColor = '#EB7E25'}
                                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                              />
                            </div>
                            <div>
                              <label style={labelStyle}>{isRTL ? 'الإيميل' : 'Email'} *</label>
                              <input type="email" value={formData.email} onChange={e => updateForm('email', e.target.value)} required style={inputStyle}
                                onFocus={e => e.target.style.borderColor = '#EB7E25'}
                                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                              />
                            </div>
                          </div>
                        </motion.div>
                      )}

                    </AnimatePresence>

                    {/* Navigation */}
                    <div style={{ display: 'flex', gap: '12px', marginTop: '28px' }}>
                      {step > 1 && (
                        <button type="button" onClick={() => setStep(s => s - 1)} style={{
                          flex: '0 0 auto', display: 'flex', alignItems: 'center', gap: '6px',
                          padding: '14px 24px', background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px',
                          color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', fontWeight: 600,
                          cursor: 'pointer', fontFamily: 'inherit',
                        }}>
                          {isRTL ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                          {isRTL ? 'رجوع' : 'Back'}
                        </button>
                      )}

                      {step < totalSteps ? (
                        <button type="button" onClick={() => canNext() && setStep(s => s + 1)} style={{
                          flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                          padding: '14px 32px', background: canNext() ? '#EB7E25' : 'rgba(235,126,37,0.3)',
                          border: 'none', borderRadius: '12px', color: 'white',
                          fontSize: '1rem', fontWeight: 700, cursor: canNext() ? 'pointer' : 'not-allowed',
                          fontFamily: 'inherit', transition: 'all 0.2s',
                        }}>
                          {isRTL ? 'التالي' : 'Next'}
                          {isRTL ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
                        </button>
                      ) : (
                        <button type="submit" disabled={isSubmitting || !canNext()} style={{
                          flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                          padding: '16px 32px', background: canNext() ? '#EB7E25' : 'rgba(235,126,37,0.3)',
                          color: 'white', fontWeight: 700, fontSize: '1rem',
                          border: 'none', borderRadius: '12px',
                          cursor: (isSubmitting || !canNext()) ? 'not-allowed' : 'pointer',
                          opacity: isSubmitting ? 0.7 : 1,
                          boxShadow: '0 8px 32px rgba(235,126,37,0.3)',
                          fontFamily: 'inherit',
                        }}>
                          {isSubmitting ? (
                            <span>{isRTL ? 'جاري الإرسال...' : 'Sending...'}</span>
                          ) : (
                            <>
                              <span>{isRTL ? 'أرسل طلبك' : 'Submit'}</span>
                              <Send size={18} />
                            </>
                          )}
                        </button>
                      )}
                    </div>

                    {/* Error status */}
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
          form div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default EidOffer;
