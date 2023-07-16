import React from 'react';
import Login from '../pages/Login';

import { ProductData, ProductListing, Signup } from '../pages';

export const authRoutes = [{
  path: '/login',
  element: <Login />,
}, {
  path: '/signup',
  element: <Signup />,
}];

export const contentRoutes = [{
  path: '/product-listing',
  element: <ProductListing />,
}, {
  path: '/productdetails',
  element: <ProductData />,
}];
