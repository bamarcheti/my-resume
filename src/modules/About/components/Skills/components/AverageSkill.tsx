import { useTranslation } from 'react-i18next';
import { skills } from '../../../../../_shared/constant/skills';
import CardSkill from './CardSkill';

const AverageSkill = () => {
  const { t } = useTranslation();
  const averageSkills = skills.filter((skill) => skill.strength === 'average');

  return (
    <div className="flex flex-col gap-3 items-start sm:items-center">
      <p className="font-bold text-lg text-default dark:text-white">{t('average_skills')}</p>
      <div className="flex flex-col">
        <CardSkill skills={averageSkills} />
      </div>
    </div>
  );
};

export default AverageSkill;
