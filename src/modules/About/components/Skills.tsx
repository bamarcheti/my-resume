import Subtitle from '../../../components/Title/Subtitle';

const Skills = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-between items-start">
        <Subtitle subtitle="Skills" />
      </div>
      <div className="flex flex-row gap-20 pl-12">
        <div className="flex flex-col gap-3 items-center">
          <div>
            <p className="font-bold text-lg text-white">Strong</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="front-semibold text-base text-white bg-[#3B3B3B] p-3 rounded-2xl">HTML</p>
            <p className="front-semibold text-base text-white bg-[#3B3B3B] p-3 rounded-2xl">CSS</p>
            <p className="front-semibold text-base text-white bg-[#3B3B3B] p-3 rounded-2xl">GIT</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <div>
            <p className="font-bold text-lg text-white">Average</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="front-semibold text-base text-white bg-[#3B3B3B] p-3 rounded-2xl">
              JAVASCRIPT
            </p>
            <p className="front-semibold text-base text-white bg-[#3B3B3B] p-3 rounded-2xl">
              TYPESCRIPT
            </p>
            <p className="front-semibold text-base text-white bg-[#3B3B3B] p-3 rounded-2xl">
              REACT
            </p>
            <p className="front-semibold text-base text-white bg-[#3B3B3B] p-3 rounded-2xl">
              HOOKS
            </p>
            <p className="front-semibold text-base text-white bg-[#3B3B3B] p-3 rounded-2xl">UX</p>
            <p className="front-semibold text-base text-white bg-[#3B3B3B] p-3 rounded-2xl">UI</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <div>
            <p className="font-bold text-lg text-white">Weak</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="front-semibold text-base text-white bg-[#3B3B3B] p-3 rounded-2xl">NODE</p>
            <p className="front-semibold text-base text-white bg-[#3B3B3B] p-3 rounded-2xl">VUE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
