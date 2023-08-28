/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthContext } from '../contexts/contextIndex';

function RequiresAuth() {
  const { user } = useAuthContext();
  const location = useLocation();
  return user ? (<Outlet />) : (<Navigate to="/login" state={{ from: location }} replace />);
}

export default RequiresAuth;
