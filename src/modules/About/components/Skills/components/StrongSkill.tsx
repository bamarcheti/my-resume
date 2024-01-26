import { skills } from '../../../../../_shared/constanst/skills';
import CardSkill from './CardSkill';

const StrongSkill = () => {
  const strongSkills = skills.filter((skill) => skill.strength === 'strong');

  return (
    <div className="flex flex-col gap-3 items-start sm:items-center">
      <p className="font-bold text-lg text-default dark:text-white">Forte</p>
      <div className="flex flex-col">
        <CardSkill skills={strongSkills} />
      </div>
    </div>
  );
};

export default StrongSkill;
