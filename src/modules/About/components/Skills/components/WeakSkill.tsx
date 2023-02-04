import CardSkill from './CardSkill';

const WeakSkill = () => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <div>
        <p className="font-bold text-lg text-white">Weak</p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-row gap-2">
          <CardSkill nameSkill="NODE" />
          <CardSkill nameSkill="VUE" />
        </div>
      </div>
    </div>
  );
};

export default WeakSkill;
