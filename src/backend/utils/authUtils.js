/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
// import { Response } from 'miragejs';
// import dayjs from 'dayjs';
// import jwt_decode from 'jwt-decode';

// export const requiresAuth = function (request) {
//   const encodedToken = request.requestHeaders.authorization;
//   const decodedToken = jwt_decode(
//     encodedToken,
//     process.env.REACT_APP_JWT_SECRET,
//   );
//   if (decodedToken) {
//     const user = this.db.users.findBy({ email: decodedToken.email });
//     if (user) {
//       return user._id;
//     }
//   }
//   return new Response(
//     401,
//     {},
//     { errors: ['The token is invalid. Unauthorized access error.'] },
//   );
// };

// export const formatDate = () => dayjs().format('YYYY-MM-DDTHH:mm:ssZ');

import { Response } from 'miragejs';
import dayjs from 'dayjs';
// Import the Firebase authentication module
import { getAuth } from 'firebase/auth';

// Initialize Firebase authentication instance
const auth = getAuth();

export const requiresAuth = function () {
  const firebaseUser = auth.currentUser;

  if (firebaseUser) {
    // Use firebaseUser.uid as the identifier
    return firebaseUser.uid;
  }

  return new Response(
    401,
    {},
    { errors: ['The token is invalid. Unauthorized access error.'] },
  );
};

export const formatDate = () => dayjs().format('YYYY-MM-DDTHH:mm:ssZ');

