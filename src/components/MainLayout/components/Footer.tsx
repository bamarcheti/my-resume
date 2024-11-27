import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  const iconStyle =
    'text-white md:w-6 md:h-6 w-5 h-5 transition ease-in-out hover:opacity-80 hover:-translate-1 hover:scale-110';

  return (
    <div className="flex flex-col bg-purple-600 dark:bg-stone-800 w-full py-3 md:px-9 px-5 gap-3">
      <div className="flex flex-row justify-start md:gap-2 gap-2.5">
        <a href="https://github.com/bamarcheti" title="bamarcheti">
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

      <div className="flex flex-col text-white text-xs 2xl:text-base text-center gap-1">
        <p>©{new Date().getFullYear()} Bárbara MF</p>
        <p>{t('footer')}</p>
      </div>
    </div>
  );
};

export default Footer;
