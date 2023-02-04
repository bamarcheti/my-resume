import Subtitle from '../../../../components/Title/Subtitle';
import ExperienceSection from './components/ExperienceSection';

const Experience = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-between items-start">
        <Subtitle subtitle="Experience" />
      </div>
      <ExperienceSection
        company="PSG Tecnologia / Junior Developer"
        period="SINCE SEPTEMBER 2021, SEDE"
        description="
        I work in the internal projects of the company I work for (Payslip, Careers, company website);
        I use tools like React.js and Tailwind daily on all project fronts;
        These projects contain: responsiveness for desktop, tablet and mobile; API integration; using react-router-dom; in addition to having clean architecture;
        I live daily with agile methodologies (we use Scrum, daily and plannings to manage our team);
        I have a daily and direct relationship with my team (during office hours we are on call making our demands and if necessary we clarify doubts with each other so that we can solve our problem)."
      />
    </div>
  );
};

export default Experience;
