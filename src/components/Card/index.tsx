import React from 'react';

type Props = {
  title: string;
  period?: string;
  description?: string;
};

const Card: React.FC<Props> = ({ title, period, description }) => {
  return (
    <div className="flex flex-col rounded-3xl bg-card xl:pb-8 xl:pt-6 xl:px-12 pb-5 pt-3 px-7 gap-4">
      <div className="flex flex-col gap-1.5">
        <p className="flex justify-center align-center text-base xl:text-lg lg:text-lg font-bold text-white">
          {title}
        </p>
        <p className="align-center text-xs xl:text-sm lg:text-sm font-normal text-primary">
          {period}
        </p>
      </div>
      <div className="flex flex-col">
        <p className="align-center text-xs xl:text-sm lg:text-sm font-normal text-white">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
