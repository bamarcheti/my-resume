import React from 'react';

type Props = {
  company: string;
  period: string;
  description: string;
};

const ExperienceSection: React.FC<Props> = ({ company, period, description }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 pt-4 lg:pt-2">
        <p className="font-semibold text-2xl text-secondary">{company}</p>
        <p className="align-center text-xs xl:text-sm lg:text-sm font-normal text-primary">
          {period}
        </p>
      </div>
      <div className="flex flex-col">
        <ul className="align-center text-sm xl:text-base lg:text-base font-normal text-white">
          {description}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceSection;
