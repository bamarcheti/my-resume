import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import RoutesURL from '../../_shared/Routes.enum';
import Footer from './components/Footer';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [registrationPage, setRegistrationPage] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const getPathName = () => {
    if (pathname === RoutesURL.SOBRE_MIM) {
      setRegistrationPage(true);
    } else {
      setRegistrationPage(false);
    }
  };

  const toggleOpen = () => {
    setOpen((old) => !old);
  };

  useEffect(() => {
    getPathName();
  }, [pathname]);

  return (
    <>
      <div
        className={`w-full flex shadow-lg text-white
          ${open ? 'bg-primary' : 'bg-primary shadow-lg'}`}
      >
        <div>
          <div className="flex flex-row sm:px-10 px-3 py-2">
            <ul className="hidden sm:flex gap-4 py-2 px-4">
              <Link to={RoutesURL.SOBRE_MIM} rel="noreferrer">
                <li className="cursor-pointer hover:text-indigo-300 transition-all font-semibold ease-in-out hover:scale-105">
                  Sobre mim
                </li>
              </Link>
              <Link to={RoutesURL.PROJETOS} rel="noreferrer">
                <li className="cursor-pointer hover:text-indigo-300 transition-all font-semibold ease-in-out hover:scale-105">
                  Projetos
                </li>
              </Link>
            </ul>
            <div className="sm:hidden visible">
              <div onClick={toggleOpen}>
                {open ? (
                  <svg
                    className="h-8 w-8 text-white"
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
                    className="h-8 w-8 text-white"
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
          <ul className={`flex flex-col text-white gap-5 p-5 ${open ? '' : 'hidden'}`}>
            <li
              className="cursor-pointer hover:text-indigo-300 transition-all font-semibold ease-in-out"
              onClick={() => navigate(RoutesURL.SOBRE_MIM)}
            >
              Sobre mim
            </li>
            <li
              className="cursor-pointer hover:text-indigo-300 transition-all font-semibold ease-in-out"
              onClick={() => navigate(RoutesURL.PROJETOS)}
            >
              Projetos
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`grow justify-center w-full xl:max-w-full lg:max-w-full sm:max-w-full max-w-full py-3 xl:p-12 ${registrationPage} mt-2 rounded-sm px-14`}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
