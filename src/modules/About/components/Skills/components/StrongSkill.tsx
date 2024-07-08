import { useTranslation } from 'react-i18next';
import { CardSkill } from './CardSkill';

export const StrongSkill = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-3 items-start sm:items-center w-full">
      <p className="font-bold text-lg text-stone-900 dark:text-white">{t('strong_title')}</p>
      <div className="flex flex-col w-full">
        <CardSkill skills={t('strongSkills', { returnObjects: true })} />
      </div>
    </div>
  );
};
