import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import RoutesURL from '../../_shared/Routes.enum';
import Footer from '../Footer';

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
        className={`flex flex-col w-full ${
          registrationPage ? 'max-h-screen h-auto lg:bg-default' : 'h-screen'
        } `}
      >
        <div
          className={`w-full flex shadow-lg text-white
          ${open ? 'bg-default text-white' : 'bg-default shadow-lg'}`}
        >
          <div className="xl:max-w-7xl lg:max-w-full sm:max-w-xl max-w-xs min-w-min ">
            <div className="flex flex-row sm:px-10 px-3 py-2">
              <ul className="hidden sm:flex px-4">
                <div className="hidden sm:flex gap-2">
                  <Link to={RoutesURL.SOBRE_MIM} rel="noreferrer">
                    <li className="cursor-pointer hover:text-indigo-300 xl:text-2xl lg:text-xl transition-all font-medium rounded py-1 px-3 ease-in-out hover:scale-105">
                      Sobre mim
                    </li>
                  </Link>
                  <Link to={RoutesURL.PROJETOS} rel="noreferrer">
                    <li className="cursor-pointer hover:text-indigo-300 xl:text-2xl lg:text-xl transition-all font-medium rounded py-1 px-3 ease-in-out hover:scale-105">
                      Projetos
                    </li>
                  </Link>
                </div>
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
            <ul className={`flex flex-col bg-default text-white gap-2 p-2 ${open ? '' : 'hidden'}`}>
              <li
                className="cursor-pointer hover:text-indigo-300 transition-all font-medium rounded p-3 ease-in-out"
                onClick={() => navigate(RoutesURL.SOBRE_MIM)}
              >
                Sobre mim
              </li>
              <li
                className="cursor-pointer hover:text-indigo-300 transition-all font-medium rounded p-3 ease-in-out"
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
      </div>
    </>
  );
};

export default MainLayout;
