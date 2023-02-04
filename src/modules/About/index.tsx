import MainTitle from '../../components/Title/MainTitle';
import AcademicGraduation from './components/AcademicGraduation';
import Description from './components/Description';
import Experience from './components/Experience/index';
import Skills from './components/Skills/index';

const About = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col justify-between">
        <MainTitle title="Bárbara Marcheti Fiorin" />
        <div className="flex flex-col sm:py-3">
          <p className="font-normal text-base text-primary">Brazilian, single, 20 years old</p>
          <p className="font-normal text-base text-primary">Campo Grande, Mato Grosso do Sul</p>
        </div>
        <div>
          <p className="font-semibold text-2xl xl:text-3xl text-secondary">
            Junior Front-end Developer
          </p>
        </div>
      </div>
      <div className="sm:mt-9 mt-6">
        <Description />
      </div>
      <div className="sm:mt-9 mt-6">
        <Skills />
      </div>
      <div className="sm:mt-9 mt-6">
        <AcademicGraduation />
      </div>
      <div className="sm:mt-9 mt-6">
        <Experience />
      </div>
      {/* <div className="sm:mt-9 mt-6">
        <ExtraQualifications />
      </div>
      <div className="sm:mt-9 mt-6">
        <Links />
      </div> */}
    </div>
  );
};

export default About;
