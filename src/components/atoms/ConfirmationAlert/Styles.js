import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../constants/colors";

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  modelView: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "10%",
    marginVertical:
      windowHeight > 650 ? windowHeight * 0.35 : windowHeight * 0.3,
    borderRadius: 5,
  },
  modelTextContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 10,
  },
  modelBtnContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnContainerLeft: {
    width: "50%",
    borderColor: "grey",
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderTopColor: colors.mediumGray,
    borderRightColor: colors.mediumGray,
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainerRight: {
    width: "50%",
    borderColor: "grey",
    borderTopWidth: 1,
    borderTopColor: colors.mediumGray,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
