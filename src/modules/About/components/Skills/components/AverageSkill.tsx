import { skills } from '../../../../../_shared/constanst/skills';
import CardSkill from './CardSkill';

const AverageSkill = () => {
  const averageSkills = skills.filter((skill) => skill.strength === 'average');

  return (
    <div className="flex flex-col gap-3 items-start sm:items-center">
      <p className="font-bold text-lg text-default dark:text-white">Média</p>
      <div className="flex flex-col">
        <CardSkill skills={averageSkills} />
      </div>
    </div>
  );
};

export default AverageSkill;
