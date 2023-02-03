import React from 'react';

type Props = {
  title: string;
};

const MainTitle: React.FC<Props> = ({ title }) => {
  return (
    <div className="sm:py-1 py-3">
      <span className="font-bold text-3xl text-indigo-600">{title}</span>
    </div>
  );
};

export default MainTitle;
