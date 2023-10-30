import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "lightgrey",
    backgroundColor: "white",
  },
  bannerContainer: {
    height: 160,
    width: Dimensions.get("window").width,
    backgroundColor: "blue",
    marginBottom: -20,
    flexDirection: "row",
  },
  backgroundBLank: {
    width: Dimensions.get("window").width / 9,
    margin: 0,
    height: 160,
  },
  infoContainer: {
    alignItems: "start",
    backgroundColor: "white",
    width: Dimensions.get("window").width,
    borderRadius: 20,
  },
  infoSubContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  nameContainer: {
    paddingHorizontal: 15,
    justifyContent: "center",
  },
  counterContianer: {
    flexDirection: "row",
    paddingHorizontal: 15,
    width: 150,
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
  dispalyName: {
    fontWeight: "bold",
    fontSize: 20,
    paddingHorizontal: 15,
  },
  emailText: {
    color: "grey",
  },
  counterItemContainer: {
    flex: 1,
    alignItems: "center",
  },
  counterNumberText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  counterLabelText: {
    fontSize: 12,
    color: "grey",
  },
});

export default styles;
