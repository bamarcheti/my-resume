import MainTitle from '../../components/MainTitle';
import AcademicGraduation from './components/AcademicGraduation';
import Experience from './components/Experience';
import ExtraQualifications from './components/ExtraQualifications';
import Skills from './components/Skills';

const About = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap justify-between border-[1px] rounded border-stone-900">
        <MainTitle title="Sobre mim" />
      </div>
      <div className="mt-6">
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
