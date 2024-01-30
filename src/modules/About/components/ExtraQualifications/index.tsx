import { useTranslation } from 'react-i18next';
import Subtitle from '../../../../components/Subtitle';
import ExtraQualificationsCard from './components/ExtraQualificationsCard';

const ExtraQualifications = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-between items-start">
        <Subtitle subtitle={t('subtitle_qualifications')} />
      </div>
      <ExtraQualificationsCard
        extraQualifications={t('extraQualifications', { returnObjects: true })}
      />
    </div>
  );
};

export default ExtraQualifications;
