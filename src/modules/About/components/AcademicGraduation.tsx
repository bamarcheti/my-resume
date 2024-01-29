import { useTranslation } from 'react-i18next';
import Card from '../../../components/Card';
import Subtitle from '../../../components/Subtitle';

const AcademicGraduation = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col justify-between items-start">
        <Subtitle subtitle={t('subtitle_graduation')} />
      </div>
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 xl:gap-16 lg:gap-14 justify-center">
        {/* {graduations.map((graduation, index) => (
          <div key={index} className="flex flex-col justify-center">
            <Card
              title={t(graduation.title)}
              period={t(graduation.period)}
              description={t(graduation.description)}
            />
          </div>
        ))} */}
        <div className="flex flex-col justify-center">
          <Card
            title={t('graduations.0.title')}
            period={t('graduations.0.period')}
            description={t('graduations.0.description')}
          />
        </div>
        <div className="flex flex-col justify-center">
          <Card
            title={t('graduations.1.title')}
            period={t('graduations.1.period')}
            description={t('graduations.1.description')}
          />
        </div>
      </div>
    </div>
  );
};

export default AcademicGraduation;
