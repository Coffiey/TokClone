import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "row",
    flex: 1,
  },
  containerOther: {
    padding: 20,
    flexDirection: "row-reverse",
    flex: 1,
  },
  containerText: {
    marginHorizontal: 10,
    backgroundColor: "grey",
    borderRadius: 8,
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  containerTextOther: {
    marginHorizontal: 10,
    backgroundColor: "light-green",
    borderRadius: 8,
    padding: 4,
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
