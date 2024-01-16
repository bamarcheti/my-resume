import Title from '../../components/Title';
import AllProjects from './components/AllProjects';
import HighlightedProjects from './components/HighlightedProjects';

const Projects = () => {
  return (
    <div className="flex flex-col gap-10">
      <Title title="Projetos" />
      <div className="flex flex-col gap-28">
        <HighlightedProjects />
        <AllProjects />
      </div>
    </div>
  );
};

export default Projects;
