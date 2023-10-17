/* eslint-disable import/no-extraneous-dependencies */
import React, { Suspense, lazy } from 'react';
import Mockman from 'mockman-js';
import Login from '../pages/Login';
import Todo from './Todo';

import {
  ProductDetails, Signup, Checkout, Profile, Cart, Orders, OrdersHistory
} from '../pages';
import Wishlist from '../pages/Wishlist';

const ProductListing = lazy(() => import('../pages/ProductListing'))
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
  element: <Suspense fallback={<p>Loading...</p>}>
    <ProductListing />
  </Suspense>,
}, {
  id: 2,
  path: '/glasses/:productId',
  element: <ProductDetails />,
},
{
  id: 3,
  path: '/mockman',
  element: <Mockman />,
}, {
  id: 4,
  path: '/todo',
  element: <Todo />,
}];

export const privateRoutes = [{
  id: 1,
  path: '/checkout',
  element: <Checkout />,
}, {
  id: 2,
  path: '/profile',
  element: <Profile />,
},
{
  id: 3,
  path: '/cart',
  element: <Cart />,
},
{
  id: 4,
  path: '/wishlist',
  element: <Wishlist />,
},
{
  id: 5,
  path: '/orders',
  element: <Orders />
},
{
  id: 6,
  path: '/myorders',
  element: <OrdersHistory />,
},];
