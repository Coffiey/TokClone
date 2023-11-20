import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    // parent div does not have padding top of 50 yet its still needed as <SafeAreaView/> is used
    top: -50,
    //parent div has 20 padding left (-100 + 10)
    left: -10,
    zIndex: 101,
    width: Dimensions.get("window").width,
    height: Dimensions.get("screen").height,
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  locationContainer: {
    position: "absolute",
    top: Dimensions.get("screen").height / 2 - 230,
    left: Dimensions.get("window").width / 2 - 100,
    zIndex: 102,
    width: 200,
    // height is calculated at 7 items at a height of 30 each (30*7 = 210) this will always display 7 itesm
    height: 30,
    backgroundColor: "#90e4c1",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  inputContainer: {
    position: "absolute",
    top: Dimensions.get("screen").height / 2 - 190,
    left: Dimensions.get("window").width / 2 - 100,
    zIndex: 102,
    width: 200,
    height: 30,
    backgroundColor: "grey",
    flexDirection: "row",
    borderRadius: 25,
    alignItems: "center",
  },
  scrollContainer: {
    position: "absolute",
    top: Dimensions.get("screen").height / 2 - 150,
    left: Dimensions.get("window").width / 2 - 100,
    zIndex: 102,
    width: 200,
    // height is calculated at 7 items at a height of 30 each (30*7 = 210) this will always display 7 itesm
    height: 210,
    // backgroundColor: "red",
    overflow: "hidden",
    backgroundColor: "transparent",
  },
  countryButton: {
    backgroundColor: "transparent",
    paddingVertical: 5,
    paddingHorizontal: "auto",
    width: 200,
    height: 30,
  },
  countryButtonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  content: { height: 210 },
});

export default styles;
