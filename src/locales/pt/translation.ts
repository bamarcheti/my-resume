import { experiencePT } from '../../_shared/constant/experience';
import { extraQualificationsPT } from '../../_shared/constant/extraQualifications';
import { skillsPT } from '../../_shared/constant/skills';

export const ptBR = {
  translation: {
    nav_about: 'Sobre',
    nav_projects: 'Projetos',
    info: 'Brasileira, Solteira, 22 anos',
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
    github: 'Acesse o repositório',
    footer: 'Todos os direitos reservados'
  }
};
