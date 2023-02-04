import LanguageSkill from './CardSkill';

const WeakSkill = () => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <div>
        <p className="font-bold text-lg text-white">Weak</p>
      </div>
      <div className="flex flex-col gap-3">
        <LanguageSkill nameSkill="NODE" />
        <LanguageSkill nameSkill="VUE" />
      </div>
    </div>
  );
};

export default WeakSkill;
