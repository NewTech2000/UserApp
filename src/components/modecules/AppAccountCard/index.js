import React from "react";
import { TouchableOpacity, View } from "react-native";
import AppText from "../../atoms/AppText/index";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./Styles";
import colors from "../../../constants/colors";
import AppLine from "../../atoms/AppLine";

export default function AppAccountCard({ icon, name, onPress, ...props }) {
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
      <View style={styles.container}>
        <Icon name={icon} size={30} color={colors.black} style={{ left: 2 }} />

        <View style={styles.textContainer}>
          <AppText  style={{ fontSize: 16, fontWeight: "700" }}>{name}</AppText>
        </View>
      </View>
      <AppLine />
    </TouchableOpacity>
  );
}
