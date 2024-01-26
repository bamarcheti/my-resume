import Subtitle from '../../../components/Subtitle';

const Description = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-between items-start">
        <Subtitle subtitle="Descrição" />
      </div>
      <div className="flex flex-col gap-10 pt-0 lg:pt-2">
        <p className="font-normal text-default dark:text-white text-base lg:text-lg text-left">
          Tenho 21 anos. Sou graduada em Análise e Desenvolvimento de Sistemas (TADS) na Faculdade
          Insted. Trabalho a um ano e meio com programação. Tenho bastante interesse e paixão por
          essa área. Eu iniciei com Vue.js e depois com React.js. No momento tenho utilizado
          React.js, Tailwind, TypeScript e Next.js, algumas libs são Headless UI, react-router-dom e
          outras. Eu já utilizei material ui e também styled-components em outro projeto. No
          trabalho desenvolvo projetos como Holerite, Carreiras e site. Todos em foco na
          usabilidade, utilidade e desejabilidade do usuário e responsividade. Estou sempre
          estudando e procurando melhorar. Tenho disponibilidade para trabalhar em qualquer modelo
          de trabalho que a empresa ofertar: presencial, híbrido ou remoto.
        </p>
      </div>
    </div>
  );
};

export default Description;
