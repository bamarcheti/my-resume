import discord from '../../../assets/discord.svg';
import globe from '../../../assets/globe.svg';
import gmail from '../../../assets/gmail.svg';
import instagram from '../../../assets/instagram.svg';
import linkedin from '../../../assets/linkedin.svg';
import Subtitle from '../../../components/Title/Subtitle';

const Links = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-between items-start">
        <Subtitle subtitle="Links" />
      </div>
      <div className="flex flex-col sm:pt-4 pt-0">
        <div className="flex flex-row sm:flex-row gap-3 justify-start">
          <a href="http://bamarcheti.github.io/Portfolio/">
            <img
              src={globe}
              className="transition ease-in-out hover:-translate-1 hover:scale-110"
              alt="globe"
            />
          </a>
          <a href="https://discord.com/channels/@ba_marcheti">
            <img
              src={discord}
              className="transition ease-in-out hover:-translate-1 hover:scale-110"
              alt="discord"
            />
          </a>
          <a href="https://www.instagram.com/ba_marcheti/">
            <img
              src={instagram}
              className="transition ease-in-out hover:-translate-1 hover:scale-110"
              alt="instagram"
            />
          </a>
          <a href="https://www.linkedin.com/in/barbara-marcheti-fiorin/">
            <img
              src={linkedin}
              className="transition ease-in-out hover:-translate-1 hover:scale-110"
              alt="linkedin"
            />
          </a>
          <a href="mailto:bmarchetifiorin@gmail.com">
            <img
              src={gmail}
              className="transition ease-in-out hover:-translate-1 hover:scale-110"
              alt="gmail"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Links;
