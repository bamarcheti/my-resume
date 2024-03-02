import { useTranslation } from 'react-i18next';
import { Title } from '../../components/Title';
import { AllProjects } from './components/AllProjects';
import { HighlightedProjects } from './components/HighlightedProjects';

export const Projects = () => {
  const { t } = useTranslation();

  const slides = [
    'https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg',
    'https://wallpapercave.com/wp/wp3386769.jpg',
    'https://wallpaperaccess.com/full/809523.jpg',
    'https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg'
  ];

  return (
    <div className="flex flex-col gap-10">
      <Title title={t('title_project')} />
      <div className="flex flex-col gap-28">
        <HighlightedProjects />
        {/* <Carousel /> */}
        <AllProjects />
      </div>
    </div>
  );
};
