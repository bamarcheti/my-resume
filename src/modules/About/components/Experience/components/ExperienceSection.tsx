import React from 'react';
import { experience } from '../../../../../_shared/constant/experience';

type Props = {
  company: string;
  period: string;
};

const ExperienceSection: React.FC<Props> = ({ company, period }) => {
  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      <div className="flex flex-col gap-2 pt-0 lg:pt-2">
        <p className="font-semibold text-2xl text-secondary">{company}</p>
        <p className="align-center text-xs lg:text-sm font-normal text-whitePrimary">{period}</p>
        <ul className="flex flex-col gap-1 list-disc list-inside text-sm lg:text-base font-normal text-default dark:text-white">
          {experience.map((exp, index) => (
            <li key={index}>{exp.description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceSection;
