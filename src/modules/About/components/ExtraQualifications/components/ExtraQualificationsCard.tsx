import { ExtraQualificationsAction } from '../../../../../_shared/constant/extraQualifications';

type Props = {
  extraQualifications: ExtraQualificationsAction[];
};

const ExtraQualificationsCard = ({ extraQualifications }: Props) => {
  const fontStyle = 'text-xs xl:text-sm lg:text-sm font-normal';

  return (
    // <div className="flex flex-col justify-center text-center rounded-3xl bg-secondary dark:bg-dark xl:pb-8 xl:pt-6 xl:px-12 p-4 px-7 gap-4 transition ease-in-out hover:scale-105">
    <div className="grid md:grid-cols-3 grid-cols-1 sm:pt-4 pt-0 gap-5 sm:gap-10 w-full xl:gap-16 lg:gap-14">
      {extraQualifications.map((extraQualification, index) => (
        <div
          key={index}
          className="flex flex-col justify-center text-center rounded-3xl bg-secondary dark:bg-dark xl:pb-8 xl:pt-6 xl:px-12 p-4 px-7 gap-4 transition ease-in-out hover:scale-105"
        >
          <div className="flex flex-col gap-1.5">
            <p className="text-base xl:text-lg lg:text-lg font-bold text-white">
              {extraQualification.title}
            </p>
            <p className={`${fontStyle} text-default dark:text-secondary`}>
              {extraQualification.period}
            </p>
          </div>
          <p className={`${fontStyle} text-white`}>{extraQualification.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ExtraQualificationsCard;
