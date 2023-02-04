import LanguageSkill from './LanguageSkill';

const StrongSkill = () => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <div className="flex text-start">
        <p className="font-bold text-lg text-white">Strong</p>
      </div>
      <div className="flex flex-col gap-3 text-center">
        <LanguageSkill skill="HTML" />
        <LanguageSkill skill="CSS" />
        <LanguageSkill skill="GIT" />
        <LanguageSkill skill="TEAM WORK" />
        <LanguageSkill skill="AGILE METODOLOGIES" />
      </div>
    </div>
  );
};

export default StrongSkill;
