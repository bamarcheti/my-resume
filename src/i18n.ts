import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { experienceEN, experienceES, experiencePT } from './_shared/constant/experience';
import {
  extraQualificationsEN,
  extraQualificationsES,
  extraQualificationsPT
} from './_shared/constant/extraQualifications';
import { skillsEN, skillsES, skillsPT } from './_shared/constant/skills';

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
          'Sou graduada em Análise e Desenvolvimento de Sistemas (TADS) na Faculdade Insted. Trabalho a 2 anos com programação. Tenho bastante interesse e paixão por essa área. Eu iniciei com Vue.js e depois com React.js. No momento tenho utilizado React.js, Tailwind, TypeScript e Next.js, algumas libs são Headless UI, react-router-dom e outras. Eu já utilizei material ui e também styled-components em outro projeto. No trabalho desenvolvo projetos como Holerite, Carreiras e site. Todos em foco na usabilidade, utilidade e desejabilidade do usuário e responsividade. Estou sempre estudando e procurando melhorar. Tenho disponibilidade para trabalhar em qualquer modelo de trabalho que a empresa ofertar: presencial, híbrido ou remoto.',
        subtitle_skills: 'Habilidades',
        strong_title: 'Forte',
        strongSkills: skillsPT.filter((skill) => skill.strength === 'strong'),
        average_title: 'Média',
        averageSkills: skillsPT.filter((skill) => skill.strength === 'average'),
        weak_title: 'Fraco',
        weakSkills: skillsPT.filter((skill) => skill.strength === 'weak'),
        subtitle_graduation: 'Graduação Acadêmica',
        graduation: {
          title: 'Insted / Graduação',
          period: 'JULHO DE 2023',
          description: 'Tecnologia em Análise e Desenvolvimento de Sistemas (TADS)'
        },

        subtitle_experience: 'Experiência',
        experience: {
          company: 'Inovvati Tecnologia / Desenvolvedora Junior',
          period: 'DESDE SETEMBRO DE 2021, SEDE',
          description: experiencePT
        },
        subtitle_qualifications: 'Qualificações Extras',
        extraQualifications: extraQualificationsPT,
        title_project: 'Projetos',
        highlight: 'Destaques',
        all: 'Todos',
        acess: 'Clique aqui para acessar',
        footer: 'Todos os direitos reservados'
      }
    },
    en: {
      translation: {
        nav_about: 'About',
        nav_projects: 'Projects',
        info: 'Brazilian, Single, 21 Years Old',
        responsibility: 'Junior Front-end Developer',
        subtitle_description: 'Description',
        description:
          "I have a degree in System Analysis and Development at Faculdade Insted. I've been working in programming for 2 years. I started with Vue.js, and today I use tools such as: React.js. In the project I'm on we use React.js, Next.js, TypeScript, Tailwind, Prettier, and ESLint, along with Headless UI, react-router-dom, and others. I have also used Material UI and styled-components in other projects. I work on internal company projects, including the People Management System and the company's website. All projects focus on user usability and accessibility, responsiveness for desktop, tablet, and mobile, API integration, as well as clean architecture and code. I am available to work in any work model the company offers: in-person, hybrid, or remote.",
        subtitle_skills: 'Skills',
        strong_title: 'Strong',
        strongSkills: skillsEN.filter((skill) => skill.strength === 'strong'),
        average_title: 'Average',
        averageSkills: skillsEN.filter((skill) => skill.strength === 'average'),
        weak_title: 'Weak',
        weakSkills: skillsEN.filter((skill) => skill.strength === 'weak'),
        subtitle_graduation: 'Academic Education',
        graduation: {
          title: 'Insted / Graduation',
          period: 'JULY 2023',
          description: 'Technology in Systems Analysis and Development'
        },
        subtitle_experience: 'Experience',
        experience: {
          company: 'Inovvati Tecnologia / Junior Developer',
          period: 'SINCE SEPTEMBER 2021, HEAD OFFICE',
          description: experienceEN
        },
        subtitle_qualifications: 'Extra Qualifications',
        extraQualifications: extraQualificationsEN,
        title_project: 'Projects',
        highlight: 'Highlights',
        all: 'All',
        acess: 'Click here to access',
        footer: 'All rights reserved'
      }
    },
    es: {
      translation: {
        nav_about: 'Acerca de',
        nav_projects: 'Proyectos',
        info: 'Brasileña, Soltera, 21 Años',
        responsibility: 'Desarrolladora Front-end Junior',
        subtitle_description: 'Descripción',
        description:
          'Soy graduada en Análisis y Desarrollo de Sistemas (TADS) en la Faculdade Insted. Llevo 2 años trabajando en programación, con un fuerte interés y pasión por esta área. Comencé con Vue.js y luego pasé a React.js. Actualmente, utilizo React.js, Tailwind, TypeScript y Next.js, junto con bibliotecas como Headless UI, react-router-dom, entre otras. También he utilizado Material UI y Styled-components en otros proyectos. En el trabajo, desarrollo proyectos como Holerite, Carreras y el sitio web de la empresa, todos centrados en la usabilidad, utilidad, deseabilidad y capacidad de respuesta del usuario. Siempre estoy estudiando y buscando mejorar. Estoy disponible para trabajar en cualquier modelo de trabajo que la empresa ofrezca: presencial, híbrido o remoto.',
        subtitle_skills: 'Habilidades',
        strong_title: 'Fuerte',
        strongSkills: skillsES.filter((skill) => skill.strength === 'strong'),
        team_work: 'Trabajo en Equipo',
        average_title: 'Promedio',
        averageSkills: skillsES.filter((skill) => skill.strength === 'average'),
        weak_title: 'Débil',
        weakSkills: skillsES.filter((skill) => skill.strength === 'weak'),
        subtitle_graduation: 'Educación Académica',
        graduation: {
          title: 'Insted / Graduación',
          period: 'JULIO DE 2023',
          description: 'Tecnología en Análisis y Desarrollo de Sistemas'
        },
        subtitle_experience: 'Experiencia',
        experience: {
          company: 'Inovvati Tecnologia / Desarrolladora Junior',
          period: 'DESDE SEPTIEMBRE DE 2021, SEDE',
          description: experienceES
        },
        subtitle_qualifications: 'Calificaciones Extras',
        extraQualifications: extraQualificationsES,
        title_project: 'Proyectos',
        highlight: 'Reflejos',
        all: 'Todos',
        acess: 'Haga clic aquí para acceder',
        footer: 'Todos los derechos reservados'
      }
    }
  }
});

export default i18n;
