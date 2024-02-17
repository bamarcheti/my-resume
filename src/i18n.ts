import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { enUS } from './locales/en/translation';
import { esEs } from './locales/es/translation';
import { ptBR } from './locales/pt/translation';

i18n.use(initReactI18next).init({
  lng: 'pt', // idioma padrão
  fallbackLng: 'pt', // idioma de fallback
  supportedLngs: ['pt', 'en', 'es'],
  interpolation: {
    escapeValue: false
  },
  resources: {
    pt: ptBR,
    en: enUS,
    es: esEs
  }
});

export default i18n;
