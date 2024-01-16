import { HashRouter, Route, Routes } from 'react-router-dom';
import RoutesURL from '../_shared/Routes.enum';
import MainLayout from '../components/MainLayout';
import About from '../modules/About';
import Projects from '../modules/Projects';

const AppRoutes: React.FC = () => {
  return (
    <HashRouter>
      <MainLayout>
        <Routes>
          <Route index path={RoutesURL.ABOUT} element={<About />} />
          <Route path={RoutesURL.PROJECTOS} element={<Projects />} />
        </Routes>
      </MainLayout>
    </HashRouter>
  );
};

export default AppRoutes;
