import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RoutesURL from '../_shared/enum/Routes.enum';
import { MainLayout } from '../components/MainLayout';
import About from '../modules/About';
import Projects from '../modules/Projects';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route index path={RoutesURL.ABOUT} element={<About />} />
          <Route path={RoutesURL.PROJECTS} element={<Projects />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default AppRoutes;
