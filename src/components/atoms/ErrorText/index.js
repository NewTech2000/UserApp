import React from "react";
import { Text } from "react-native";
import styles from "./Styles";

export default function ErrorText({ children }) {
  return <Text style={styles.error}>{children}</Text>;
}
