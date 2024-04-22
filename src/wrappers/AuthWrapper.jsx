import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you are using React Router
import { AuthContext } from '../context/AuthContext';

const AuthWrapper = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      // If user is not logged in, navigate to the login page
      navigate('/staticfiles/login');
    }
  }, [isLoggedIn, navigate]);

  // Render the children components only if user is logged in
  return isLoggedIn ? children : null;
};

export default AuthWrapper;

