import React from 'react';

type Props = {
  company: string;
  period: string;
  description: string[];
};

const ExperienceSection: React.FC<Props> = ({ company, period, description }) => {
  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      <div className="flex flex-col gap-2 pt-0 lg:pt-2">
        <p className="font-semibold text-2xl text-secondary">{company}</p>
        <p className="align-center text-xs lg:text-sm font-normal text-whitePrimary">{period}</p>
        <ul className="flex flex-col gap-1 list-disc list-inside text-sm lg:text-base font-normal text-default dark:text-white">
          {Array.isArray(description) ? (
            description.map((exp, index) => <li key={index}>{exp}</li>)
          ) : (
            <li>{description}</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceSection;
