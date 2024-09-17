import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Subtitle } from '../../../../components/Subtitle';
import { ProjectsFilter } from './componentes/ProjectsFilter';

export interface Repo {
  id: number;
  name: string;
  html_url: string;
  topics: string[];
  homepage: string | any;
  previewImageUrl: string | null;
  created_at: string;
}

export const fetchRepos = async () => {
  try {
    const response = await fetch('https://api.github.com/users/bamarcheti/repos');
    const data = await response.json();

    const reposWithDate: Repo[] = data.map((repo: any) => ({
      ...repo,
      created_at: repo.created_at
    }));

    const sortedRepos = reposWithDate.sort(
      (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );

    // setRepos(sortedRepos);
  } catch (error) {
    console.error('Erro ao buscar repositórios do GitHub', error);
  }
};

export const AllProjects: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <div>
      <Subtitle subtitle={t('all')} />
      <ProjectsFilter repos={repos} />
      {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {repos.map((repo) => (
          <div key={repo.id}>
            <ProjectCard
              name={repo.name}
              html_url={repo.html_url}
              topics={repo.topics}
              homepage={repo.homepage}
              previewImageUrl={repo.previewImageUrl}
            />
          </div>
        ))}
      </div> */}
    </div>
  );
};
