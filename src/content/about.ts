import type {
  Certification,
  Education,
  Experience,
  SkillGroup,
} from "@/types/content";

export const skillGroups: SkillGroup[] = [
  {
    category: "Forte",
    items: ["Git", "GitHub", "ReactJS", "TypeScript", "JavaScript", "Tailwind"],
  },
  {
    category: "Média",
    items: ["Hooks", "NextJS", "ESLint", "Prettier", "Styled Components"],
  },
  {
    category: "Iniciante",
    items: ["React Native", "Node.js", "VueJS", "Material UI"],
  },
];

// Lista das habilidades "Forte"
export const strongSkills: string[] =
  skillGroups.find((g) => g.category === "Forte")?.items ?? [];

// Contagem das habilidades "Forte"
export const strongSkillsCount = strongSkills.length;

export const education: Education[] = [
  {
    title: "Faculdade Insted / Graduação",
    period: "FEVEREIRO DE 2021 - JULHO DE 2023",
    description: "Tecnologia em Análise e Desenvolvimento de Sistemas (TADS)",
  },
];

export const experiences: Experience[] = [
  {
    title: "Desenvolvedora Frontend",
    company: "Inovvati Tecnologia",
    period: { startDate: "2022-02-01", endDate: "2025-08-30" },
    description: [
      "Atuei nos projetos de modernização do portal Detran-MS;",
      "Atuei nos projetos  internos da empresa como: Sistema de Gestão de Pessoas e Site da empresa;",
      "Eu utilizei as ferramentas: React.js, TypeScript, Tailwind, Prettier e ESLint;",
      "Estes projetos contém responsividade para desktop, tablet e mobile; integração com APIs; utilização do react-router-dom; além de ter arquitetura e código limpo;",
      "Fazia uso diariamente de metodologias ágeis com Scrum e Xp;",
    ],
  },
  {
    title: "Estágio",
    company: "Inovvati Tecnologia",
    period: { startDate: "2021-09-01", endDate: "2022-01-30" },
    summary: [
      "Durante meu estágio, aprofundei meus conhecimentos em análise de sistemas.",
      "Participei da análise de projetos reais da empresa, entendendo necessidades dos clientes e convertendo requisitos em soluções técnicas viáveis.",
      "Em seguida, colaborei com outros estagiários em um projeto real: contato direto com o cliente, reuniões de levantamento, protótipos, fluxo de navegação com foco em acessibilidade/UX e boas práticas de documentação e análise.",
      "Estudei conceitos-chave como:",
    ],
    description: [
      "Regras de negócio",
      "Levantamento de requisitos",
      "Diagramas UML",
      "Bancos de dados",
      "Casos de uso",
    ],
  },
];

export const certifications: Certification[] = [
  {
    title: "Alura",
    type: "Curso",
    period: "2025",
    description:
      "Formação Aprenda a programar em JavaScript com foco em back-end",
    hasCertificate: true,
    certificateLink:
      "../../public/certificates/Certificado-Aprenda-a-programar-em-JavaScript-com-foco-no-back-end-pt.pdf",
  },
  {
    title: "Alura",
    type: "Curso",
    period: "2025",
    description: "Formação A partir do zero: iniciante em programação",
    hasCertificate: true,
    certificateLink:
      "../../public/certificates/Certificado-a-partir-do-zero.pdf",
  },
  {
    title: "SEBRAE",
    type: "Startup",
    period: "2023",
    description: "Certificação em desenvolvimento de startups e inovação",
    hasCertificate: true,
    certificateLink:
      "../../public/certificates/Certificado_StartupDay-Impressao3D.pdf",
  },
  {
    title: "COSACO",
    type: "Artigo",
    period: "2023",
    description:
      "Analisando a Fragilidade de Códigos Cifrados por Criptoanálise: estudo de caso com o Código de César",
    hasCertificate: true,
    certificateLink:
      "../../public/certificates/certificado-artigo-Criptoanálise.pdf",
  },
  {
    title: "COSACO",
    type: "Artigo",
    period: "2023",
    description:
      "Utilização de Inteligência Artificial na transmissão de mensagens baseadas nas emoções a partir da interpretação do comportamento humano",
    hasCertificate: true,
    certificateLink:
      "../../public/certificates/certificado-artigo-Inteligencia-Artificial.pdf",
  },
  {
    title: "COSACO",
    type: "Artigo",
    period: "2023",
    description:
      "Pet For You: Aplicativo de adoção de animais para Campo Grande/MS",
    hasCertificate: true,
    certificateLink:
      "../../public/certificates/certificado-artigo-Pet-For-You.pdf",
  },
  {
    title: "EBAC",
    type: "Curso",
    period: "2022",
    description: "Crie “O” Case do seu Portfólio em 7 dias",
    hasCertificate: true,
    certificateLink:
      "../../public/certificates/Certificado_JornadaUX-CrieOCaseDoSeuPortfolioEm7Dias_EBAC.pdf",
  },
  {
    title: "EBAC",
    type: "Curso",
    period: "2022",
    description: "Seu Começo de Carreira em Programação",
    hasCertificate: true,
    certificateLink:
      "../../public/certificates/Certificado_JornadaDev-SeuComecoDeCarreiraEmProgramacao_EBAC.pdf",
  },
  {
    title: "IFMS",
    type: "Curso",
    period: "Março de 2022 - Junho de 2022",
    description: "Curso de Introdução à Inteligência Artificial",
    hasCertificate: true,
    certificateLink:
      "../../public/certificates/Certificado_Introdução_à_Inteligência_Artificial.pdf",
  },
  {
    title: "OAB",
    type: "Curso",
    period: "2022",
    description: "Curso de Produtividade e Alta Performance",
    hasCertificate: true,
    certificateLink:
      "../../public/certificates/Certificado_ PRODUTIVIDADE E ALTA PERFORMANCE.pdf",
  },
  {
    title: "CCAA / NÍVEL 9",
    type: "Curso",
    period: "2017",
    description: "Certificação em língua inglesa - nível avançado",
    hasCertificate: false,
    certificateLink: "",
  },
  {
    title: "KUMON",
    type: "Curso",
    period: "2016",
    description: "Método de ensino complementar em matemática",
    hasCertificate: false,
    certificateLink: "",
  },
];
