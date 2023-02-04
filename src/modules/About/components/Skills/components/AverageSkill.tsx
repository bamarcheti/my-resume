import CardSkill from './CardSkill';

const AverageSkill = () => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <div>
        <p className="font-bold text-lg text-white">Average</p>
      </div>
      <div className="flex flex-col gap-3">
        <CardSkill nameSkill="JAVASCRIPT" />
        <CardSkill nameSkill="TYPESCRIPT" />
        <CardSkill nameSkill="REACT" />
        <CardSkill nameSkill="HOOKS" />
        <CardSkill nameSkill="UX" />
        <CardSkill nameSkill="UI" />
      </div>
    </div>
  );
};

export default AverageSkill;
