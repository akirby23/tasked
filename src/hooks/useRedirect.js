import axios from 'axios';
import { useEffect } from 'react';
import { useHistory } from 'react-router';

// Adapted from CI's Moments walkthrough project
export const useRedirect = (userAuthStatus) => {
  const history = useHistory();

  useEffect(() => {
    const handleMount = async () => {
      try {
        await axios.post('/dj-rest-auth/token/refresh/');
        // Code will run if user is logged in
        if (userAuthStatus === 'loggedIn') {
          history.push('/');
        }
      } catch (err) {
        // Code will run if user is logged out
        if (userAuthStatus === 'loggedOut') {
          history.push('/log-in/');
        }
      }
    };

    handleMount();
  }, [history, userAuthStatus]);
};