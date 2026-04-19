import { motion } from 'framer-motion';
import { RefreshCcw } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const RefundPolicy = () => {
  const { isRTL } = useLanguage();

  const sections = isRTL
    ? [
        {
          title: 'نظرة عامة',
          body: 'في شفرة، نلتزم بتقديم خدمات تطوير برمجية عالية الجودة. توضح هذه السياسة الشروط التي تحكم طلبات استرداد المبالغ المدفوعة مقابل خدماتنا.'
        },
        {
          title: 'الدفعات والإيداع المبدئي',
          body: 'تبدأ معظم مشاريعنا بدفعة مقدمة غير مستردة بنسبة 50% لتأمين جدولة العمل وتغطية تكاليف التخطيط والتحليل. هذه الدفعة تضمن التزامنا ببدء العمل وتخصيص الموارد اللازمة.'
        },
        {
          title: 'حالات الاسترداد',
          body: 'يحق للعميل طلب استرداد المبلغ المتبقي (باستثناء الدفعة المقدمة) في حال: لم نبدأ العمل الفعلي على المشروع، أو عجزنا عن تسليم المشروع خلال الإطار الزمني المتفق عليه لأسباب تعود إلينا.'
        },
        {
          title: 'الحالات غير المؤهلة للاسترداد',
          body: 'لا يتم استرداد المبالغ في الحالات التالية: المشاريع المكتملة أو المسلمة جزئياً، التأخير الناتج عن عدم تقديم العميل للمحتوى أو الملاحظات في الوقت المناسب، أو تغييرات نطاق العمل بعد الموافقة على خطة المشروع.'
        },
        {
          title: 'آلية طلب الاسترداد',
          body: 'لطلب استرداد، يرجى التواصل معنا عبر البريد الإلكتروني info@shafrah.qa خلال 14 يوماً من تاريخ نشوء الطلب. سيتم مراجعة كل طلب على حدة والرد خلال 7 أيام عمل.'
        },
        {
          title: 'معالجة المدفوعات',
          body: 'في حال الموافقة على طلب الاسترداد، ستتم معالجة المبلغ عبر نفس وسيلة الدفع الأصلية خلال 14 يوم عمل، وقد تختلف المدة حسب مزود خدمة الدفع.'
        }
      ]
    : [
        {
          title: 'Overview',
          body: 'At Shafrah, we are committed to delivering high-quality software development services. This policy outlines the terms governing refund requests for payments made for our services.'
        },
        {
          title: 'Payments & Initial Deposit',
          body: 'Most of our projects begin with a non-refundable deposit of 50% to secure scheduling and cover planning and analysis costs. This deposit confirms our commitment to starting work and allocating the necessary resources.'
        },
        {
          title: 'Eligible Refund Cases',
          body: 'You may request a refund of the remaining balance (excluding the initial deposit) if: we have not started active work on the project, or we fail to deliver the project within the agreed-upon timeframe due to reasons on our side.'
        },
        {
          title: 'Non-Refundable Situations',
          body: 'Refunds are not issued for: completed or partially delivered projects, delays caused by the client not providing content or feedback in a timely manner, or scope changes after a project plan has been approved.'
        },
        {
          title: 'How to Request a Refund',
          body: 'To request a refund, please contact us at info@shafrah.qa within 14 days of the event giving rise to the request. Each request will be reviewed individually and responded to within 7 business days.'
        },
        {
          title: 'Processing of Payments',
          body: 'Approved refunds are processed via the original payment method within 14 business days. The exact timing may vary depending on your payment provider.'
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
            background: 'radial-gradient(circle, rgba(245, 166, 35, 0.12) 0%, transparent 70%)',
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
              background: 'rgba(245, 166, 35, 0.1)',
              border: '1px solid rgba(245, 166, 35, 0.3)',
              borderRadius: '50px',
              marginBottom: '24px',
              flexDirection: isRTL ? 'row-reverse' : 'row'
            }}
          >
            <RefreshCcw size={14} style={{ color: '#f5a623' }} />
            <span style={{ color: '#f5a623', fontSize: '0.85rem', fontFamily: 'monospace' }}>
              {isRTL ? 'السياسة // الاسترداد' : 'policy // refund'}
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
            {isRTL ? 'سياسة الاسترداد' : 'Refund Policy'}
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
              ? 'آخر تحديث: أبريل 2026. نرجو قراءة هذه السياسة بعناية قبل التعاقد على أي من خدماتنا.'
              : 'Last updated: April 2026. Please read this policy carefully before engaging our services.'}
          </motion.p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
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
                  <span style={{ color: '#f5a623', fontFamily: 'monospace' }}>{String(i + 1).padStart(2, '0')}.</span>
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
            background: 'rgba(96, 165, 250, 0.06)',
            border: '1px solid rgba(96, 165, 250, 0.2)',
            borderRadius: '16px',
            color: 'rgba(255,255,255,0.75)',
            fontSize: '0.95rem',
            lineHeight: 1.8
          }}>
            {isRTL
              ? 'للاستفسارات المتعلقة بهذه السياسة، تواصل معنا عبر '
              : 'For questions about this policy, contact us at '}
            <a
              href="mailto:info@shafrah.qa"
              style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: 600 }}
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

export default RefundPolicy;
