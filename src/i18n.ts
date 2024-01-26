import i18n from 'i18next';
// import { DateTime } from 'luxon';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'pt', // idioma padrão
  fallbackLng: 'pt', // idioma de fallback
  supportedLngs: ['pt', 'en', 'es'],
  interpolation: {
    escapeValue: false
  },
  resources: {
    pt: {
      translation: {
        nav_about: 'Sobre',
        nav_projects: 'Projetos',
        info: 'Brasileira, Solteira, 21 Anos',
        footer: 'Todos os direitos reservados'
      }
    },
    en: {
      translation: {
        nav_about: 'About',
        nav_projects: 'Projects',
        info: 'Brazilian, Single, 21 Years',
        footer: 'All rights reserved'
      }
    },
    es: {
      translation: {
        nav_about: 'Acerca',
        nav_projects: 'Proyetos',
        info: 'Brasileña, Soltera, 21 Años',
        footer: 'Todos los derechos reservados'
      }
    }
  }
});

export default i18n;
