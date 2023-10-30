import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "lightgrey",
    backgroundColor: "green",
  },
  bannerContainer: {
    height: (Dimensions.get("window").height - 80) / 4,
  },
  infoContainer: {
    alignItems: "start",
    backgroundColor: "red",
    width: Dimensions.get("window").width,
  },
  counterContianer: {
    flexDirection: "row",
    paddingBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderColor: "white",
    borderWidth: 4,
    borderRadius: 40,
    marginLeft: 15,
    marginTop: -55,
  },
  IconAvatar: {
    borderColor: "white",
    borderWidth: 4,
    borderRadius: 40,
    marginLeft: 25,
    marginTop: -55,
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
