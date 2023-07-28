import React from 'react';

type Props = {
  subtitle: string;
};

const Subtitle: React.FC<Props> = ({ subtitle }) => {
  return (
    <div className="sm:py-1 py-3">
      <span className="font-semibold text-xl font-mono text-textB">{subtitle}</span>
    </div>
  );
};

export default Subtitle;
