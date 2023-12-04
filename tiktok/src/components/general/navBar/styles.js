import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subContainer: {
    flexDirection: "row",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  avatar: {
    height: 30,
    aspectRatio: 1,
    borderRadius: 25,
  },
});

export default styles;
