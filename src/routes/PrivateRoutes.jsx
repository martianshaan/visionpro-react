import React from 'react';
import { Checkout, Profile } from '../pages';

const privateRoutes = [{
  path: '/checkout',
  element: <Checkout />,
}, {
  path: '/profile',
  element: <Profile />,
}];

export default { privateRoutes };
