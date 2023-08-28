/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import {
  Routes, Route, Navigate, Outlet, useLocation,
} from 'react-router';
import React from 'react';
import { authRoutes, contentRoutes, privateRoutes } from './PublicRoutes';
import SharedLayout from './SharedLayout';
import { Home } from '../pages';
import RequiresAuth from './RequiresAuth';
import { useAuthContext } from '../contexts/contextIndex';

function Index() {
  const { user } = useAuthContext();
  const location = useLocation();
  return (
    <Routes>
      <Route element={
        user ? (
          <Navigate
            to={location?.state?.from?.pathname ?? '/'}
            replace
          />
        ) : (<Outlet />)
      }
      >
        {authRoutes.map((route) => (
          <Route key={route.id} path={route.path} element={route.element} exact />
        ))}
      </Route>

      <Route element={<SharedLayout />}>
        <Route path="/" element={<Home />} index />
        <Route path="*" element={<div>Error 404</div>} />
        {contentRoutes.map((route) => (
          <Route key={route.id} path={route.path} element={route.element} />
        ))}

        <Route element={<RequiresAuth />}>
          {privateRoutes.map((route) => (
            <Route key={route.id} path={route.path} element={route.element} />

          ))}
        </Route>
      </Route>
    </Routes>
  );
}

export { Index };
