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
      <div className="grow justify-center w-full md:p-14 p-9 bg-white dark:bg-default">
        {children}
      </div>
      <div className="bg-white dark:bg-default">
        <Footer />
      </div>
    </div>
  );
};
