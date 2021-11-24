import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    borderRadius: 3,
    paddingHorizontal: 8,
    width: "100%",
    height: 45,
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    alignSelf: "flex-start",
    fontSize: 13,
    color: colors.black,
    marginBottom: 8,
  },
  rightIconContainer: {
    borderRadius: 25,
    backgroundColor: colors.lightGray,
    position: "absolute",
    right: 5,
    padding: 10,
  },
});

export default styles;
