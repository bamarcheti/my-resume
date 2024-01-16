import Card from '../../../components/Card';
import Subtitle from '../../../components/Subtitle';

const AcademicGraduation = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-between items-start">
        <Subtitle subtitle="Graduação Acadêmica" />
      </div>
      <div className="flex flex-col sm:pt-4 pt-0">
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 xl:gap-16 lg:gap-14 justify-center">
          <Card
            title="Insted / Graduação"
            period="FEVEREIRO DE 2021 - JULHO DE 2023"
            description="Tecnologia em Análise e Desenvolvimento de Sistemas (TADS)"
          />
          <Card
            title="Colégio Nova escola / Ensino Médio"
            period="FEVEREIRO DE 2018 - DEZEMBRO DE 2020"
            description="Ensino Médio"
          />
        </div>
      </div>
    </div>
  );
};

export default AcademicGraduation;
