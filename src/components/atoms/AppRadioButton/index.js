import React from "react";
import { View } from "react-native";
import { RadioButton } from "react-native-paper";
import colors from "../../../constants/colors";
import styles from "./Styles";

export default function AppRadioButton({ value, status, onPress, ...props }) {
  return (
    <View>
      <RadioButton
        value={value}
        status={value === status ? "checked" : "unchecked"}
        onPress={onPress}
        color={colors.primary}
      />
    </View>
  );
}
