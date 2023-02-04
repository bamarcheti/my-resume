import { Action } from './StrongSkill';

type Props = {
  skillItens: Action[];
};

const CardSkill = ({ skillItens }: Props) => {
  return (
    <div className="flex flex-wrap gap-3 text-center">
      {skillItens.map((skillItens, index) => (
        <p key={index} className="front-semibold text-base text-white bg-card p-3 rounded-3xl">
          {skillItens.nameSkill}
        </p>
      ))}
    </div>
  );
};

export default CardSkill;
