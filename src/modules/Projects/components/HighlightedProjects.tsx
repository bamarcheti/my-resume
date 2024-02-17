import { useTranslation } from 'react-i18next';
import { highlights } from '../../../_shared/constant/highlights';
import { ProjectCard } from '../../../components/ProjectCard';
import { Subtitle } from '../../../components/Subtitle';

export const HighlightedProjects = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Subtitle subtitle={t('highlight')} />
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {highlights.map((repo, index) => (
          <li key={index}>
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
