import React from 'react';

type Props = {
  title: string;
  period?: string;
  description?: string;
};

const Card: React.FC<Props> = ({ title, period, description }) => {
  const fontStyle = 'text-xs xl:text-sm lg:text-sm font-normal';

  return (
    <div className="flex flex-col justify-center text-center rounded-3xl bg-secondary dark:bg-dark xl:pb-8 xl:pt-6 xl:px-12 p-4 px-7 gap-4 transition ease-in-out hover:scale-105">
      <div className="flex flex-col gap-1.5">
        <p className="text-base xl:text-lg lg:text-lg font-bold text-white">{title}</p>
        <p className={`${fontStyle} text-default dark:text-secondary`}>{period}</p>
      </div>
      <p className={`${fontStyle} text-white`}>{description}</p>
    </div>
  );
};

export default Card;
