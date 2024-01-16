import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

const Links = () => {
  const iconStyle =
    'text-whitePrimary dark:text-secondary w-6 h-6 transition ease-in-out hover:opacity-80 hover:-translate-1 hover:scale-110';

  return (
    <div className="flex flex-row gap-2">
      <a href="https://github.com/Bamarcheti" title="Bamarcheti">
        <Github className={iconStyle} />
      </a>
      <a href="https://www.instagram.com/ba_marcheti/" title="ba_marcheti">
        <Instagram className={iconStyle} />
      </a>
      <a
        href="https://www.linkedin.com/in/barbara-marcheti-fiorin/"
        title="barbara-marcheti-fiorin"
      >
        <Linkedin className={iconStyle} />
      </a>
      <a href="mailto:bmarchetifiorin@gmail.com" title="bmarchetifiorin@gmail.com">
        <Mail className={iconStyle} />
      </a>
    </div>
  );
};

export default Links;
