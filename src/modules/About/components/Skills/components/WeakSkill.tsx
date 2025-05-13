import { useTranslation } from 'react-i18next';
import { CardSkill } from './CardSkill';

export const WeakSkill = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-3 items-start lg:items-center w-full">
      <p className="font-bold text-lg text-stone-900 dark:text-white">{t('beginner_title')}</p>
      <div className="flex flex-col w-full">
        <CardSkill skills={t('weakSkills', { returnObjects: true })} />
      </div>
    </div>
  );
};
