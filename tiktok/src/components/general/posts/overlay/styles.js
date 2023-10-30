import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 60,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 80,
    flex: 1,
    zIndex: 100,
    paddingLeft: 20,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  leftContainer: {
    position: "absolute",
    top: 30,
    left: 10,
  },
  leftAction: {
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: "white",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  leftReport: {
    marginVertical: 0,
    marginHorizontal: 20,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  Volume: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  priceContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginBottom: 10,
    justifyContent: "space-evenly",
    width: 80,
  },
  priceText: {
    fontSize: 12,
    fontWeight: "bold",
  },
  priceNumber: { fontSize: 12 },
  bottomContainer: {
    flexDirection: "row",
  },
  userContainer: {
    flexDirection: "row",
  },
  displayName: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  userContact: {
    backgroundColor: "lightgreen",
    marginLeft: 5,
    paddingHorizontal: 8,
    borderRadius: 10,
    color: "white",
  },
  description: {
    color: "white",
    marginTop: 0,
    fontSize: 12,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    borderColor: "white",
    borderWidth: 2,
    marginRight: 10,
  },
  rightContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  action: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  actionButtonText: {
    color: "white",
    textAlign: "center",
    marginTop: 2,
  },
});

export default styles;
