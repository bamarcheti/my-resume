import { Key } from 'react';

interface Props {
  key: Key | null | undefined;
  onClick: () => void;
  isActive: boolean;
  category: string;
}

export const SelectTag = ({ key, onClick, isActive, category }: Props) => {
  return (
    <button
      key={key}
      onClick={onClick}
      className={`px-6 py-2 rounded-full uppercase font-semibold ${
        isActive ? 'bg-textB text-white' : 'bg-transparent text-textB'
      }`}
    >
      {category}
    </button>
  );
};
