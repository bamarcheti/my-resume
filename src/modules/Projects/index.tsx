import { useTranslation } from 'react-i18next';
import { Title } from '../../components/Title';
import { AllProjects } from './components/AllProjects';
import { HighlightedProjects } from './components/HighlightedProjects';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-10">
      <Title title={t('title_project')} />
      <div className="flex flex-col gap-28">
        <HighlightedProjects />
        <AllProjects />
      </div>
    </div>
  );
};

export default Projects;
