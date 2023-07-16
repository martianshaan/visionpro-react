/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Outlet } from 'react-router';
import { Navbar } from '../components';

function SharedLayout() {
  return (
    <div className="">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default SharedLayout;
