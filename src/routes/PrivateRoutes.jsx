import React from 'react';
import { Checkout, Orders, Profile } from '../pages';


const privateRoutes = [{
  path: '/checkout',
  element: <Checkout />,
}, {
  path: '/profile',
  element: <Profile />,
},{
  path:'/orders',
  element: <Orders />
}];

export default { privateRoutes };
