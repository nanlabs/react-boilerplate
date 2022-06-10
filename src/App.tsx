import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import 'theme';

import Loading from 'components/Loading';
import AppRoutes from 'routes/AppRoutes';

const App = () => (
  <Suspense fallback={<Loading />}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </Suspense>
);

export default App;
