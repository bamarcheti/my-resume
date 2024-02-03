import { Moon, SunMedium } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import RoutesURL from '../../_shared/enum/Routes.enum';
import Footer from './components/Footer';
import SelectLanguage from './components/SelectLanguage';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [toggledTheme, setToggledTheme] = useState(false);
  const { t } = useTranslation();
  const [isActiveAbout, setIsActiveAbout] = useState(location.pathname === RoutesURL.ABOUT);
  const [isActiveProject, setIsActiveProject] = useState(location.pathname === RoutesURL.PROJECTOS);

  const toggleOpen = () => {
    setOpen((old) => !old);
  };

  const toggleTheme = () => {
    const isDarkMode = !toggledTheme;
    document.documentElement.classList.toggle('dark', isDarkMode);
    setToggledTheme(isDarkMode);
  };

  useEffect(() => {
    setIsActiveAbout(location.pathname === RoutesURL.ABOUT);
    setIsActiveProject(location.pathname === RoutesURL.PROJECTOS);
  }, [location.pathname]);

  return (
    <div className="w-full h-screen bg-whitePrimary dark:bg-dark">
      <div
        className={`flex text-white py-4 px-8
          ${open ? 'flex-col' : 'justify-between items-center'}`}
      >
        <div className="flex flex-row w-full">
          <ul className="hidden sm:flex gap-4 text-xl font-semibold w-full">
            <Link to={RoutesURL.ABOUT}>
              <li
                className={`${
                  isActiveAbout ? 'text-indigo-400' : 'text-white'
                } cursor-pointer hover:text-indigo-300 transition-all ease-in-out hover:scale-105`}
              >
                {t('nav_about')}
              </li>
            </Link>
            <Link to={RoutesURL.PROJECTOS}>
              <li
                className={`${
                  isActiveProject ? 'text-indigo-400' : 'text-white'
                } cursor-pointer hover:text-indigo-300 transition-all ease-in-out hover:scale-105`}
              >
                {t('nav_projects')}
              </li>
            </Link>
          </ul>

          <div className="sm:hidden visible">
            <div onClick={toggleOpen}>
              {open ? (
                <svg
                  className="h-8 w-8 text-white cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-8 w-8 text-white cursor-pointer"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="12" x2="21" y2="12" /> <line x1="3" y1="6" x2="21" y2="6" />{' '}
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </div>
          </div>
        </div>
        <ul
          className={`w-full flex flex-col text-white font-semibold gap-5 px-12 py-5 ${
            open ? '' : 'hidden'
          }`}
        >
          <li
            className={`${
              isActiveAbout ? 'text-indigo-400' : 'text-white'
            } cursor-pointer hover:text-indigo-300 transition-all ease-in-out`}
            onClick={() => navigate(RoutesURL.ABOUT)}
          >
            {t('nav_about')}
          </li>
          <li
            className={`${
              isActiveProject ? 'text-indigo-400' : 'text-white'
            } cursor-pointer hover:text-indigo-300 transition-all ease-in-out`}
            onClick={() => navigate(RoutesURL.PROJECTOS)}
          >
            {t('nav_projects')}
          </li>
        </ul>
        <div
          className={`${open ? 'hidden' : 'flex w-full justify-end items-center md:gap-8 gap-6'}`}
        >
          {toggledTheme ? (
            <SunMedium onClick={toggleTheme} className="cursor-pointer w-7 h-7 hover:opacity-50" />
          ) : (
            <Moon onClick={toggleTheme} className="cursor-pointer w-7 h-7 hover:opacity-50" />
          )}
          <SelectLanguage />
        </div>
      </div>
      <div className="grow justify-center w-full md:p-14 p-9 bg-white dark:bg-default">
        {children}
      </div>
      <div className="bg-white dark:bg-default">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
