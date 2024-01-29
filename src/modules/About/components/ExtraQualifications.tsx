import { useTranslation } from 'react-i18next';
import { extraQualifications } from '../../../_shared/constant/extraQualifications';
import Subtitle from '../../../components/Subtitle';

const ExtraQualifications = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-between items-start">
        <Subtitle subtitle={t('subtitle_qualifications')} />
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 sm:pt-4 pt-0 gap-5 sm:gap-10 w-full xl:gap-16 lg:gap-14 justify-center">
        {extraQualifications.map((extraQualification, index) => (
          <div key={index}>
            {/* <Card
              title={extraQualification.title}
              period={extraQualification.period}
              description={extraQualification.description}
            /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtraQualifications;
