import { StyleSheet } from "react-native";
import defaultStyles from "../../../constants/styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.lightGray,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  rightIconContainer: {
    backgroundColor: defaultStyles.colors.lightGray,
    position: "absolute",
    right: 15,
  },
  label: {
    alignSelf: "flex-start",
    fontSize: 13,
    color: defaultStyles.colors.black,
    marginBottom: 8,
  },
  textArea: {
    color: defaultStyles.colors.darkGray,
    fontSize: 16,
    //alignItems: "flex-start",
    textAlignVertical: "top",
    marginHorizontal: 8,
    width: "100%",
    height: 110,
  },
});

export default styles;
