import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import tr from './locales/tr.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    tr: { translation: tr },
  },
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language if the selected language is not available
  interpolation: {
    escapeValue: false, // React already escapes by default
  },
});

export default i18n;
