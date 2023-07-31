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
        className={`w-full flex text-white
          ${open ? 'bg-primary' : 'bg-primary'}`}
      >
        <div>
          <div className="flex flex-row px-4 py-4 w-full">
            <ul className="hidden sm:flex gap-4 text-xl font-semibold w-full">
              <Link to={RoutesURL.SOBRE_MIM}>
                <li className="cursor-pointer hover:text-indigo-300 transition-all ease-in-out hover:scale-105">
                  Sobre mim
                </li>
              </Link>
              <Link to={RoutesURL.PROJETOS}>
                <li className="cursor-pointer hover:text-indigo-300 transition-all ease-in-out hover:scale-105">
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
          <ul
            className={`w-full flex flex-col text-white font-semibold gap-5 p-5 ${
              open ? '' : 'hidden'
            }`}
          >
            <li
              className="cursor-pointer hover:text-indigo-300 transition-all ease-in-out"
              onClick={() => navigate(RoutesURL.SOBRE_MIM)}
            >
              Sobre mim
            </li>
            <li
              className="cursor-pointer hover:text-indigo-300 transition-all ease-in-out"
              onClick={() => navigate(RoutesURL.PROJETOS)}
            >
              Projetos
            </li>
          </ul>
        </div>
      </div>
      <div className="grow justify-center w-full md:p-14 p-9">{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
