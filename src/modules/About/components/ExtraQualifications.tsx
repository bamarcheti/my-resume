import Card from '../../../components/Card';
import Subtitle from '../../../components/Title/Subtitle';

const ExtraQualifications = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-between items-start">
        <Subtitle subtitle="Extra Qualifications" />
      </div>
      <div className="flex flex-col sm:pt-4 pt-0">
        <div className="flex flex-wrap sm:flex-row gap-5 sm:gap-10 xl:gap-16 lg:gap-14 justify-center">
          <Card
            title="EBAC"
            period="SEPTEMBER OF 2022"
            description="Create “The” Case of your Portfolio in 7 days"
          />
          <Card
            title="EBAC"
            period="JULY OF 2022"
            description="Your Beginning of a Programming Carrer"
          />
          <Card
            title="IFMS"
            period="MARCH OF 2022 - JUNE OF 2022"
            description="Introduction to Artificial Intelligence"
          />
          <Card title="KUMON" period="2013 - 2016, Escola Carandá Bosque" description="Math" />
          <Card
            title="CCAA / Level 9"
            period="2013 - 2021, CCAA Joaquim Murtinho"
            description="Advanced English"
          />
        </div>
      </div>
    </div>
  );
};

export default ExtraQualifications;
