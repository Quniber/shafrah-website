export const projects = [
  {
    id: 'beauty-porter',
    category: 'mobile',
    logo: '/portfolio/beauty-porter/logo.svg',
    title: {
      en: 'Beauty Porter',
      ar: 'بيوتي بورتر'
    },
    description: {
      en: 'A beauty services booking platform that connects customers with salons and beauty professionals. Features real-time availability, online booking, and service management.',
      ar: 'منصة حجز خدمات التجميل تربط العملاء بالصالونات ومحترفي التجميل. تتميز بالتوافر الفوري والحجز الإلكتروني وإدارة الخدمات.'
    },
    features: {
      en: [
        'Browse and book beauty services instantly',
        'Real-time salon availability & scheduling',
        'Service provider profiles with ratings & reviews',
        'Secure online payments',
        'Push notifications for booking reminders',
        'Multi-language support (Arabic & English)'
      ],
      ar: [
        'تصفح واحجز خدمات التجميل فوراً',
        'توافر الصالونات والجدولة بالوقت الحقيقي',
        'ملفات مقدمي الخدمة مع التقييمات والمراجعات',
        'دفع إلكتروني آمن',
        'إشعارات تذكير بالمواعيد',
        'دعم متعدد اللغات (عربي وإنجليزي)'
      ]
    },
    platforms: ['iOS', 'Android'],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Express'],
    status: { en: 'In Development', ar: 'قيد التطوير' },
    color: '#e91e8c'
  },
  {
    id: 'wasel',
    category: 'mobile',
    logo: '/portfolio/wasel/logo.png',
    title: {
      en: 'Wasel',
      ar: 'واصل'
    },
    description: {
      en: 'A ride-hailing and delivery application built for Qatar. Offers multiple ride categories, real-time GPS tracking, bilingual interface, and seamless payment integration.',
      ar: 'تطبيق نقل وتوصيل مصمم لقطر. يوفر فئات ركوب متعددة، تتبع GPS مباشر، واجهة ثنائية اللغة، وتكامل سلس مع أنظمة الدفع.'
    },
    features: {
      en: [
        'Multiple ride categories (Economy, Premium, XL)',
        'Real-time GPS tracking for rides',
        'Rider & Driver companion apps',
        'Ride history & trip details',
        'Bilingual interface (Arabic & English)',
        'Dark mode & theme customization'
      ],
      ar: [
        'فئات ركوب متعددة (اقتصادي، مميز، XL)',
        'تتبع GPS مباشر للرحلات',
        'تطبيقات مصاحبة للراكب والسائق',
        'سجل الرحلات وتفاصيلها',
        'واجهة ثنائية اللغة (عربي وإنجليزي)',
        'الوضع الداكن وتخصيص المظهر'
      ]
    },
    platforms: ['iOS', 'Android'],
    technologies: ['React Native', 'Expo', 'Node.js', 'PostgreSQL', 'Prisma'],
    status: { en: 'In Development', ar: 'قيد التطوير' },
    color: '#1a1a2e'
  }
];

export const getProjectById = (id) => projects.find(p => p.id === id);
export const getProjectsByCategory = (category) => projects.filter(p => p.category === category);
