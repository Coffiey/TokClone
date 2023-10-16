import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: "center",
    paddingHorizontal: 50,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
  },
  counterContianer: {
    flexDirection: "row",
    paddingBottom: 20,
  },
  emailText: {
    padding: 20,
    color: "grey",
  },
  counterItemContainer: {
    flex: 1,
    alignItems: "center",
  },
  counterNumberText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  counterLabelText: {
    fontSize: 16,
    color: "grey",
  },
});

export default styles;
