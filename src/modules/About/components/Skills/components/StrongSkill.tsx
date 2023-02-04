import CardSkill from './CardSkill';

const skillItens: Action[] = [
  { nameSkill: 'HMTL' },
  { nameSkill: 'CSS' },
  { nameSkill: 'GIT' },
  { nameSkill: 'TEAM WORK' },
  { nameSkill: 'AGILE METODOLOGIES' }
];

export interface Action {
  nameSkill: string;
}

const StrongSkill = () => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <div className="flex text-start">
        <p className="font-bold text-lg text-white">Strong</p>
      </div>
      <div className="flex flex-col">
        <CardSkill skillItens={skillItens} />
      </div>
    </div>
  );
};

export default StrongSkill;
