/**
 * Language context for managing bilingual support and RTL layout
 */
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.blog': 'Blog',
    
    // Homepage
    'hero.title': 'Senior Graphic Designer',
    'hero.subtitle': 'Creative visual identity solutions for your brand',
    'hero.cta': 'View My Work',
    'hero.contact': 'Get In Touch',
    
    // About
    'about.title': 'About Me',
    'about.description': 'Creative and experienced Branding and Logo Designer with over 9 years of expertise in developing impactful visual identities.',
    'about.experience': 'Experience',
    'about.education': 'Education',
    'about.skills': 'Skills',
    'about.languages': 'Languages',
    
    // Services
    'services.title': 'My Services',
    'services.logo': 'Logo Design',
    'services.branding': 'Brand Identity',
    'services.print': 'Print Design',
    'services.ui': 'UI/UX Design',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.info': 'Contact Information',
    
    // Portfolio
    'portfolio.title': 'My Portfolio',
    'portfolio.all': 'All',
    'portfolio.logos': 'Logos',
    'portfolio.branding': 'Branding',
    'portfolio.print': 'Print Design',
    'portfolio.ui': 'UI/UX',
    
    // Common
    'common.loading': 'Loading...',
    'common.viewMore': 'View More',
    'common.close': 'Close',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.portfolio': 'الأعمال',
    'nav.about': 'نبذة عني',
    'nav.services': 'الخدمات',
    'nav.contact': 'التواصل',
    'nav.blog': 'المدونة',
    
    // Homepage
    'hero.title': 'مصمم جرافيك أول',
    'hero.subtitle': 'حلول هوية بصرية إبداعية لعلامتك التجارية',
    'hero.cta': 'شاهد أعمالي',
    'hero.contact': 'تواصل معي',
    
    // About
    'about.title': 'نبذة عني',
    'about.description': 'مصمم شعارات وهوية تجارية مبدع وذو خبرة تزيد عن 9 سنوات في تطوير هويات بصرية مؤثرة.',
    'about.experience': 'الخبرة',
    'about.education': 'التعليم',
    'about.skills': 'المهارات',
    'about.languages': 'اللغات',
    
    // Services
    'services.title': 'خدماتي',
    'services.logo': 'تصميم الشعارات',
    'services.branding': 'الهوية التجارية',
    'services.print': 'التصميم الطباعي',
    'services.ui': 'تصميم واجهات المستخدم',
    
    // Contact
    'contact.title': 'تواصل معي',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال الرسالة',
    'contact.info': 'معلومات التواصل',
    
    // Portfolio
    'portfolio.title': 'أعمالي',
    'portfolio.all': 'الكل',
    'portfolio.logos': 'الشعارات',
    'portfolio.branding': 'الهوية التجارية',
    'portfolio.print': 'التصميم الطباعي',
    'portfolio.ui': 'واجهات المستخدم',
    
    // Common
    'common.loading': 'جاري التحميل...',
    'common.viewMore': 'عرض المزيد',
    'common.close': 'إغلاق',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const isRTL = language === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRTL, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};