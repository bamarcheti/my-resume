import discord from '../../../assets/discord.svg';
import globe from '../../../assets/globe.svg';
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
            <img src={globe} className="globe" alt="globe" />
          </a>
          <a href="https://discord.com/channels/@ba_marcheti#3824">
            <img src={discord} className="discord" alt="discord" />
          </a>
          <a href="https://www.instagram.com/ba_marcheti/">
            <img src={instagram} className="instagram" alt="instagram" />
          </a>
          <a href="https://www.linkedin.com/in/barbara-marcheti-fiorin/">
            <img src={linkedin} className="linkedin" alt="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Links;
