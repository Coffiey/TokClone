import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  containerInput: {
    padding: 10,
    flexDirection: "row",
  },
  avatar: {
    height: 32,
    width: 32,
    borderRadius: 16,
  },
  input: {
    backgroundColor: "lightgrey",
    flex: 1,
    borderRadius: 4,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
});

export default styles;
