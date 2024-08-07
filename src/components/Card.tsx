import { GraduationCap } from 'lucide-react';
import React from 'react';

type Props = {
  title: string;
  period: string;
  description: string;
};

export const Card: React.FC<Props> = ({ title, period, description }) => {
  const fontStyle = 'text-xs 2xl:text-base lg:text-sm font-normal';

  return (
    <div className="flex flex-col justify-center text-center rounded-md bg-butterflyBush-600 dark:bg-stone-800 xl:pb-8 xl:pt-6 xl:px-12 p-4 px-7 gap-4 transition ease-in-out hover:scale-105">
      <GraduationCap className="text-white w-6 h-6" />
      <div className="flex flex-col gap-1.5">
        <p className="text-base xl:text-lg lg:text-lg font-bold text-white">{title}</p>
        <p className={`${fontStyle} text-stone-900 dark:text-purple-400`}>{period}</p>
      </div>
      <p className={`${fontStyle} text-white`}>{description}</p>
    </div>
  );
};
