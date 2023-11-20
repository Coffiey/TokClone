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
  scrollContainer: {
    position: "absolute",
    top: Dimensions.get("screen").height / 2 - 200,
    left: Dimensions.get("window").width / 2 - 100,
    zIndex: 101,
    width: 200,
    height: 300,
    backgroundColor: "red",
    overflow: "hidden",
  },
  countryButton: {
    paddingVertical: 5,
    paddingHorizontal: "auto",
    width: 200,
  },
  countryButtonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});

export default styles;
