import ProjectCard from '@/components/ProjectCard';
import SectionHeader from '@/components/SectionHeader';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DEFAULT_CATEGORIES, PROJECTS_PAGE_SIZE } from '@/config/projects';
import { useProjects } from '@/hooks/useProjects';
import type { ProjectCategory } from '@/types/content';
import { ExternalLink, Filter, Github } from 'lucide-react';
import { useMemo, useState } from 'react';

export default function Projects() {
  const [selected, setSelected] = useState<ProjectCategory>('Todos');
  const [visible, setVisible] = useState(PROJECTS_PAGE_SIZE);
  const { loading, error, featured, all, categories } = useProjects();
  const githubUser = import.meta.env.VITE_GH_USERNAME || 'bamarcheti';

  const CATEGORIES: ProjectCategory[] = useMemo(() => {
    const seen = new Set<ProjectCategory>(['Todos']);
    for (const p of all) seen.add(p.category);
    // mantém ordem do DEFAULT_CATEGORIES e adiciona extras no final (se surgirem)
    const extras = Array.from(seen).filter((c) => !DEFAULT_CATEGORIES.includes(c));
    return [...DEFAULT_CATEGORIES.filter((c) => seen.has(c)), ...extras];
  }, [all]);

  const counts = useMemo(() => {
    const m = new Map<ProjectCategory, number>();
    m.set('Todos', all.length);
    for (const p of all) m.set(p.category, (m.get(p.category) ?? 0) + 1);
    return m;
  }, [all]);

  const filtered = useMemo(
    () => (selected === 'Todos' ? all : all.filter((p) => p.category === selected)),
    [selected, all]
  );

  const paginated = filtered.slice(0, visible);
  const canLoadMore = visible < filtered.length;

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-6 py-12">
        <SectionHeader
          title="Meus Projetos"
          subtitle="Uma seleção dos meus trabalhos mais recentes e projetos em destaque"
        />

        {/* Destaques (pinned) */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="inline-flex items-center">
              <Filter className="w-8 h-8 mr-2 text-primary" />
              Projetos em Destaque
            </span>
          </h2>

          {loading ? (
            <p className="text-center text-muted-foreground">Carregando…</p>
          ) : error ? (
            <p className="text-center text-destructive">Erro: {error}</p>
          ) : featured.length === 0 ? (
            <p className="text-center text-muted-foreground">
              Nenhum projeto em destaque no momento.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((project, index) => (
                <Card
                  key={project.title}
                  className="group hover:shadow-purple transition-all duration-300 animate-scale-in border-2 border-primary/10"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-2">
                      {project.link && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-1" />
                            Código
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button size="sm" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>

        {/* Todos os Projetos */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Todos os Projetos</h2>

          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {CATEGORIES.map((c) => {
              const disabled = (counts.get(c) ?? 0) === 0 && c !== 'Todos';
              return (
                <button
                  key={c}
                  onClick={() => !disabled && setSelected(c)}
                  disabled={disabled}
                  className={
                    'px-3 py-1 rounded-md text-sm transition ' +
                    (selected === c
                      ? 'bg-primary text-primary-foreground'
                      : 'border hover:bg-primary/10') +
                    (disabled ? ' opacity-50 cursor-not-allowed' : '')
                  }
                >
                  {c}
                </button>
              );
            })}
          </div>

          {loading ? (
            <p className="text-center text-muted-foreground">Carregando…</p>
          ) : error ? (
            <p className="text-center text-destructive">Erro: {error}</p>
          ) : (
            <>
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {paginated.map((p) => (
                    <ProjectCard key={p.title} project={p} />
                  ))}
                </div>

                {/* 🔹 Card-resumo cinza com o contador */}
                <div className="h-full border-dashed opacity-70">
                  <div>
                    <h3 className="text-lg font-semibold leading-none tracking-tight text-muted-foreground">
                      Mostrando {paginated.length} de {filtered.length}
                    </h3>
                  </div>
                  <p className="p-6 pl-0 pt-0 text-sm text-muted-foreground">
                    {canLoadMore
                      ? 'Use o botão abaixo para carregar mais projetos.'
                      : 'Você já está vendo todos os projetos.'}
                  </p>
                </div>

                {canLoadMore && (
                  <div className="text-center mt-8">
                    <Button onClick={() => setVisible((v) => v + 9)}>Carregar mais</Button>
                  </div>
                )}
              </div>
            </>
          )}
        </section>

        {/* CTA GitHub */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-10 pointer-events-none z-0 mt-16 p-8 rounded-2xl"></div>
          <div className="container text-center mx-auto mt-16 p-8 relative z-10">
            <Github className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Conecte com meu GitHub</h3>
            <p className="text-muted-foreground mb-4">
              Veja todos os meus repositórios e contribuições no GitHub
            </p>
            <Button asChild>
              <a
                href={`https://github.com/${githubUser}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" />
                Ver GitHub Profile
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
