import Subtitle from '../../../components/Title/Subtitle';

const Description = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-between items-start">
        <Subtitle subtitle="Description" />
      </div>
      <div className="flex flex-col gap-10 pt-0 lg:pt-2">
        <p className="font-normal text-white text-base lg:text-lg text-left">
          I work for a year as a programmer. I started with Vue.js and then with React.js, in the
          I’m on we use React.js and Tailwind, some of the libs are Headless UI, react-router-dom
          and others, we also use some tools to format de code like Prettier and ESLint. I already
          used material ui and also styled-components in another project. In my project we do things
          like Payslip, Careers and website, I developed the download of the payslip to pdf and if
          also has the possibility of viewing if without downloading, I made some modals (pop-up),
          table and it also has responsiveness throughout the project.
        </p>
      </div>
    </div>
  );
};

export default Description;
