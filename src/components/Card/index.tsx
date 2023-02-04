import React from 'react';

type Props = {
  title: string;
  period?: string;
  description?: string;
};

const Card: React.FC<Props> = ({ title, period, description }) => {
  return (
    <div className="flex flex-col rounded-3xl bg-[#3B3B3B] pb-6 pt-3 px-7 gap-4">
      <div className="flex flex-col gap-1.5">
        <p className="flex justify-center align-center text-base font-bold text-white">{title}</p>
        <p className="align-center text-xs font-normal text-[#858584]">{period}</p>
      </div>
      <div className="flex flex-col">
        <p className="align-center text-xs font-normal text-white">{description}</p>
      </div>
    </div>
  );
};

export default Card;
