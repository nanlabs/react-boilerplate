import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Landing from 'pages/Landing';
import Home from 'pages/Home';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/nan-labs" element={<Home />} />
  </Routes>
);

export default AppRoutes;
