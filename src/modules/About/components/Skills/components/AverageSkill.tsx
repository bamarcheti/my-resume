import CardSkill from './CardSkill';

const AverageSkill = () => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <div>
        <p className="font-bold text-lg text-white">Average</p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-row gap-2">
          <CardSkill nameSkill="JAVASCRIPT" />
          <CardSkill nameSkill="TYPESCRIPT" />
        </div>
        <div className="flex flex-row gap-2">
          <CardSkill nameSkill="REACT" />
          <CardSkill nameSkill="HOOKS" />
        </div>
        <div className="flex flex-row gap-2">
          <CardSkill nameSkill="UX" />
          <CardSkill nameSkill="UI" />
        </div>
      </div>
    </div>
  );
};

export default AverageSkill;
