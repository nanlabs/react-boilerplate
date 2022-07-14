import React, { FC, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import 'theme';

import Loading from 'components/Loading';
import AppRoutes from 'routes/AppRoutes';
import ReactQueryProvider from 'providers/ReactQueryProvider';
import { toggleTheme } from 'utils/utils';

window.toggleTheme = toggleTheme;

const App: FC = () => (
  <Suspense fallback={<Loading />}>
    <ReactQueryProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ReactQueryProvider>
  </Suspense>
);

export default App;
