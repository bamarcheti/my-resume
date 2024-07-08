import { Atom, GraduationCap, Rocket } from 'lucide-react';
import { ExtraQualificationsAction } from '../../../../../_shared/constant/extraQualifications';

type Props = {
  extraQualifications: ExtraQualificationsAction[];
};

export const ExtraQualificationsCard = ({ extraQualifications }: Props) => {
  const fontStyle = 'text-xs 2xl:text-base lg:text-sm font-normal';

  const iconMap: Record<string, JSX.Element> = {
    course: <GraduationCap className="text-white w-6 h-6" />,
    article: <Atom className="text-white w-6 h-6" />,
    startup: <Rocket className="text-white w-6 h-6" />
  };

  const styleMap = {
    course: 'bg-purple-400 dark:bg-stone-800 text-stone-700',
    article: 'bg-purple-500 dark:bg-stone-600 text-stone-700',
    startup: 'bg-purple-700 dark:bg-stone-700 text-stone-400'
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
            <p className={`${fontStyle} dark:text-purple-400`}>{extraQualification.period}</p>
          </div>
          <p className={`${fontStyle} text-white`}>{extraQualification.description}</p>
        </div>
      ))}
    </>
  );
};
