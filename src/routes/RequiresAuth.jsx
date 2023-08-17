/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthContext } from '../contexts';

function RequiresAuth() {
  const { token } = useAuthContext();
  const location = useLocation();
  return token ? (<Outlet />)
    : (<Navigate to="/login" state={{ from: location }} replace />);
}

export default RequiresAuth;
