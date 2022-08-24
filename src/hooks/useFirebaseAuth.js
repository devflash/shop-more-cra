import { useState, useEffect } from 'react';
// import { auth } from '../utils/firebase';
// import nookies from 'nookies';
import axios from 'axios';
import config from '../config';

const useFireBaseAuth = () => {
  const [authUser, setAuthUser] = useState(null);
  const { API_SERVER } = config;
  const createUser = async (email, password, firstName, lastName) => {
    try {
      const payload = {
        email,
        password,
        firstName,
        lastName,
      };
      const { data } = await axios.post(`${API_SERVER}/api/signUp`, payload);
      if (data.msg === 'ACCOUNT_CREATED') {
        setAuthUser(data.authUser);
        return data;
      }
    } catch (e) {
      throw e;
    }
  };

  const signInUser = async (email, password) => {
    try {
      const payload = {
        email,
        password,
      };
      const { data } = await axios.post(`${API_SERVER}/api/signIn`, payload);
      if (data.msg === 'SIGNED_IN_SUCCESS') {
        setAuthUser(data.authUser);
      }
      return data;
    } catch (e) {
      throw e;
    }
  };

  const signOutUser = async () => {
    try {
      const { data } = await axios.get(`${API_SERVER}/api/signOut`);
      if (data.msg === 'SIGNOUT_SUCCESSFUL') {
        setAuthUser(null);
        return data;
      }
    } catch (e) {
      throw e;
    }
  };

  // const authChanged = async (user) => {
  //   debugger;
  //   if (!user) {
  //     setAuthUser(null);
  //     nookies.set(undefined, 'token', '', { path: '/' });
  //   } else {
  //     const token = await user.getIdToken();
  //     setAuthUser(user);
  //     nookies.set(undefined, 'token', token, {
  //       maxAge: 5 * 60,
  //       path: '/',
  //     });
  //   }
  // };

  // useEffect(() => {
  //   const fetchAuth = async () => {
  //     const { data } = await axios.get('http://localhost:3001/api/getAuth');
  //     if (data) {
  //       setAuthUser(data.user);
  //     }
  //   };
  //   fetchAuth();
  // }, []);

  return {
    authUser,
    createUser,
    signInUser,
    signOutUser,
  };
};

export default useFireBaseAuth;
