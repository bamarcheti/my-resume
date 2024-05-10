import React from 'react';

import Footer from './components/Footer';
import { Navigation } from './components/Navigation';

interface Props {
  children: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full h-screen">
      <Navigation />
      <div className="grow justify-center w-full md:px-14 md:py-[115px] px-9 py-[102px] bg-white dark:bg-stone-900">
        {children}
      </div>
      <Footer />
    </div>
  );
};
