import React from 'react';

type Props = {
  title: string;
};

const MainTitle: React.FC<Props> = ({ title }) => {
  return (
    <div className="sm:py-1 py-3">
      <span className="font-semibold font-sans sm:text-3xl text-xl text-white">{title}</span>
    </div>
  );
};

export default MainTitle;
