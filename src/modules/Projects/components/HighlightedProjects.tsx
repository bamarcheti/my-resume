import ProjectCard from '../../../components/ProjectCard';
import Subtitle from '../../../components/Subtitle';
import { highlights } from '../../../constant/highlights';

const HighlightedProjects = () => {
  return (
    <div>
      <Subtitle subtitle="Destaques" />
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

export default HighlightedProjects;
