import Card from '../../../components/Card';
import Subtitle from '../../../components/Title/Subtitle';

const AcademicGraduation = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-between items-start">
        <Subtitle subtitle="Academic Graduation / Title" />
      </div>
      <div className="flex flex-col gap-10 pt-4">
        <div className="flex flex-row gap-10 justify-center">
          <Card
            title="Insted / Graduation"
            period="FEBRUARY OF 2021 - JULY OF 2023"
            description="Systems Analysis and Development Technology (TADS)"
          />
          <Card
            title="Colégio Nova escola / High School"
            period="FEBRUARY OF 2018 - DECEMBER OF 2020"
            description="High School"
          />
        </div>
      </div>
    </div>
  );
};

export default AcademicGraduation;
