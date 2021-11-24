import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getPersistor} from '@rematch/persist';

import env from '../constants/env';

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log('store err', e.toString());
  }
};

export default {
  // Initial state
  state: {
    user: null,
    error: false,
    errorMessage: '',
    success: false,
    successMessage: '',
    authenticated: false,
  },

  reducers: {
    setUserDetails(state, payload) {
      return {
        ...state,
        user: payload,
      };
    },
    setAuthenticated(state, payload) {
      return {
        ...state,
        authenticated: payload,
      };
    },
  },

  effects: dispatch => ({
    login(payload) {
      return new Promise(async (resolve, reject) => {
        let {setUserDetails, setError, validateLogin} = dispatch.auth;
        let params = new URLSearchParams();
        params.append('email', payload.email);
        params.append('password', payload.password);

        let config = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        };
        return axios
          .post(`${env.API_URL}`, params)
          .then(res => {
            if (res.status === 201 && res.data) {
              setUserDetails(res.data.user);
              let access_token = res.data.token;
              storeData('access_token', `${access_token}`);
              validateLogin();
              resolve(res);
            }
          })
          .catch(err => {
            if (err && err.response) {
              console.log(JSON.stringify(err.response));
              reject(err.response.data);
              setError(err.response);
            } else {
              reject({error: true});
            }
          });
      });
    },

    signup(payload) {
      return new Promise(async (resolve, reject) => {
        let {setUserDetails, setError, validateLogin} = dispatch.auth;
        let params = new URLSearchParams();
        console.log(payload);
      });
    },
  }),
};
