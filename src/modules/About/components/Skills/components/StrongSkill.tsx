import LanguageSkill from './CardSkill';

const StrongSkill = () => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <div className="flex text-start">
        <p className="font-bold text-lg text-white">Strong</p>
      </div>
      <div className="flex flex-col gap-3">
        <LanguageSkill nameSkill="HTML" />
        <LanguageSkill nameSkill="CSS" />
        <LanguageSkill nameSkill="GIT" />
        <LanguageSkill nameSkill="TEAM WORK" />
        <LanguageSkill nameSkill="AGILE METODOLOGIES" />
      </div>
    </div>
  );
};

export default StrongSkill;
