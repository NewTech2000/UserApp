import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

import colors from "../../../constants/colors";
import styles from "./Styles";

export default function AppPicker({
  label,
  items,
  onValueChange,
  isRequired,
  selectedVal,
  ...props
}) {
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    if (!selectedValue && items[0]) {
      setSelectedValue(items[0].value);
      onValueChange(items[0].value);
    }
  }, []);

  return (
    <View style={{ marginVertical: 8 }}>
      {label && (
        <Text style={styles.label}>
          {label}
          {isRequired && <Text style={{ color: colors.danger }}>*</Text>}
        </Text>
      )}
      <View style={styles.container}>
        <Picker
          selectedValue={selectedVal ? selectedVal.toString() : selectedValue}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedValue(itemValue);
            onValueChange(itemValue);
          }}>
          {items.length > 0 &&
            items.map((item, i) => (
              <Picker.Item
                key={i}
                label={item.label}
                value={item.value}
                color={colors.darkGray}
              />
            ))}
        </Picker>
      </View>
    </View>
  );
}
