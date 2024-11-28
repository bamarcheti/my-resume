import { Action } from '../../../../../_shared/constant/skills';

type Props = {
  skills: Action[];
};

export const CardSkill = ({ skills }: Props) => {
  return (
    <div className="flex flex-wrap gap-3 text-center justify-start lg:justify-center w-full">
      {skills.map((skill, index) => (
        <p
          key={index}
          className="cursor-stone-900 font-semibold text-xs 2xl:text-base text-white bg-butterflyBush-600 p-3 rounded-md transition ease-in-out hover:scale-105 hover:text-stone-200"
        >
          {skill.name}
        </p>
      ))}
    </div>
  );
};
