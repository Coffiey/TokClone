import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getStorage, connectStorageEmulator } from "firebase/storage";
import firebaseSecret from "./secrets.json";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import Reducers from "./src/redux/reducers/index.js";
import Route from "./src/navigation/main";
import {
  QueryClientProvider,
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
} from "react-query";
import { GestureHandlerRootView } from "react-native-gesture-handler";

//Production
const app = initializeApp(firebaseSecret);
// const firestore = getFirestore(app);
// const storage = getStorage(app);
// const auth = getAuth(app);

//Dev
// const app = initializeApp();
const firestore = getFirestore(app);
// connectFirestoreEmulator(firestore, "127.0.0.1", 8080);
const storage = getStorage(app);
// connectStorageEmulator(storage, "127.0.0.1", 9199);
const auth = getAuth(app);
// connectAuthEmulator(auth, "http://10.0.2.2:9099");

export { auth, firestore, storage, app };

const store = configureStore({
  reducer: Reducers,
  middleware: [thunk],
});

const queryClient = new QueryClient({
  defaultOptions: { queries: { refreshInterval: false, staleTime: Infinity } },
});

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Route />
        </QueryClientProvider>
      </Provider>
    </GestureHandlerRootView>
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
