import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    pt: {
      translation: {
        info: 'Brasileira, Solteira, 21 Anos',
        ptButton: 'PT',
        enButton: 'EN',
        esButton: 'ES'
      },
      en: {
        translation: {
          info: 'Brazilian, Single, 21 Years',
          ptButton: 'PT',
          enButton: 'EN',
          esButton: 'ES'
        }
      },
      es: {
        translation: {
          info: 'Bienvenue',
          ptButton: 'PT',
          enButton: 'EN',
          esButton: 'ES'
        }
      }
    }
  },
  lng: 'pt', // idioma padrão
  fallbackLng: 'pt', // idioma de fallback
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
