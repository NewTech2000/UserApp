import React, { useState, useEffect } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../../constants/colors";
import styles from "./Styles";

export default function AppDropDownPicker({
  label,
  items,
  onValueChange,
  isRequired,
  mulitiPickerStyle,
  backgroundWhite,
  selectedValue,
  enabled,
  ...props
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [itemList, setItems] = useState(items);

  useEffect(() => {
    if (selectedValue) {
      setValue(selectedValue);
      onValueChange(selectedValue);
    } else if (!value && items[0]) {
      setValue(items[0].value);
      onValueChange(items[0].value);
    }
  }, []);

  return (
    <View style={{ marginVertical: 8 }}>
      {/* --adding style for here will disable the touchable of drop down */}
      {/* --add zIndex value in parent component for IOS */}
      {label && (
        <Text style={styles.label}>
          {label}
          {isRequired && <Text style={{ color: colors.danger }}>*</Text>}
        </Text>
      )}
      <DropDownPicker
        open={open}
        listMode="SCROLLVIEW"
        dropDownContainerStyle={styles.dropDownContainerStyle}
        // containerStyle={styles.containerStyle}
        style={
          mulitiPickerStyle
            ? styles.mulitiPickerStyle
            : backgroundWhite
            ? styles.DropDownPickerStyleWhite
            : styles.DropDownPickerStyle
        }
        value={value}
        items={itemList}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        showArrowIcon={true}
        onChangeValue={(itemValue, itemIndex) => {
          setValue(itemValue);
          onValueChange(itemValue);
        }}
        disabled={enabled}
      />
    </View>
  );
}
