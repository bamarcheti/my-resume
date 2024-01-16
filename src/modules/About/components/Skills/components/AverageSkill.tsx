import CardSkill from './CardSkill';

const skillItens: Action[] = [
  { nameSkill: 'JAVASCRIPT' },
  { nameSkill: 'TYPESCRIPT' },
  { nameSkill: 'REACT' },
  { nameSkill: 'HOOKS' },
  { nameSkill: 'UX' },
  { nameSkill: 'UI' }
];

export interface Action {
  nameSkill: string;
}

const AverageSkill = () => {
  return (
    <div className="flex flex-col gap-3 items-start sm:items-center">
      <div>
        <p className="font-bold text-lg text-default dark:text-white">Média</p>
      </div>
      <div className="flex flex-col">
        <CardSkill skillItens={skillItens} />
      </div>
    </div>
  );
};

export default AverageSkill;
