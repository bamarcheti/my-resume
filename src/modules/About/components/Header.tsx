import Title from '../../../components/Title';
import Links from './Links';

const Header = () => {
  return (
    <div className="flex flex-col justify-between">
      <Title title="Bárbara Marcheti Fiorin" />
      <div className="flex items-center gap-10">
        <div className="flex flex-col sm:py-3">
          <p className="font-normal text-base text-textB">Brasileira, Solteira, 21 Anos</p>
          <p className="font-normal text-base text-textB">Campo Grande, Mato Grosso do Sul</p>
        </div>
        <Links />
      </div>
      <p className="font-semibold text-3xl capitalize text-secondary transition ease-in-out hover:translate-x-4 hover:scale-105">
        Desenvolvedora Front-end Junior
      </p>
    </div>
  );
};

export default Header;
