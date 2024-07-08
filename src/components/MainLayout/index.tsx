import React, { ReactNode } from 'react';

import Footer from './components/Footer';
import { Navigation } from './components/Navigation';

interface Props {
  children: ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navigation />
      <div className="grow w-full md:px-14 px-9 pt-[90px] pb-[50px] bg-white dark:bg-[#171717]">
        {children}
      </div>
      <Footer />
    </>
  );
};
