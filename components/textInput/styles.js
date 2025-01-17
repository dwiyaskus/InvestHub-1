import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  text: {
    height: 26,
    fontSize: 18,
    color: "white",
    borderBottomWidth: 1,
    borderBottomColor: "white"
  },
  marginBottomView: {
    marginBottom: 20
  },
  textInputStyle: {
    borderWidth: 1,
    borderColor: "#E2E2E2E2",
    paddingLeft: 20,
    borderRadius: 5,
    height: 45,
    fontSize: 16,
    backgroundColor: "white"
  },
  textInputNoBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2E2",
    height: 45,
    fontSize: 18,
    color: "black"
  },
  width100: {
    width: "100%"
  },
  width50: {
    width: "50%"
  },
  width30: {
    width: "30%"
  },
  row100: {
    flexDirection: "row",
    width: "100%"
  },
  borderRight1: {
    borderRightWidth: 1,
    borderColor: "#ccc"
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  colorBlackLight: { color: "#252525" },
  colorRed: { color: "#f44336" },
  textSemiBold: {
    "@media ios": {
      fontWeight: "300"
    },
    "@media android": {
      fontWeight: "400"
    }
  },
  marginBottom10: {
    marginBottom: 10
  },
  containerWarning: {
    alignSelf: "flex-end"
  },
  warningtext: {
    fontSize: 12,
    color: "#f44336",
    textAlign: "auto"
  },
  $disabelColor: "#eee",
  $blacklight2color: "rgba(90, 90, 90, 0.2)"
});

export default styles;
