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
      className={`px-2 md:px-6 py-2 rounded-full uppercase font-semibold text-sm md:text-base ${
        isActive ? 'bg-stone-500 text-white' : 'bg-transparent text-stone-500'
      }`}
    >
      {category}
    </button>
  );
};
