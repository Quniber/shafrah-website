import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export const useLanguage = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const setLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  useEffect(() => {
    const isArabic = i18n.language === 'ar';
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.body.style.direction = isArabic ? 'rtl' : 'ltr';
    document.body.style.textAlign = isArabic ? 'right' : 'left';
  }, [i18n.language]);

  return {
    currentLanguage: i18n.language,
    isRTL: i18n.language === 'ar',
    toggleLanguage,
    setLanguage
  };
};
