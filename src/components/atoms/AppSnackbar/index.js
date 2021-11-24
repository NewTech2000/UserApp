import React, {useState} from 'react';
import {Snackbar} from 'react-native-paper';
import styles from './Styles';

export default function AppSnackbar({label, color, ...props}) {
  return (
    <Snackbar
      duration={3000}
      style={{backgroundColor: color, paddingHorizontal: 11}}
      {...props}>
      {label}
    </Snackbar>
  );
}
