import React, { useState } from "react";
import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
    title: {
        fontSize: 14,
        marginBottom: 10,
      },
      modalContainerStyle: {
        backgroundColor: "white",
        padding: 20,
        paddingVertical: 40,
        height: 400,
      },
      modalTitle: {
        textAlign: "center",
      },
    
      modalPermissionMessage: {
        textAlign: "center",
        marginTop: 30,
        color: colors.lightGray,
      },
    
      modalButtons: {
        width: "80%",
        alignSelf: "center",
        marginTop: 30,
      },
    
      buttonContainer: {
        marginTop: "20%",
        width: "100%",
      },
});

export default styles;
