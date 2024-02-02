import { useTranslation } from 'react-i18next';
import Subtitle from '../../../components/Subtitle';

const Description = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-between items-start">
        <Subtitle subtitle={t('subtitle_description')} />
      </div>
      <div className="flex flex-col gap-10 pt-0 lg:pt-2">
        <p className="font-normal text-default dark:text-white text-base lg:text-lg text-justify">
          {t('description')}
        </p>
      </div>
    </div>
  );
};

export default Description;
