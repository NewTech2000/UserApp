import React from "react";
import { View, Text } from "react-native";
import styles from "./Styles";

function AppText({ style, ...props }) {
  return (
    <Text style={[style ? style : { padding: 0 }, { padding: 0 }]} {...props}>
      {props.children} 
    </Text>
  );
}

export default AppText;
