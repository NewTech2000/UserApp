import React, { useState } from "react";
import { Text, TouchableOpacity, View, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import moment from "moment";
import colors from "../../../constants/colors";
import styles from "./Styles";

const dateFormat = "YYYY/MM/DD";

export default function AppDateTimePicker({
  label,
  onValueChange,
  isRequired,
  incomingDate,
  ...props
}) {
  const [date, setDate] = useState(incomingDate);
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    onValueChange(selectedDate.toISOString());
  };

  const showDatepicker = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View style={{ marginTop: 8 }}>
      {label && (
        <Text style={styles.label}>
          {label}
          {isRequired && <Text style={{ color: colors.danger }}>*</Text>}
        </Text>
      )}
      <View style={styles.container}>
        <Text>{moment(date).format(dateFormat)}</Text>
        <TouchableOpacity
          style={styles.rightIconContainer}
          onPress={() => showDatepicker()}>
          <MaterialCommunityIcons
            name="calendar-month"
            size={20}
            style={styles.icon}
            color={colors.darkGray}
          />
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={onChange}
        />
      )}
    </View>
  );
}
