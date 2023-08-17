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
} from 'firebase/auth';
import { auth } from '../../firebase';

// import { notify } from '../../utils/utils';

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  const [signingUp, setSigningUp] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false);

  function signupHandler(email, password) {
    setSigningUp(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function loginHandler(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
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
        logOut,
        googleSignIn,
        signingUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;

// import { createContext, useState } from 'react';
// import { loginService, signupService } from '../../api/apiServices';
// import { notify } from '../../utils/utils';

// export const AuthContext = createContext();

// function AuthContextProvider({ children }) {
//   const [token, setToken] = useState(localStorage.getItem('token'));
//   const [userInfo, setUserInfo] = useState(
//     localStorage.getItem('userInfo')
//       ? JSON.parse(localStorage.getItem('userInfo'))
//       : null,
//   );
//   const [loggingIn, setLoggingIn] = useState(false);
//   const [signingUp, setSigningUp] = useState(false);

//   const signupHandler = async ({
//     username = '',
//     email = '',
//     password = '',
//   }) => {
//     setSigningUp(true);
//     try {
//       const response = await signupService(username, email, password);
//       console.log(response);
//       if (response.status === 200 || response.status === 201) {
//         localStorage.setItem('token', response?.data?.encodedToken);
//         localStorage.setItem(
//           'userInfo',
//           JSON.stringify(response?.data?.createdUser),
//         );
//         setToken(response?.data?.encodedToken);
//         notify('success', 'Signed Up Successfully!!');
//       }
//     } catch (err) {
//       console.log(err);
//       notify(
//         'error',
//         err?.response?.data?.errors
//           ? err?.response?.data?.errors[0]
//           : 'Some Error Occurred!!',
//       );
//     } finally {
//       setSigningUp(false);
//     }
//   };

//   const loginHandler = async ({ email, password }) => {
//     setLoggingIn(true);
//     console.log(email);
//     console.log(password);
//     try {
//       const response = await loginService(email, password);
//       console.log({ response });
//       if (response.status === 200 || response.status === 201) {
//         localStorage.setItem('token', response?.data?.encodedToken);
//         localStorage.setItem(
//           'userInfo',
//           JSON.stringify(response?.data?.foundUser),
//         );
//         setToken(response?.data?.encodedToken);
//         notify('success', 'Logged In Successfully!!');
//       }
//     } catch (err) {
//       console.log(err);
//       notify(
//         'error',
//         err?.response?.data?.errors
//           ? err?.response?.data?.errors[0]
//           : 'Some Error Occurred!!',
//       );
//     } finally {
//       setLoggingIn(false);
//     }
//   };

//   const logoutHandler = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('userInfo');
//     setToken(null);
//     notify('info', 'Logged out successfully!!', 100);
//   };
//   return (
//     <AuthContext.Provider
//       value={{
//         token,
//         loggingIn,
//         loginHandler,
//         logoutHandler,
//         signupHandler,
//         signingUp,
//         userInfo,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export default AuthContextProvider;
