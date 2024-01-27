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
        responsibility: 'Desenvolvedora Front-end Junior',
        subtitle_description: 'Descrição',
        description:
          'Tenho 21 anos. Sou graduada em Análise e Desenvolvimento de Sistemas (TADS) na Faculdade Insted. Trabalho a 2 anos com programação. Tenho bastante interesse e paixão por essa área. Eu iniciei com Vue.js e depois com React.js. No momento tenho utilizado React.js, Tailwind, TypeScript e Next.js, algumas libs são Headless UI, react-router-dom e outras. Eu já utilizei material ui e também styled-components em outro projeto. No trabalho desenvolvo projetos como Holerite, Carreiras e site. Todos em foco na usabilidade, utilidade e desejabilidade do usuário e responsividade. Estou sempre estudando e procurando melhorar. Tenho disponibilidade para trabalhar em qualquer modelo de trabalho que a empresa ofertar: presencial, híbrido ou remoto.',
        subtitle_skills: 'Habilidades',
        strong_skills: 'Forte',
        html: 'HMTL',
        average_skills: 'Média',
        weak_skills: 'Fraco',
        subtitle_graduation: 'Graduação Acadêmica',
        subtitle_experience: 'Experiência',
        experiente: {
          company: 'Inovvati Tecnologia / Desenvolvedora Junior',
          period: 'DESDE SETEMBRO DE 2021, SEDE'
        },
        subtitle_qualifications: 'Qualificações Extras',
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
