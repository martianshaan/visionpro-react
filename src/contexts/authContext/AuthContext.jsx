/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const navigate = useNavigate();
  const [isAutheneticated, setIsAutheneticated] = useState(
    localStorage.getItem('authenticated'),
  );

  const [logginIn, setLoggingIn] = useState(false);

  const Login = ({ email, password }) => {
    setLoggingIn(true);
    if (email && password) {
      localStorage.setItem('authenticated', true);
      setIsAutheneticated(true);
      setTimeout(() => {
        setLoggingIn(false);
        navigate('/');
      }, 1000);
    }
  };
  return (
    <AuthContext.Provider value={{ isAutheneticated, logginIn, Login }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => useContext(AuthContext);

export default AuthContextProvider;
