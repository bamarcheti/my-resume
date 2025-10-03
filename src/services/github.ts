// src/services/github.ts
import type { Project, ProjectCategory } from "@/types/content";

const GH_GRAPHQL = "https://api.github.com/graphql";
const USERNAME = import.meta.env.VITE_GH_USERNAME as string;
const TOKEN = import.meta.env.VITE_GH_TOKEN as string;

if (!USERNAME) throw new Error("VITE_GH_USERNAME não definido");
if (!TOKEN)
  throw new Error("VITE_GH_TOKEN não definido (GraphQL requer token)");

type RepoNode = {
  name: string;
  description: string | null;
  url: string;
  homepageUrl: string | null;
  isFork: boolean;
  isArchived: boolean;
  stargazerCount: number;
  updatedAt: string;
  primaryLanguage: { name: string } | null;
  repositoryTopics: { nodes: { topic: { name: string } }[] };
};

type PageInfo = { hasNextPage: boolean; endCursor: string | null };

async function graphQL<T>(
  query: string,
  variables: Record<string, any>
): Promise<T> {
  const res = await fetch(GH_GRAPHQL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    body: JSON.stringify({ query, variables }),
  });
  const json = await res.json();
  if (!res.ok || json.errors) {
    const msg =
      json.errors?.map((e: any) => e.message).join("; ") ?? res.statusText;
    throw new Error(`GitHub GraphQL: ${msg}`);
  }
  return json.data;
}

const FRAGMENT_REPO = `
fragment RepoFields on Repository {
  name
  description
  url
  homepageUrl
  isFork
  isArchived
  stargazerCount
  updatedAt
  primaryLanguage { name }
  repositoryTopics(first: 20) { nodes { topic { name } } }
}
`;

const QUERY_PINNED = `
${FRAGMENT_REPO}
query Pinned($login: String!, $first: Int!) {
  user(login: $login) {
    pinnedItems(first: $first, types: REPOSITORY) {
      nodes { ... on Repository { ...RepoFields } }
    }
  }
}
`;

const QUERY_REPOS = `
${FRAGMENT_REPO}
query Repos($login: String!, $first: Int!, $after: String) {
  user(login: $login) {
    repositories(
      first: $first
      after: $after
      privacy: PUBLIC
      orderBy: { field: UPDATED_AT, direction: DESC }
      isFork: false
      affiliations: OWNER
    ) {
      nodes { ...RepoFields }
      pageInfo { hasNextPage endCursor }
    }
  }
}
`;

function inferCategory(repo: RepoNode): ProjectCategory {
  const topics = (repo.repositoryTopics?.nodes ?? []).map((n) =>
    n.topic.name.toLowerCase()
  );

  const has = (...keys: string[]) =>
    topics.some((t) => keys.includes(t) || keys.includes(t.replace(/_/g, "-")));

  const lang = (repo.primaryLanguage?.name || "").toLowerCase();

  if (has("nextjs", "next-js", "next")) return "NextJS";
  if (has("react-native", "reactnative")) return "React Native";
  if (has("react", "reactjs", "react-js")) return "ReactJS";
  if (has("node", "nodejs", "express", "nestjs")) return "Node.js";
  if (lang === "typescript") return "TypeScript";
  if (lang === "javascript") return "JavaScript";

  // Fallback
  return "Todos";
}

function mapRepo(repo: RepoNode, isFeatured = false): Project {
  const topics = (repo.repositoryTopics?.nodes ?? []).map((n) => n.topic.name);
  const tags = [
    ...(repo.primaryLanguage?.name ? [repo.primaryLanguage.name] : []),
    ...topics.map((t) => t.replace(/-/g, " ")),
  ];
  return {
    title: repo.name,
    description: repo.description ?? "",
    tags,
    category: inferCategory(repo),
    link: repo.url,
    demo: repo.homepageUrl || undefined,
    isFeatured,
  };
}

/** Destaques oficiais (pinned) do seu perfil */
export async function fetchFeaturedProjects(max = 6): Promise<Project[]> {
  const data = await graphQL<{ user: { pinnedItems: { nodes: RepoNode[] } } }>(
    QUERY_PINNED,
    {
      login: USERNAME,
      first: max,
    }
  );
  const nodes = data.user?.pinnedItems?.nodes ?? [];
  return nodes.filter((r) => r && !r.isArchived).map((r) => mapRepo(r, true));
}

/** Todos os seus repositórios (sem fork/sem arquivado), com paginação */
export async function fetchAllProjects(options?: {
  pageSize?: number;
  maxRepos?: number;
  includeArchived?: boolean;
}): Promise<Project[]> {
  const pageSize = options?.pageSize ?? 50;
  const maxRepos = options?.maxRepos ?? 200;

  let after: string | null = null;
  let hasNext = true;
  const acc: RepoNode[] = [];

  while (hasNext && acc.length < maxRepos) {
    const data = await graphQL<{
      user: { repositories: { nodes: RepoNode[]; pageInfo: PageInfo } };
    }>(QUERY_REPOS, { login: USERNAME, first: pageSize, after });

    const page = data.user.repositories;
    acc.push(
      ...page.nodes.filter((r) =>
        options?.includeArchived ? true : !r.isArchived
      )
    );
    hasNext = page.pageInfo.hasNextPage;
    after = page.pageInfo.endCursor;
  }

  return acc.map((r) => mapRepo(r));
}

/** Junta destaques (pinned) e todos (sem duplicar) */
export async function getProjectsSplit() {
  const [featured, all] = await Promise.all([
    fetchFeaturedProjects(),
    fetchAllProjects(),
  ]);
  const used = new Set(featured.map((p) => p.link ?? p.title));
  const rest = all.filter((p) => !used.has(p.link ?? p.title));
  return { featured, all, rest };
}
