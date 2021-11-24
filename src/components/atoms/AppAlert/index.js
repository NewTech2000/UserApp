import React from "react";
import { Snackbar } from "react-native-paper";
import styles from "./Styles";

export default function AppAlert({ alertType, message, ...props }) {
  return (
    <Snackbar duration={3000} style={styles[alertType]} {...props}>
      {message}
    </Snackbar>
  );
}
