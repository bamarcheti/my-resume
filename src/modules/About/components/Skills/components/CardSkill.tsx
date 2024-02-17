import { Action } from '../../../../../_shared/constant/skills';

type Props = {
  skills: Action[];
};

export const CardSkill = ({ skills }: Props) => {
  return (
    <div className="flex flex-wrap gap-2 text-center justify-start sm:justify-center ">
      {skills.map((skill, index) => (
        <p
          key={index}
          className="cursor-default font-semibold text-xs text-white bg-secondary p-3 rounded-2xl transition ease-in-out hover:scale-105 hover:text-default"
        >
          {skill.name}
        </p>
      ))}
    </div>
  );
};
