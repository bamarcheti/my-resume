import MainTitle from '../../../components/Title/MainTitle';

const Header = () => {
  return (
    <div className="flex flex-col justify-between">
      <MainTitle title="Bárbara Marcheti Fiorin" />
      <div className="flex flex-col sm:py-3">
        <p className="font-normal text-base text-textB">Brasileira, Solteira, 21 Anos</p>
        <p className="font-normal text-base text-textB">Campo Grande, Mato Grosso do Sul</p>
      </div>
      <div>
        <p className="font-semibold text-3xl capitalize text-secondary transition ease-in-out hover:translate-x-4 hover:scale-105">
          Desenvolvedora Front-end Junior
        </p>
      </div>
    </div>
  );
};

export default Header;
