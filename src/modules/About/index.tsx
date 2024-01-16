import AcademicGraduation from './components/AcademicGraduation';
import Description from './components/Description';
import Experience from './components/Experience/index';
import ExtraQualifications from './components/ExtraQualifications';
import Header from './components/Header';
import Skills from './components/Skills/index';

const About = () => {
  return (
    <div className="flex flex-col justify-center gap-8">
      <Header />
      <div className="flex flex-col gap-10">
        <Description />
        <Skills />
        <AcademicGraduation />
        <Experience />
        <ExtraQualifications />
      </div>
    </div>
  );
};

export default About;
