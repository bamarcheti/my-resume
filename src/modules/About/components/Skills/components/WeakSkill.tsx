import { useTranslation } from 'react-i18next';
import CardSkill from './CardSkill';

const WeakSkill = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-3 items-start sm:items-center">
      <p className="font-bold text-lg text-default dark:text-white">{t('weak_title')}</p>
      <div className="flex flex-col">
        <CardSkill skills={t('weakSkills', { returnObjects: true })} />
      </div>
    </div>
  );
};

export default WeakSkill;
