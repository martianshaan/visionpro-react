/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable max-len */
/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-constructed-context-values */

import { createContext, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../../firebase';

import { notify } from '../../utils/utils';

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  const [signingUp, setSigningUp] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false);

  async function signupHandler(email, password, userName) {
    console.log('username', userName);
    setSigningUp(true);
    try {
      // Create the user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      notify('success', 'Signup successful! You can now log in.');
      // Update the user's display name
      await updateProfile(userCredential.user, {
        displayName: userName,
      });
      // Refresh the user object with updated information
      setUser(userCredential.user);

      return userCredential;
    } catch (error) {
      // Handle errors
      console.error(error.message);
      throw error;
    } finally {
      setSigningUp(false);
    }
  }

  function loginHandler(email, password) {
    notify('success', 'Logged in Successfully!!');
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logoutHandler() {
    notify('success', 'Logged out Successfully!!');
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log('Auth', currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider
      value={{
        signupHandler,
        loginHandler,
        user,
        logoutHandler,
        googleSignIn,
        signingUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
