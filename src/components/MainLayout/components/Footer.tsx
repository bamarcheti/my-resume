import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

import RoutesURL from '../../../_shared/enum/Routes.enum';

const Footer = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const isActiveAbout = location.pathname === RoutesURL.ABOUT;
  const isActiveProject = location.pathname === RoutesURL.PROJECTS;

  const iconStyle =
    'text-white md:w-6 md:h-6 w-5 h-5 transition ease-in-out hover:opacity-80 hover:-translate-1 hover:scale-110';

  return (
    <div className="flex flex-col bg-purple-600 dark:bg-stone-800 w-full py-3 md:px-9 px-5 gap-3">
      <div className="flex">
        <ul className="flex gap-4 md:text-lg font-medium w-full">
          <Link to={RoutesURL.ABOUT}>
            <li
              className={`${
                isActiveAbout ? 'opacity-50 dark:text-purple-500' : ''
              } text-white cursor-pointer hover:opacity-60 transition-all ease-in-out hover:scale-105`}
            >
              {t('nav_about')}
            </li>
          </Link>
          <Link to={RoutesURL.PROJECTS}>
            <li
              className={`${
                isActiveProject ? 'opacity-50 dark:text-purple-500' : ''
              } text-white cursor-pointer hover:opacity-60 transition-all ease-in-out hover:scale-105`}
            >
              {t('nav_projects')}
            </li>
          </Link>
        </ul>

        <div className="flex flex-row md:gap-2 gap-2.5">
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
      </div>

      <div className="flex flex-col text-white text-xs text-center gap-1">
        <p>©{new Date().getFullYear()} Bárbara MF</p>
        <p>{t('footer')}</p>
      </div>
    </div>
  );
};

export default Footer;
