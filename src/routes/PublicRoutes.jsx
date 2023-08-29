/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Mockman from 'mockman-js';
import Login from '../pages/Login';
import Todo from './Todo';

import {ProductDetails ,
 ProductListing, Signup, Checkout, Profile, Cart,
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
  path: '/glasses',
  element: <ProductListing />,
}, {
  id: 2,
  path: '/glasses/:productId',
  element: <ProductDetails />,
},
{
  id: 3,
  path: '/cart',
  element: <Cart />,
},
{
  id: 4,
  path: '/mockman',
  element: <Mockman />,
}, {
  id: 5,
  path: '/todo',
  element: <Todo />,
}];

export const privateRoutes = [{
  path: '/checkout',
  element: <Checkout />,
}, {
  path: '/profile',
  element: <Profile />,
}];
