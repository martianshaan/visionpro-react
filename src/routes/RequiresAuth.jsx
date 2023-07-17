/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function RequiresAuth() {
  const isAuthenticated = true;
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default RequiresAuth;
