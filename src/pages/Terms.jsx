import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Terms = () => {
  const { isRTL } = useLanguage();

  const sections = isRTL
    ? [
        {
          title: 'قبول الشروط',
          body: 'باستخدامك لموقع شفرة أو التعاقد على أي من خدماتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء منها، فيُرجى عدم استخدام الموقع أو طلب خدماتنا.'
        },
        {
          title: 'الخدمات المقدمة',
          body: 'نقدم خدمات تطوير المواقع الإلكترونية، وتطبيقات الهاتف، والبرمجيات المخصصة، وتصميم واجهات المستخدم. يتم الاتفاق على نطاق العمل والمخرجات لكل مشروع كتابياً قبل البدء.'
        },
        {
          title: 'الالتزامات المتبادلة',
          body: 'نلتزم بتنفيذ المشاريع وفق أفضل الممارسات الاحترافية وضمن الجداول الزمنية المتفق عليها. يلتزم العميل بتقديم المحتوى والموافقات والملاحظات في المواعيد المطلوبة لضمان سير العمل بسلاسة.'
        },
        {
          title: 'الملكية الفكرية',
          body: 'تنتقل ملكية الكود والتصاميم النهائية للعميل بعد سداد كامل المبلغ المتفق عليه. تحتفظ شفرة بحق عرض المشروع ضمن أعمالها التسويقية ما لم يُطلب خلاف ذلك كتابياً.'
        },
        {
          title: 'الأسعار والفوترة',
          body: 'يتم تحديد الأسعار في عرض سعر منفصل لكل مشروع. ما لم يُذكر خلاف ذلك، تكون الأسعار بالريال القطري ولا تشمل أي رسوم أو ضرائب إضافية قد تفرضها جهات ثالثة.'
        },
        {
          title: 'حدود المسؤولية',
          body: 'لا تتحمل شفرة مسؤولية أي أضرار غير مباشرة أو تبعية تنشأ عن استخدام خدماتنا. تقتصر مسؤوليتنا الكلية على قيمة المبلغ المدفوع فعلياً مقابل الخدمة محل النزاع.'
        },
        {
          title: 'السرية',
          body: 'نلتزم بالحفاظ على سرية جميع معلومات العميل وبياناته. يمكن توقيع اتفاقية عدم إفصاح منفصلة عند الطلب قبل البدء في المشاريع الحساسة.'
        },
        {
          title: 'إنهاء العقد',
          body: 'يحق لأي طرف إنهاء العقد بإشعار كتابي مسبق. في حال الإنهاء، يدفع العميل مقابل العمل المنجز حتى تاريخ الإنهاء، وتطبق شروط سياسة الاسترداد ذات الصلة.'
        },
        {
          title: 'القانون الحاكم',
          body: 'تخضع هذه الشروط وتُفسر وفقاً لقوانين دولة قطر، وتكون محاكم الدوحة هي الجهة المختصة بالنظر في أي نزاع ينشأ عن هذه الشروط أو العقود المبرمة استناداً إليها.'
        }
      ]
    : [
        {
          title: 'Acceptance of Terms',
          body: 'By using the Shafrah website or engaging any of our services, you agree to be bound by these terms and conditions. If you do not agree with any part, please do not use the site or request our services.'
        },
        {
          title: 'Services Provided',
          body: 'We provide web development, mobile application development, custom software, and UI/UX design services. Scope of work and deliverables are agreed upon in writing for each project before work begins.'
        },
        {
          title: 'Mutual Obligations',
          body: 'We commit to executing projects according to professional best practices and within the agreed timelines. The client commits to providing content, approvals, and feedback on time so that work can proceed smoothly.'
        },
        {
          title: 'Intellectual Property',
          body: 'Ownership of final code and designs transfers to the client upon full payment of the agreed amount. Shafrah retains the right to showcase the project in its marketing materials unless otherwise agreed in writing.'
        },
        {
          title: 'Pricing & Billing',
          body: 'Prices are set in a separate quotation for each project. Unless stated otherwise, prices are in Qatari Riyals and do not include any additional fees or taxes that may be imposed by third parties.'
        },
        {
          title: 'Limitation of Liability',
          body: 'Shafrah is not liable for any indirect or consequential damages arising from the use of our services. Our total liability is limited to the amount actually paid for the service in dispute.'
        },
        {
          title: 'Confidentiality',
          body: 'We are committed to maintaining the confidentiality of all client information and data. A separate non-disclosure agreement can be signed on request before starting sensitive projects.'
        },
        {
          title: 'Termination',
          body: 'Either party may terminate the contract with prior written notice. Upon termination, the client pays for work completed up to the termination date, subject to the applicable terms of the refund policy.'
        },
        {
          title: 'Governing Law',
          body: 'These terms are governed by and construed in accordance with the laws of the State of Qatar. The courts of Doha have exclusive jurisdiction over any dispute arising out of these terms or any contracts based on them.'
        }
      ];

  return (
    <div style={{
      background: '#0f172a',
      minHeight: '100vh',
      direction: isRTL ? 'rtl' : 'ltr',
      textAlign: isRTL ? 'right' : 'left'
    }}>
      <section style={{ position: 'relative', paddingTop: '160px', paddingBottom: '80px', overflow: 'hidden' }}>
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
            right: isRTL ? 'auto' : '5%',
            left: isRTL ? '5%' : 'auto',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(96, 165, 250, 0.12) 0%, transparent 70%)',
            filter: 'blur(80px)'
          }} />
        </div>

        <div className="container-custom" style={{ position: 'relative', zIndex: 10, maxWidth: '900px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
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
            <FileText size={14} style={{ color: '#60a5fa' }} />
            <span style={{ color: '#60a5fa', fontSize: '0.85rem', fontFamily: 'monospace' }}>
              {isRTL ? 'قانوني // الشروط' : 'legal // terms'}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.15,
              marginBottom: '16px'
            }}
          >
            {isRTL ? 'الشروط والأحكام' : 'Terms & Conditions'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: '1.05rem',
              lineHeight: 1.8,
              marginBottom: '48px'
            }}
          >
            {isRTL
              ? 'آخر تحديث: أبريل 2026. تحكم هذه الشروط علاقتك التعاقدية مع شركة شفرة.'
              : 'Last updated: April 2026. These terms govern your contractual relationship with Shafrah.'}
          </motion.p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                style={{
                  padding: '28px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px'
                }}
              >
                <h2 style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'white',
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexDirection: isRTL ? 'row-reverse' : 'row',
                  justifyContent: isRTL ? 'flex-end' : 'flex-start'
                }}>
                  <span style={{ color: '#60a5fa', fontFamily: 'monospace' }}>{String(i + 1).padStart(2, '0')}.</span>
                  {section.title}
                </h2>
                <p style={{
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '0.98rem',
                  lineHeight: 1.85,
                  margin: 0
                }}>
                  {section.body}
                </p>
              </motion.div>
            ))}
          </div>

          <div style={{
            marginTop: '48px',
            padding: '24px',
            background: 'rgba(245, 166, 35, 0.06)',
            border: '1px solid rgba(245, 166, 35, 0.2)',
            borderRadius: '16px',
            color: 'rgba(255,255,255,0.75)',
            fontSize: '0.95rem',
            lineHeight: 1.8
          }}>
            {isRTL
              ? 'لأي استفسار قانوني أو تعاقدي، تواصل معنا عبر '
              : 'For any legal or contractual inquiry, contact us at '}
            <a
              href="mailto:info@shafrah.qa"
              style={{ color: '#f5a623', textDecoration: 'none', fontWeight: 600 }}
            >
              info@shafrah.qa
            </a>
            .
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
