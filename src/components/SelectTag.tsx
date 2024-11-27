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
      className={`px-2 md:px-6 py-2 rounded-md uppercase font-semibold text-sm 2xl:text-base ${
        isActive
          ? 'bg-butterflyBush-600 text-white '
          : 'bg-transparent text-stone-500 border border-mineShaft-400'
      }`}
    >
      {category}
    </button>
  );
};
