import { useTranslation } from 'react-i18next';
import { Subtitle } from '../../../../components/Subtitle';
import { ExperienceSection } from './components/ExperienceSection';

export const Experience = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-between items-start">
        <Subtitle subtitle={t('subtitle_experience')} />
      </div>
      <ExperienceSection
        company={t('experience.company')}
        period={t('experience.period')}
        description={t('experience.description', { returnObjects: true })}
      />
    </div>
  );
};
