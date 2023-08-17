/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: process.env.VISION_FIREBASE_API_KEY,
  authDomain: process.env.VISION_FIREBASE_AuthDomain,
  projectId: process.env.VISION_FIREBASE_ProjectId,
  storageBucket: process.env.VISION_FIREBASE_StorageBucket,
  messagingSenderId: process.env.VISION_FIREBASE_MessagingSenderId,
  appId: process.env.VISION_FIREBASE_AppId,
  measurementId: process.env.VISION_FIREBASE_MeasurementId,
});

export const auth = app.auth();

export default app;
