import React from 'react';

type Props = {
  company: string;
  period: string;
  description: string[];
};

export const ExperienceSection: React.FC<Props> = ({ company, period, description }) => {
  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      <div className="flex flex-col gap-2 pt-0 lg:pt-2">
        <p className="font-semibold text-2xl text-purple-400">{company}</p>
        <p className="align-center text-xs 2xl:text-base lg:text-sm font-normal text-purple-600">
          {period}
        </p>
        <ul className="flex flex-col gap-1 list-disc list-inside text-sm lg:text-base 2xl:text-lg font-normal text-stone-900 dark:text-white">
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
