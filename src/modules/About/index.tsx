import MainTitle from '../../components/Title/MainTitle';
import AcademicGraduation from './components/AcademicGraduation';
import Experience from './components/Experience';
import ExtraQualifications from './components/ExtraQualifications';
import Skills from './components/Skills';

const About = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-between">
        <MainTitle title="Bárbara Marcheti Fiorin" />
        <div className="flex flex-col py-3">
          <p className="font-normal text-[#858584]">Brazilian, single, 20 years old</p>
          <p className="font-normal text-[#858584]">Campo Grande, Mato Grosso do Sul</p>
        </div>
        <div>
          <p className="font-semibold text-2xl text-[#A259FF]">Junior Front-end Developer</p>
        </div>
      </div>
      <div className="m-12">
        <Skills />
      </div>
      <div className="mt-6">
        <Experience />
      </div>
      <div className="mt-6">
        <AcademicGraduation />
      </div>
      <div className="mt-6">
        <ExtraQualifications />
      </div>
    </div>
  );
};

export default About;
