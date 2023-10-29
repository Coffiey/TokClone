import { StyleSheet } from "react-native";

const buttonStyles = StyleSheet.create({
  greyOutlineButton: {
    borderColor: "lightgrey",
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  filledButton: {
    borderColor: "lightgrey",
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#ff4040",
  },
  filledButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  greyOutlineButtonText: {
    color: "black",
    fontWeight: "bold",
  },
});

export default buttonStyles;
