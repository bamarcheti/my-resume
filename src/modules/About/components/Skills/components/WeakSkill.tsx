import CardSkill from './CardSkill';

const skillItens: Action[] = [{ nameSkill: 'NODE' }, { nameSkill: 'VUE' }];

export interface Action {
  nameSkill: string;
}

const WeakSkill = () => {
  return (
    <div className="flex flex-col gap-3 items-start sm:items-center">
      <div>
        <p className="font-bold text-lg text-white">Weak</p>
      </div>
      <div className="flex flex-col">
        <CardSkill skillItens={skillItens} />
      </div>
    </div>
  );
};

export default WeakSkill;
