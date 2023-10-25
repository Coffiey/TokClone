import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: Dimensions.get("window").width,
    zIndex: 100,
    paddingLeft: 20,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  displayName: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  description: {
    color: "white",
    marginTop: 10,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderColor: "white",
  },
  leftContainer: {
    alignItems: "center",
  },
  action: {
    padding: 10,
    marginTop: 10,
  },
  actionButtonText: {
    color: "white",
    textAlign: "center",
    marginTop: 4,
  },
});

export default styles;
