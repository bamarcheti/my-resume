import React from 'react';

type Props = {
  skill: string;
};

const LanguageSkill: React.FC<Props> = ({ skill }) => {
  return (
    <div>
      <div>
        <p className="front-semibold text-base text-white bg-[#3B3B3B] p-3 rounded-3xl">{skill}</p>
      </div>
    </div>
  );
};

export default LanguageSkill;
