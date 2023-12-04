import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getMessaging, getToken } from "firebase/messaging/sw";
import firebaseSecret from "./secrets.json";
import { cloudMessagingKey } from "./publicKey.json";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import Reducers from "./src/redux/reducers/index.js";
import Route from "./src/navigation/main";
import { QueryClientProvider, QueryClient } from "react-query";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const app = initializeApp(firebaseSecret);
const firestore = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
// const messaging = getMessaging(app);
// getToken(messaging, { vapidKey: cloudMessagingKey });

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
