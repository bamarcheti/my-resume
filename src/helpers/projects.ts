import { DEFAULT_CATEGORIES } from "@/config/projects";
import type { Project, ProjectCategory } from "@/types/content";

export const isCompleted = (p: Project) => Boolean(p.demo || p.link);

/** Une categorias derivadas dos projetos com as padrão (sempre inclui "Todos") */
export function mergeCategories(all: Project[]): ProjectCategory[] {
  const set = new Set<ProjectCategory>(DEFAULT_CATEGORIES);
  for (const p of all) set.add(p.category);
  return Array.from(set);
}
