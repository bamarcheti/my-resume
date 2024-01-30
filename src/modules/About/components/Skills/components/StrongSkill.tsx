import { useTranslation } from 'react-i18next';
import CardSkill from './CardSkill';

const StrongSkill = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-3 items-start sm:items-center">
      <p className="font-bold text-lg text-default dark:text-white">{t('strong_title')}</p>
      <div className="flex flex-col">
        <CardSkill skills={t('strongSkills', { returnObjects: true })} />
      </div>
    </div>
  );
};

export default StrongSkill;
