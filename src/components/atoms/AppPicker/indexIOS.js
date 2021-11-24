import React, { useState } from "react";
import { ActionSheetIOS, Text, View, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import defaultStyles from "../../../constants/styles";
import styles from "./StylesIOS";

const AppPickerIOS = ({ items, name, onValueChange, ...props }) => {
  const labels = ["Cancel"];
  const values = [""];
  items.forEach(element => {
    labels.push(element.label);
    values.push(element.value);
  });
  const [result, setResult] = useState(labels[1]);
  //   const { setFieldValue } = useFormikContext();

  const onPress = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: labels,
        // destructiveButtonIndex: 2,
        cancelButtonIndex: 0,
        userInterfaceStyle: props.theme ? props.theme : "light",
      },
      buttonIndex => {
        if (buttonIndex > 0) {
          setResult(labels[buttonIndex]);
          if (name) {
            setFieldValue(name, values[buttonIndex]);
          }
          if (onValueChange) {
            console.log(`value ${values[buttonIndex]}`);
            onValueChange(values[buttonIndex].toString());
          }
        }
      },
    );

  return (
    <TouchableOpacity onPress={onPress} title="Show">
      <View style={styles.container}>
        <Text style={styles.text}>{result}</Text>
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name={"chevron-down"}
            size={20}
            color={defaultStyles.colors.darkGray}
            opacity={1}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AppPickerIOS;
