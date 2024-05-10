import { TFunction } from 'i18next';
import React from 'react';
import RoutesURL from '../../../_shared/enum/Routes.enum';

interface ResponsiveMenuProps {
  open: boolean;
  isActiveAbout: boolean;
  isActiveProject: boolean;
  toggleOpen: () => void;
  handleNavigation: (path: string) => void;
  t: TFunction;
}

export const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({
  open,
  isActiveAbout,
  isActiveProject,
  toggleOpen,
  handleNavigation,
  t
}) => {
  return (
    <div className="flex flex-col">
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
      <ul
        className={`w-full flex flex-col text-white font-semibold gap-5 px-12 py-5 ${
          open ? '' : 'hidden'
        }`}
      >
        <li
          className={`${
            isActiveAbout ? 'opacity-50' : ''
          } text-white cursor-pointer hover:opacity-60 transition-all ease-in-out`}
          onClick={() => handleNavigation(RoutesURL.ABOUT)}
        >
          {t('nav_about')}
        </li>
        <li
          className={`${
            isActiveProject ? 'opacity-50' : ''
          } text-white cursor-pointer hover:opacity-60 transition-all ease-in-out`}
          onClick={() => handleNavigation(RoutesURL.PROJECTS)}
        >
          {t('nav_projects')}
        </li>
      </ul>
    </div>
  );
};
