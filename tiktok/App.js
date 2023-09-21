import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebaseSecret from "./secrets.json";
import { Provider } from "react-redux";
import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import Reducers from "./src/redux/reducers/index.js";
import AuthScreen from "./src/screens/auth";
import Route from "./src/navigation/main";

const app = initializeApp(firebaseSecret);
const firestore = getFirestore(app);
const auth = getAuth(app);
export { auth, firestore };

const store = configureStore({
  reducer: Reducers,
  middleware: [thunk],
});

export default function App() {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
