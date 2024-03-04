import { Atom, GraduationCap, Rocket } from 'lucide-react';
import { ExtraQualificationsAction } from '../../../../../_shared/constant/extraQualifications';

type Props = {
  extraQualifications: ExtraQualificationsAction[];
};

export const ExtraQualificationsCard = ({ extraQualifications }: Props) => {
  const fontStyle = 'text-xs xl:text-sm lg:text-sm font-normal';

  const iconMap: Record<string, JSX.Element> = {
    course: <GraduationCap className="text-white w-6 h-6" />,
    article: <Atom className="text-white w-6 h-6" />,
    startup: <Rocket className="text-white w-6 h-6" />
  };

  const styleMap = {
    course: 'bg-secondary dark:bg-dark text-darkSecondary',
    article: 'bg-whiteSecondary dark:bg-darkTertiary text-darkSecondary',
    startup: 'bg-tertiary dark:bg-darkSecondary text-darkPrimary'
  };

  return (
    <>
      {extraQualifications.map((extraQualification, index) => (
        <div
          key={index}
          className={`${
            styleMap[extraQualification.type]
          } flex flex-col rounded-3xl p-8 gap-4 transition ease-in-out hover:scale-105`}
        >
          <div className="flex flex-col gap-1.5 justify-center text-center">
            {iconMap[extraQualification.type]}
            <p className="text-base xl:text-lg lg:text-lg font-bold text-white">
              {extraQualification.title}
            </p>
            <p className={`${fontStyle} dark:text-secondary`}>{extraQualification.period}</p>
          </div>
          <p className={`${fontStyle} text-white`}>{extraQualification.description}</p>
        </div>
      ))}
    </>
  );
};
