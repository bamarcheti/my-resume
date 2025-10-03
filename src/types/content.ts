export type SkillLevel = "Forte" | "Média" | "Iniciante";

export interface SkillGroup {
  category: SkillLevel;
  items: string[];
}

export interface Education {
  title: string;
  period: string;
  description: string;
}

export type Period = { startDate: string; endDate?: string };

export interface Experience {
  title: string;
  company: string;
  period: Period;
  summary?: string | string[];
  description?: string[];
}

export type TypeCertification = "Artigo" | "Curso" | "Startup";

export interface Certification {
  title: string;
  type: TypeCertification;
  period: string;
  description: string;
  hasCertificate?: boolean;
  certificateLink?: string;
}

export type ProjectCategory =
  | "Todos"
  | "ReactJS"
  | "NextJS"
  | "React Native"
  | "JavaScript"
  | "TypeScript"
  | "Node.js";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  isFeatured?: boolean;
  category: ProjectCategory;
  link?: string;
  demo?: string;
}
