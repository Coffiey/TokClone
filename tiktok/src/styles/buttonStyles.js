import { StyleSheet } from "react-native";

const buttonStyles = StyleSheet.create({
  greyOutlineButton: {
    alignItems: "center",
    borderColor: "lightgrey",
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: 100,
    backgroundColor: "#A0A0A0",
    marginBottom: 10,
    marginHorizontal: 15,
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
    color: "white",
    fontSize: 17,
  },
});

export default buttonStyles;
