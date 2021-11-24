import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import defaultStyles from "../../../constants/styles";
import styles from "./Styles";

export default function AppTextInput({
  label,
  multiline,
  isRequired,
  secureTextEntry,
  policy,
  showPolicy,
  ...props
}) {
  const [isHidden, setIsHidden] = useState(secureTextEntry);

  return (
    <View style={{ marginTop: 8 }}>
      {label && (
        <Text style={styles.label}>
          {label}
          {isRequired && <Text style={{ color: "red" }}>* </Text>}
          {policy && (
            <MaterialCommunityIcons
              name="help-circle"
              color={defaultStyles.colors.primary}
              onPress={() => showPolicy(true)}
            />
          )}
        </Text>
      )}
      <View style={styles.container}>
        <TextInput
          style={multiline ? styles.textArea : defaultStyles.text}
          placeholderTextColor={defaultStyles.colors.mediumGray}
          {...props}
          autoCapitalize={"none"}
          secureTextEntry={isHidden}
          multiline={multiline}
          //textAlignVertical={multiline ? "top" : "auto"}
        />
        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setIsHidden(!isHidden)}
            style={styles.rightIconContainer}>
            <MaterialCommunityIcons
              name={isHidden ? "eye-off" : "eye"}
              size={20}
              color={
                isHidden
                  ? defaultStyles.colors.mediumGray
                  : defaultStyles.colors.darkGray
              }
              opacity={0.3}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
