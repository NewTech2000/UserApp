import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.lightGray,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    height: 50,
  },
  text: {
    color: defaultStyles.colors.darkGray,
    width: "100%",
    fontSize: 16,
    textAlignVertical: "top",
    justifyContent: "center",
    marginHorizontal: 8,
  },
  icon: {
    position: "absolute",
    right: 15,
    justifyContent: "center",
  },
});

export default styles;
