import { StyleSheet } from "react-native";

const buttonStyles = StyleSheet.create({
  greyOutlineButton: {
    alignItems: "center",
    borderColor: "lightgrey",
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: 120,
    backgroundColor: "#A0A0A0",
    marginBottom: 10,
    marginHorizontal: 15,
  },
  filledButton: {
    borderColor: "lightgrey",
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 10,
    // paddingHorizontal: 30,
    width: 120,
    backgroundColor: "#ff4040",
    flexDirection: "row",
    justifyContent: "center",
  },
  unfollowButton: {
    borderColor: "lightgrey",
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 30,
    width: 150,
    flexDirection: "row",
    backgroundColor: "#ff4040",
  },
  filledButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 10,
  },
  greyOutlineButtonText: {
    color: "white",
    fontSize: 17,
  },
});

export default buttonStyles;
