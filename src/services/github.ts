import type { Project } from '@/types/content';

const USERNAME = import.meta.env.VITE_GH_USERNAME || 'bamarcheti'; // só para CTA/link

export async function getProjectsSplit(): Promise<{
  featured: Project[];
  all: Project[];
  rest: Project[];
}> {
  const res = await fetch(`/api/github`); // ou `/api/github?login=${USERNAME}`
  if (!res.ok) throw new Error(`API /api/github falhou: ${res.status}`);
  return res.json();
}

// (se ainda exporta fetchFeaturedProjects/fetchAllProjects, faça-os chamar /api/github e filtrar)
