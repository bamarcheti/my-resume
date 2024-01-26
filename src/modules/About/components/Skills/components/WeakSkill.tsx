import { skills } from '../../../../../_shared/constanst/skills';
import CardSkill from './CardSkill';

const WeakSkill = () => {
  const weakSkills = skills.filter((skill) => skill.strength === 'weak');

  return (
    <div className="flex flex-col gap-3 items-start sm:items-center">
      <p className="font-bold text-lg text-default dark:text-white">Fraca</p>
      <div className="flex flex-col">
        <CardSkill skills={weakSkills} />
      </div>
    </div>
  );
};

export default WeakSkill;
