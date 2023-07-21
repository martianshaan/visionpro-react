/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isAutheneticated, setIsAutheneticated] = useState(
    localStorage.getItem('authenticated'),
  );

  const [loggingIn, setLoggingIn] = useState(false);

  const login = ({ email, password }) => {
    setLoggingIn(true);
    if (email && password) {
      localStorage.setItem('authenticated', true);
      setIsAutheneticated(true);
      setTimeout(() => {
        setLoggingIn(false);
      }, 1000);
    }
  };
  return (
    <AuthContext.Provider value={{ isAutheneticated, loggingIn, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
