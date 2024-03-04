import { useTranslation } from 'react-i18next';
import { Subtitle } from '../../../../components/Subtitle';
import { ExtraQualificationstFilter } from './components/ExtraQualificationstFilter';

export const ExtraQualifications = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col space-y-5">
      <div className="flex flex-col justify-between items-start">
        <Subtitle subtitle={t('subtitle_qualifications')} />
      </div>
      <ExtraQualificationstFilter />
    </div>
  );
};
