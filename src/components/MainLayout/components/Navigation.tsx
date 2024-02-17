import { Moon, SunMedium } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import RoutesURL from '../../../_shared/enum/Routes.enum';
import { ResponsiveMenu } from './ResponsiveMenu';
import SelectLanguage from './SelectLanguage';

export const Navigation: React.FC = () => {
  const [toggledTheme, setToggledTheme] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const isActiveAbout = location.pathname === RoutesURL.ABOUT;
  const isActiveProject = location.pathname === RoutesURL.PROJECTS;

  const toggleOpen = () => {
    setOpen((old) => !old);
  };

  const handleNavigation = (path: string) => {
    toggleOpen();
    navigate(path);
  };

  const toggleTheme = () => {
    const isDarkMode = !toggledTheme;
    document.documentElement.classList.toggle('dark', isDarkMode);
    setToggledTheme(isDarkMode);
  };

  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);

  return (
    <div
      className={`w-full bg-whitePrimary dark:bg-dark flex text-white py-4 px-8 fixed top-0 ${
        open ? 'flex-col' : 'justify-between items-center'
      }`}
    >
      <div className="flex flex-row w-full top-2">
        <ul className="hidden sm:flex gap-4 text-xl font-semibold w-full">
          <Link to={RoutesURL.ABOUT}>
            <li
              className={`${
                isActiveAbout ? 'text-indigo-400' : 'text-white'
              } cursor-pointer hover:text-indigo-400 transition-all ease-in-out hover:scale-105`}
            >
              {t('nav_about')}
            </li>
          </Link>
          <Link to={RoutesURL.PROJECTS}>
            <li
              className={`${
                isActiveProject ? 'text-indigo-400' : 'text-white'
              } cursor-pointer hover:text-indigo-400 transition-all ease-in-out hover:scale-105`}
            >
              {t('nav_projects')}
            </li>
          </Link>
        </ul>

        <ResponsiveMenu
          open={open}
          isActiveAbout={isActiveAbout}
          isActiveProject={isActiveProject}
          toggleOpen={toggleOpen}
          handleNavigation={handleNavigation}
          t={t}
        />
      </div>

      <div className={`${open ? 'hidden' : 'flex w-full justify-end items-center md:gap-8 gap-6'}`}>
        {toggledTheme ? (
          <SunMedium onClick={toggleTheme} className="cursor-pointer w-7 h-7 hover:opacity-50" />
        ) : (
          <Moon onClick={toggleTheme} className="cursor-pointer w-7 h-7 hover:opacity-50" />
        )}
        <SelectLanguage />
      </div>
    </div>
  );
};
