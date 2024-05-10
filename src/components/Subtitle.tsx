import React from 'react';

type Props = {
  subtitle: string;
};

export const Subtitle: React.FC<Props> = ({ subtitle }) => {
  return (
    <div className="flex items-start sm:py-1 py-3">
      <span className="font-semibold text-xl font-mono text-stone-500">{subtitle}</span>
    </div>
  );
};
