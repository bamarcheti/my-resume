import { useTranslation } from 'react-i18next';
import { Subtitle } from '../../../../components/Subtitle';
import { AverageSkill } from './components/AverageSkill';
import { StrongSkill } from './components/StrongSkill';
import { WeakSkill } from './components/WeakSkill';

export const Skills = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-between items-start">
        <Subtitle subtitle={t('subtitle_skills')} />
      </div>
      <div className="flex md:flex-row flex-col gap-6 md:gap-8 justify-center">
        <StrongSkill />
        <AverageSkill />
        <WeakSkill />
      </div>
    </div>
  );
};
