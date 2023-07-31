import React from 'react';

type Props = {
  title: string;
};

const MainTitle: React.FC<Props> = ({ title }) => {
  return (
    <div className="sm:py-1 py-0">
      <span className="font-semibold font-sans text-3xl text-textA">{title}</span>
    </div>
  );
};

export default MainTitle;
