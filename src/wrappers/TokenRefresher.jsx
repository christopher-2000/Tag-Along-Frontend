import { useEffect } from 'react';
import axios from 'axios';
import { baseURL } from '../Config';

const TokenRefresher = () => {
  // Function to refresh the token
  const refreshAccessToken = async () => {
      
    try {

      await axios.post(baseURL+ 'refresh-token/', null, {withCredentials:true});
      
      console.log('Token refreshed successfully');
    } catch (error) {
      console.error('Error refreshing token:', error);
    }
  };

  useEffect(() => {
    // Set up interval to refresh the token every 10 minutes
    const intervalId = setInterval(() => {
      refreshAccessToken();
    }, 14 * 60 * 1000); // 10 minutes in milliseconds

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures effect runs only once on mount

  return null; // No need to render anything
};

export default TokenRefresher;
