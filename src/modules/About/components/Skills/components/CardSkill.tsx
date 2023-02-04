import React from 'react';

type Props = {
  nameSkill: string;
};

const CardSkill: React.FC<Props> = ({ nameSkill }) => {
  return (
    <div className="flex flex-col text-center">
      <p className="front-semibold text-base text-white bg-[#3B3B3B] p-3 rounded-3xl">
        {nameSkill}
      </p>
    </div>
  );
};

export default CardSkill;
