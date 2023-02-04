import Subtitle from '../../../../components/Title/Subtitle';
import AverageSkill from './components/AverageSkill';
import StrongSkill from './components/StrongSkill';
import WeakSkill from './components/WeakSkill';

const Skills = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-between items-start">
        <Subtitle subtitle="Skills" />
      </div>
      <div className="flex flex-row gap-20 pl-12">
        <StrongSkill />
        <AverageSkill />
        <WeakSkill />
      </div>
    </div>
  );
};

export default Skills;
