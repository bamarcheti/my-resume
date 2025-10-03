import type { VercelRequest, VercelResponse } from '@vercel/node';

const GH_GRAPHQL = process.env.GH_GRAPHQL || 'https://api.github.com/graphql';
const TOKEN = process.env.GH_TOKEN!;
const LOGIN = process.env.GH_USERNAME || 'bamarcheti';

const FRAGMENT = `
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

const Q_PINNED = `
${FRAGMENT}
query Pinned($login: String!, $first: Int!) {
  user(login: $login) {
    pinnedItems(first: $first, types: REPOSITORY) {
      nodes { ... on Repository { ...RepoFields } }
    }
  }
}
`;

const Q_REPOS = `
${FRAGMENT}
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

function inferCategory(r: RepoNode) {
  const topics = (r.repositoryTopics?.nodes ?? []).map((n) => n.topic.name.toLowerCase());
  const has = (...k: string[]) =>
    topics.some((t) => k.includes(t) || k.includes(t.replace(/_/g, '-')));
  const lang = (r.primaryLanguage?.name || '').toLowerCase();

  if (has('nextjs', 'next-js', 'next')) return 'NextJS';
  if (has('react-native', 'reactnative')) return 'React Native';
  if (has('react', 'reactjs', 'react-js')) return 'ReactJS';
  if (has('node', 'nodejs', 'express', 'nestjs')) return 'Node.js';
  if (lang === 'typescript') return 'TypeScript';
  if (lang === 'javascript') return 'JavaScript';
  return 'Todos';
}

function mapRepo(r: RepoNode, isFeatured = false) {
  const topics = (r.repositoryTopics?.nodes ?? []).map((n) => n.topic.name);
  const tags = [
    ...(r.primaryLanguage?.name ? [r.primaryLanguage.name] : []),
    ...topics.map((t) => t.replace(/-/g, ' '))
  ];
  return {
    title: r.name,
    description: r.description ?? '',
    tags,
    category: inferCategory(r),
    link: r.url,
    demo: r.homepageUrl || undefined,
    isFeatured
  };
}

async function gql<T>(query: string, variables: Record<string, any>): Promise<T> {
  if (!TOKEN) throw new Error('GH_TOKEN ausente no servidor');
  const res = await fetch(GH_GRAPHQL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'vercel-fn'
    },
    body: JSON.stringify({ query, variables })
  });
  const json = await res.json();
  if (!res.ok || json.errors) {
    const msg = json.errors?.map((e: any) => e.message).join('; ') ?? res.statusText;
    throw new Error(`GitHub GraphQL: ${msg}`);
  }
  return json.data;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const login = (req.query.login as string) || LOGIN;

    // pinned
    const pinnedData = await gql<{ user: { pinnedItems: { nodes: RepoNode[] } } }>(Q_PINNED, {
      login,
      first: 6
    });
    const pinned = (pinnedData.user?.pinnedItems?.nodes ?? [])
      .filter((r) => r && !r.isArchived)
      .map((r) => mapRepo(r, true));

    // all (paginado)
    let after: string | null = null;
    let hasNext = true;
    const acc: RepoNode[] = [];
    while (hasNext && acc.length < 200) {
      const data = await gql<{
        user: {
          repositories: {
            nodes: RepoNode[];
            pageInfo: { hasNextPage: boolean; endCursor: string | null };
          };
        };
      }>(Q_REPOS, { login, first: 50, after });
      const page = data.user.repositories;
      acc.push(...page.nodes.filter((r) => !r.isArchived));
      hasNext = page.pageInfo.hasNextPage;
      after = page.pageInfo.endCursor;
    }
    const all = acc.map((r) => mapRepo(r));

    // evita duplicados entre pinned e all
    const used = new Set(pinned.map((p) => p.link ?? p.title));
    const rest = all.filter((p) => !used.has(p.link ?? p.title));

    res.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate'); // 15 min
    res.status(200).json({ featured: pinned, all, rest });
  } catch (e: any) {
    res.status(500).json({ error: String(e.message || e) });
  }
}
