import { experienceEN } from '../../_shared/constant/experience';
import { extraQualificationsEN } from '../../_shared/constant/extraQualifications';
import { skillsEN } from '../../_shared/constant/skills';

export const enUS = {
  translation: {
    nav_about: 'About',
    nav_projects: 'Projects',
    info: 'Brazilian, 22 years old',
    responsibility: 'Junior Front-end Developer',
    subtitle_description: 'Description',
    description:
      "I have a degree in System Analysis and Development at Faculdade Insted. I've been working in programming for 3 years. I started with Vue.js, and today I use tools such as: React.js. In the project I'm on we use React.js, Next.js, TypeScript, Tailwind, Prettier, and ESLint, along with Headless UI, react-router-dom, and others. I have also used Material UI and styled-components in other projects. I work on internal company projects, including the People Management System and the company's website. All projects focus on user usability and accessibility, responsiveness for desktop, tablet, and mobile, API integration, as well as clean architecture and code. I am available to work in any work model the company offers: in-person, hybrid, or remote.",
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
    acess: 'Access the project',
    github: 'Access the repository',
    footer: 'All rights reserved'
  }
};
