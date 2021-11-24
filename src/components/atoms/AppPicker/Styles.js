import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    borderRadius: 3,
    width: "100%",
    paddingHorizontal: 3,
    marginVertical: 10,
  },
  label: {
    alignSelf: "flex-start",
    fontSize: 13,
    color: colors.black,
  },
});

export default styles;
