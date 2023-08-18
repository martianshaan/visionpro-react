/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React, {
  createContext, useState, useEffect, useMemo,
} from 'react';
import { toast } from 'react-hot-toast';
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

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  const [signingUp, setSigningUp] = useState(false);

  async function signupHandler(email, password, userName) {
    setSigningUp(true);
    try {
      // Create the user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Update the user's display name
      await updateProfile(userCredential.user, {
        displayName: userName,
      });
      // Refresh the user object with updated information
      setUser(userCredential.user);
      return userCredential;
    } catch (error) {
      // Handle errors
      toast.error(error.message);
      throw error;
    } finally {
      setSigningUp(false);
    }
  }

  function loginHandler(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logoutHandler() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authValues = useMemo(() => ({
    signupHandler,
    loginHandler,
    user,
    logoutHandler,
    googleSignIn,
    signingUp,
  }), [signingUp, user]);

  return (
    <AuthContext.Provider
      value={authValues}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
