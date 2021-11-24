import React from "react";
import { Button } from "react-native-paper";
import styles from "./Styles";

export default function AppButton({ title, ...props }) {
  return (
    <Button
      contentStyle={styles.content}
      style={styles.button}
      uppercase={false}
      {...props}>
      {title}
    </Button>
  );
}
