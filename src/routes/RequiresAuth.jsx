/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../contexts';

function RequiresAuth() {
  const { isAuthenticated } = useAuthContext();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default RequiresAuth;
