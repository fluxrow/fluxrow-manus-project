import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import pt from './locales/pt.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      pt: { translation: pt },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },
  });

// IP-based language detection (runs once)
const detectLanguageByIP = async () => {
  const stored = localStorage.getItem('i18n-ip-detected');
  if (stored) return; // Already detected

  try {
    const res = await fetch('https://ip-api.com/json/?fields=countryCode');
    const data = await res.json();
    const lang = data.countryCode === 'BR' ? 'pt' : 'en';
    
    // Only set if user hasn't manually chosen
    if (!localStorage.getItem('i18nextLng')) {
      i18n.changeLanguage(lang);
    }
    localStorage.setItem('i18n-ip-detected', 'true');
  } catch {
    // Fallback to browser detection (already handled by i18next)
  }
};

detectLanguageByIP();

export default i18n;
