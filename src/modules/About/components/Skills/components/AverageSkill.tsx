import { useTranslation } from 'react-i18next';
import { CardSkill } from './CardSkill';

export const AverageSkill = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-3 items-start sm:items-center">
      <p className="font-bold text-lg text-stone-900 dark:text-white">{t('average_title')}</p>
      <div className="flex flex-col">
        <CardSkill skills={t('averageSkills', { returnObjects: true })} />
      </div>
    </div>
  );
};
