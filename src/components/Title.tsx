import React from 'react';

type Props = {
  title: string;
};

export const Title: React.FC<Props> = ({ title }) => {
  return (
    <div className="sm:py-1 py-0">
      <span className="font-semibold font-sans text-3xl text-default dark:text-tertiary">
        {title}
      </span>
    </div>
  );
};
