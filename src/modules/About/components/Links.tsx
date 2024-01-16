import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import Subtitle from '../../../components/Subtitle';

const Links = () => {
  const iconStyle =
    'text-whitePrimary dark:text-secondary w-7 h-7 transition ease-in-out hover:opacity-80 hover:-translate-1 hover:scale-110';

  return (
    <div className="flex flex-col">
      <Subtitle subtitle="Links" />
      <div className="flex flex-row sm:flex-row gap-3 justify-start sm:pt-4 pt-0">
        <a href="http://bamarcheti.github.io/Portfolio/">
          <Github className={iconStyle} />
        </a>
        <a href="https://www.instagram.com/ba_marcheti/">
          <Instagram className={iconStyle} />
        </a>
        <a href="https://www.linkedin.com/in/barbara-marcheti-fiorin/">
          <Linkedin className={iconStyle} />
        </a>
        <a href="mailto:bmarchetifiorin@gmail.com">
          <Mail className={iconStyle} />
        </a>
      </div>
    </div>
  );
};

export default Links;
