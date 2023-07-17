/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Mockman from 'mockman-js';
import Login from '../pages/Login';

import {
  ProductData, ProductListing, Signup, Checkout, Profile,
} from '../pages';

export const authRoutes = [{
  id: 1,
  path: '/login',
  element: <Login />,
}, {
  id: 2,
  path: '/signup',
  element: <Signup />,
}];

export const contentRoutes = [{
  id: 1,
  path: '/product-listing',
  element: <ProductListing />,
}, {
  id: 2,
  path: '/productdetails',
  element: <ProductData />,
}, {
  path: '/mockman',
  element: <Mockman />,
}];

export const privateRoutes = [{
  path: '/checkout',
  element: <Checkout />,
}, {
  path: '/profile',
  element: <Profile />,
}];
