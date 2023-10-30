import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 60,
    width: Dimensions.get("window").width,
    zIndex: 100,
    paddingLeft: 20,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  bottomContainer: {
    flexDirection: "row",
  },
  displayName: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  description: {
    color: "white",
    marginTop: 5,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderColor: "white",
    marginRight: 20,
  },
  leftContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  action: {
    padding: 10,
    marginTop: 10,
  },
  actionButtonText: {
    color: "white",
    textAlign: "center",
    marginTop: 2,
  },
});

export default styles;
