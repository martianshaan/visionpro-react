/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDYDZSoLpY090X43ETkxrXNBbpJR-w4w2Y',
  authDomain: 'visionpro-auth.firebaseapp.com',
  projectId: 'visionpro-auth',
  storageBucket: 'visionpro-auth.appspot.com',
  messagingSenderId: '398060853531',
  appId: '1:398060853531:web:61c51d0c053f3fc7aa1bbe',
  measurementId: 'G-2XY7ZQ3VLD',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
