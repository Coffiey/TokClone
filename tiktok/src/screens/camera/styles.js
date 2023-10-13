import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  camera: {
    flex: 1,
    backgroundColor: "black",
  },
  bottomBar: {
    display: "flex",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    marginBottom: 30,
    left: "50%",
    transform: [{ translateX: -40 }],
  },
  recordButtonContainer: {
    flex: 1,
    marginHorizontal: 30,
    justifyContent: "center",
  },
  recordButton: {
    borderWidth: 8,
    borderColor: "#ff404085",
    backgroundColor: "#ff4040",
    borderRadius: 100,
    height: 80,
    width: 80,
    alignSelf: "center",
  },
  galleryButtonContainer: {
    position: "absolute",
    left: 120,
    top: 10,
  },
  galleryButton: {
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    borderStyle: "solid",
    width: 60,
    height: 60,
  },
  galleryButtonImage: {
    width: 60,
    height: 60,
  },
  sideBarContainer: {
    top: 60,
    right: 0,
    marginHorizontal: 20,
    position: "absolute",
  },
  iconText: {
    color: "white",
    fontSize: 12,
    marginTop: 5,
  },
  sideBarButton: {
    alignItems: "center",
    marginBottom: 25,
  },
});

export default styles;
