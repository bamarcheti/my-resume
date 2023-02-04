import LanguageSkill from './LanguageSkill';

const AverageSkill = () => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <div>
        <p className="font-bold text-lg text-white">Average</p>
      </div>
      <div className="flex flex-col gap-3 text-center">
        <LanguageSkill skill="JAVASCRIPT" />
        <LanguageSkill skill="TYPESCRIPT" />
        <LanguageSkill skill="REACT" />
        <LanguageSkill skill="HOOKS" />
        <LanguageSkill skill="UX" />
        <LanguageSkill skill="UI" />
      </div>
    </div>
  );
};

export default AverageSkill;
