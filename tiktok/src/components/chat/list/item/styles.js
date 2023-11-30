import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  image: {
    height: 40,
    aspectRatio: 1,
    borderRadius: 30,
    marginRight: 16,
    backgroundColor: "grey",
  },
  userNameText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  lastMessage: {
    fontSize: 13,
    color: "grey",
  },
});

export default styles;
