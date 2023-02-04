import CardSkill from './CardSkill';

const StrongSkill = () => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <div className="flex text-start">
        <p className="font-bold text-lg text-white">Strong</p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-row gap-2">
          <CardSkill nameSkill="HTML" />
          <CardSkill nameSkill="CSS" />
        </div>
        <div className="flex flex-row gap-2">
          <CardSkill nameSkill="GIT" />
          <CardSkill nameSkill="TEAM WORK" />
        </div>
        <CardSkill nameSkill="AGILE METODOLOGIES" />
      </div>
    </div>
  );
};

export default StrongSkill;
