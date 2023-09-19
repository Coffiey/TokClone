import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { initializeApp } from "firebase/app";
import firebaseSecret from "./secrets.json";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux-thunk";
import thunk from "redux-thunk";
import rootReducer from "./src/redux/reducers/index.js";

const app = initializeApp(firebaseSecret);

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! refresh test</Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
