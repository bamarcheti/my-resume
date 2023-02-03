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
          <Route index path={RoutesURL.SOBRE_MIM} element={<About />} />
          <Route path={RoutesURL.PROJETOS} element={<Projects />} />
        </Routes>
      </MainLayout>
    </HashRouter>
  );
};

export default AppRoutes;
