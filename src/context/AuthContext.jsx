import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);


  const baseURL = 'http://localhost:8000/api/'
  
  useEffect(() => {

    const access_token = Cookies.get('access_token')

    const config = {
        headers:{
            'Authorization':`Bearer ${access_token}`
        },
        withCredentials: true
      }

    const checkLoginStatus = async () => {
      try {
        const response = await axios.get(baseURL + 'getuserprofile/', config);
        if (response.data) {
          setIsLoggedIn(true);
          setUser(response.data);
          console.log(response.data)
        }
      } catch (error) {
        console.error('Error checking login status:', error);
      }
    };

    checkLoginStatus();
  }, []);

  
  const setprofile = async ()=>{

    const access_token = Cookies.get('access_token')
    const config = {
        headers:{
            'Authorization':`Bearer ${access_token}`
        },
        withCredentials: true
      }
    try {
      const response = await axios.get(baseURL + 'getuserprofile/', config);
      if (response.data) {
        setIsLoggedIn(true);
        setUser(response.data);
      }
    } catch (error) {
      console.error('Error checking login status:', error);
    }
  }
  
  const login = async (email, password) => {
    try {
      const response = await axios.post(baseURL + 'loginuser/', { email, password }, { withCredentials: true });
      if (response.data.success) {
        setprofile();
      }
      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = async () => {
    try {
      await axios.post(baseURL + 'logoutuser/', null, { withCredentials: true });
      setIsLoggedIn(false);
      setUser(null);
      Cookies.remove('access_token');
      Cookies.remove('refresh_token');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const updateUserProfile = async ({ profilePicture, firstName, lastName, username, phoneNumber }) => {

    try {
      const formData = new FormData();
      formData.append('profile_picture', profilePicture);
      formData.append('first_name', firstName);
      formData.append('last_name', lastName);
      formData.append('username', username);
      formData.append('phone_number', phoneNumber);
  
      // Make a POST request to update user profile data
      const response = await axios.post(baseURL + 'updateprofile/', formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      if (response.data.success) {
        console.log('Profile updated successfully');
        console.log(response.data.updatedUser)
        setUser( response.data.updatedUser)
        return response.data.updatedUser;
      } else {
        console.error('Failed to update profile:', response.data.message);
        return null;
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      return null;
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout, updateUserProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
