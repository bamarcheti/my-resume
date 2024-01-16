import React from 'react';

type Props = {
  title: string;
};

const Title: React.FC<Props> = ({ title }) => {
  return (
    <div className="sm:py-1 py-0">
      <span className="font-semibold font-sans text-3xl text-default dark:text-darkPrimary">
        {title}
      </span>
    </div>
  );
};

export default Title;
