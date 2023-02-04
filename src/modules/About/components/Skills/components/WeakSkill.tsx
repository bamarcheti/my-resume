import LanguageSkill from './LanguageSkill';

const WeakSkill = () => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <div>
        <p className="font-bold text-lg text-white">Weak</p>
      </div>
      <div className="flex flex-col gap-3 text-center">
        <LanguageSkill skill="NODE" />
        <LanguageSkill skill="VUE" />
      </div>
    </div>
  );
};

export default WeakSkill;
