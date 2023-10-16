import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  imageViewContainer: {
    backgroundColor: "grey",
    height: 100,
    width: 100,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  image: {
    position: "absolute",
    height: 100,
    width: 100,
    overflow: "hidden",
  },
  imnageOverlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    ...StyleSheet.absoluteFill,
  },
  fieldsContainer: {
    flex: 1,
    padding: 20,
    marginTop: 20,
  },
  fieldsItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  fieldsValueContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default styles;
