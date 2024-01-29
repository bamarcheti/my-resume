import { Suspense } from 'react';
import AppRoutes from './routes/App.routes';

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppRoutes />
    </Suspense>
  );
};

export default App;
