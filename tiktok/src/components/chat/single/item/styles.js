import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "row",
    flex: 1,
  },
  avatar: {
    height: 30,
    aspectRatio: 1,
    borderRadius: 15
  },
  containerOther: {
    padding: 20,
    flexDirection: "row-reverse",
    flex: 1,
  },
  containerText: {
    marginHorizontal: 10,
    backgroundColor: "rgb(209, 209, 209)",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  containerTextOther: {
    marginHorizontal: 10,
    backgroundColor: "#90e4c1",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  Text: {
    color: "red",
  },
  TextOther: {
    color: "red",
  },
});

export default styles;
