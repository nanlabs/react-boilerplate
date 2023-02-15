import React, { FC, ReactElement } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { render, RenderOptions } from '@testing-library/react';

import '@/utils/test/i18n';

/**
 *
 * In this file, you can define several custom renders depending on the
 * providers that the component needs to be tested, for example, we
 * can have a custom render that has the i18n providers together
 * a dummy Router, since we can have a component (eg Header) have
 * translations and Links components that need to be inside Router
 *
 */

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={children} />
      </Routes>
    </BrowserRouter>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
