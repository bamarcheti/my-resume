import React from 'react';

type Props = {
  title: string;
};

export const Title: React.FC<Props> = ({ title }) => {
  return (
    <div className="sm:py-1 py-0">
      <h1 className="font-semibold font-sans text-3xl text-stone-900 dark:text-white">{title}</h1>
    </div>
  );
};
