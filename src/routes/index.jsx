/* eslint-disable import/no-extraneous-dependencies */
import { Routes, Route } from 'react-router';

import React from 'react';
import { authRoutes, contentRoutes } from './PublicRoutes';
import SharedLayout from './SharedLayout';
import { Home } from '../pages';
import RequiresAuth from './RequiresAuth';
import PrivateRoutes from './PrivateRoutes';

function Index() {
  return (
    <Routes>
      {authRoutes.map((route) => (
        <Route key={route.id} path={route.path} element={route.element} exact />
      ))}

      <Route element={<SharedLayout />}>
        <Route path="/" element={<Home />} index />
        <Route path="*" element={<div>Error 404</div>} />
        {contentRoutes.map((route) => (
          <Route key={route.id} path={route.path} element={route.element} />

        ))}

        <Route element={<RequiresAuth />}>
          {PrivateRoutes.map((route) => (
            <Route key={route.id} path={route.path} element={route.element} />
          ))}
        </Route>
      </Route>
    </Routes>
  );
}

export default Index;
