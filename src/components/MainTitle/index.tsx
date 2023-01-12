import React from 'react';

type Props = {
  title: string;
};

const MainTitle: React.FC<Props> = ({ title }) => {
  return (
    <div className="sm:py-5 py-3">
      <span className="font-semibold text-xl text-teal-600">{title}</span>
    </div>
  );
};

export default MainTitle;