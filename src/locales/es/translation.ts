import { experienceES } from '../../_shared/constant/experience';
import { extraQualificationsES } from '../../_shared/constant/extraQualifications';
import { skillsES } from '../../_shared/constant/skills';

export const esEs = {
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
};
