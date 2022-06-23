import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import Landing from 'pages/Landing/Landing';
import { Routes as RouteMap } from './Routes';
import UserDetail from 'pages/UserDetail';
import LinksExamples from 'pages/Links';
import Powered from 'pages/Powered';
import NotFound from 'pages/404';

const AppRoutes: FC = () => (
  <Routes>
    <Route path={RouteMap.ROOT} element={<Landing />} />
    <Route path={RouteMap.POWERED} element={<Powered />} />
    <Route path={RouteMap.LINKS_EXAMPLES} element={<LinksExamples />} />
    <Route path={RouteMap.USER_DETAIL} element={<UserDetail />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
