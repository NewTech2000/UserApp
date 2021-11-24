import React from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Dimensions,
} from "react-native";

import colors from "../../../constants/colors";
import styles from "./Styles";

const windowHeight = Dimensions.get("window").height;
export default function ConfirmationAlert({
  title,
  content,
  onPressOk,
  onPressCancel,
  okText = "YES",
  cancelText = "NO",
  visible = false,
}) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {}}>
      <SafeAreaView style={styles.modelView}>
        <View style={styles.modelTextContainer}>
          <Text
            style={{
              color: colors.black,
              fontSize: 17,
              fontWeight: "bold",
            }}>
            {title ? title : "Untitled"}
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: colors.darkGray,
              paddingTop: 5,
            }}>
            {content ? content : "No Content"}
          </Text>
        </View>
        <View style={styles.modelBtnContainer}>
          <TouchableOpacity
            style={styles.btnContainerLeft}
            onPress={onPressCancel}>
            <Text style={{ color: colors.black }}>{cancelText}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnContainerRight}
            onPress={onPressOk}>
            <Text style={{ color: colors.primary }}>{okText}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
}
