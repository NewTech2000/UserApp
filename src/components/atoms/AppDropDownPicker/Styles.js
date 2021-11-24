import React, { useState } from "react";
import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";


const styles = StyleSheet.create({
    label: {
      marginBottom: 8,
      alignSelf: "flex-start",
      fontSize: 13,
      color: colors.black,
    },
    dropDownContainerStyle: {
      backgroundColor: "#FFFFFF",
      borderColor: "#F6F6F6",
      borderWidth: 1,
    },
    containerStyle: {
      borderWidth: 0,
    },
    mulitiPickerStyle: {
      borderRadius: 5,
      backgroundColor: "#F6F6F6",
      borderWidth: 0,
    },
    DropDownPickerStyle: {
      borderRadius: 5,
      backgroundColor: "#F6F6F6",
      borderWidth: 0,
      width: Dimensions.get("window").width - 60,
    },
    DropDownPickerStyleWhite: {
      borderRadius: 5,
      backgroundColor: "white",
      borderWidth: 0,
      ...Platform.select({
        ios: {
          width: Dimensions.get("window").width - 60,
        },
      }),
    },
  });
  

export default styles;
