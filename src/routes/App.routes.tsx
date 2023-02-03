import { HashRouter, Route, Routes } from 'react-router-dom';
import RoutesURL from '../_shared/Routes.enum';
import MainLayout from '../components/MainLayout';
import Projetos from '../modules/Projetos';
import SobreMim from '../modules/SobreMim';

const AppRoutes: React.FC = () => {
  return (
    <HashRouter>
      <MainLayout>
        <Routes>
          <Route path={RoutesURL.SOBRE_MIM} element={<SobreMim />} />
          <Route path={RoutesURL.PROJETOS} element={<Projetos />} />
        </Routes>
      </MainLayout>
    </HashRouter>
  );
};

export default AppRoutes;
