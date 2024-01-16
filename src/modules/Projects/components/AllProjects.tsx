import { useEffect, useState } from 'react';
import ProjectCard from '../../../components/ProjectCard';
import Subtitle from '../../../components/Subtitle';

export interface Repo {
  id: number;
  name: string;
  html_url: string;
  topics: string[];
  homepage: string | any;
  previewImageUrl: string | null;
  created_at: string;
}

const AllProjects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  const fetchRepos = async () => {
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

      setRepos(sortedRepos);
    } catch (error) {
      console.error('Erro ao buscar repositórios do GitHub', error);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <div>
      <Subtitle subtitle="Todos" />
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {repos.map((repo) => (
          <li key={repo.id}>
            <ProjectCard
              name={repo.name}
              html_url={repo.html_url}
              topics={repo.topics}
              homepage={repo.homepage}
              previewImageUrl={repo.previewImageUrl}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllProjects;
