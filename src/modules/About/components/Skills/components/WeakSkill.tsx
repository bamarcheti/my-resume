import { useTranslation } from 'react-i18next';
import { skills } from '../../../../../_shared/constant/skills';
import CardSkill from './CardSkill';

const WeakSkill = () => {
  const { t } = useTranslation();
  const weakSkills = skills.filter((skill) => skill.strength === 'weak');

  return (
    <div className="flex flex-col gap-3 items-start sm:items-center">
      <p className="font-bold text-lg text-default dark:text-white">{t('weak_skills')}</p>
      <div className="flex flex-col">
        <CardSkill skills={weakSkills} />
      </div>
    </div>
  );
};

export default WeakSkill;
