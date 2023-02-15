import React, { FC, Suspense } from 'react';
import { HashRouter } from 'react-router-dom';

import '@/theme';

import Loading from '@/components/Loading';
import AppRoutes from '@/routes/AppRoutes';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import { toggleTheme } from '@/utils';

window.toggleTheme = toggleTheme;

const App: FC = () => (
  <Suspense fallback={<Loading />}>
    <ReactQueryProvider>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </ReactQueryProvider>
  </Suspense>
);

export default App;
