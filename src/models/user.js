import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getPersistor} from '@rematch/persist';

import env from '../constants/env';

export default {
  // Initial state
  state: {
    array: [
      {
        key: '1',
        title: 'Mr ',
        name: 'Nipuna',
        dob: '2000',
        gender: 'male',
      },
      {
        key: '2',
        title: 'Mr ',
        name: 'Nipuna',
        dob: '2000',
        gender: 'male',
      },
      {
        key: '3',
        title: 'Mr ',
        name: 'Nipuna',
        dob: '2000',
        gender: 'male',
      },
    ],
  },

  reducers: {},
  effects: dispatch => ({}),
};
