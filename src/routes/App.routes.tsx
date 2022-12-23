import React from 'react';
import { HashRouter, Routes } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        {/* <Route path='/' element={<MainLayout />}>
          <Route index element={<Search />} />
          <Route path='previsao-aleatoria' element={<Random />} />
        </Route> */}
      </Routes>
    </HashRouter>
  )
}

export default AppRoutes;