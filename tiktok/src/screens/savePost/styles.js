import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "white",
  },
  formContainer: {
    margin: 20,
    flexDirection: "row",
  },
  inputText: {
    paddingVertical: 10,
    marginRight: 20,
    flex: 1,
  },
  mediaPreview: {
    aspectRatio: 9 / 16,
    backgroundColor: "black",
    width: 60,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: "auto",
    marginBottom: 20,
  },
  cancelButton: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
    borderColor: "lightgrey",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    height: "20px",
    borderRadius: 4,
    marginRight: 10,
  },
  postButton: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
    // borderColor: "lightgrey",
    // borderWidth: 1,
    backgroundColor: "#ff4040",
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    height: "20px",
    borderRadius: 4,
    marginRight: 10,
  },
  cancelButtonText: {
    fontWeight: "bold",
    color: "black",
    fontSize: 16,
    marginLeft: 5,
  },
  postButtonText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 16,
    marginLeft: 5,
  },
  uploadContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
