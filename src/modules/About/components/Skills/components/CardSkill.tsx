import { Action } from './StrongSkill';

type Props = {
  skillItens: Action[];
};

const CardSkill = ({ skillItens }: Props) => {
  return (
    <div className="flex flex-wrap gap-2 text-center justify-start sm:justify-center ">
      {skillItens.map((skillItens, index) => (
        <p
          key={index}
          className="font-semibold text-xs text-white bg-secondary p-3 rounded-2xl transition ease-in-out hover:scale-105 hover:text-gray-400"
        >
          {skillItens.nameSkill}
        </p>
      ))}
    </div>
  );
};

export default CardSkill;
