import {
  query,
  orderBy,
  onSnapshot,
  where,
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { auth } from "../../App";
import { Portal } from "react-native-paper";

export const chatListener = (listener) => {
  const dataQuery = query(
    collection(firestore, "chats"),
    where("members", "array-contains", auth.currentUser.uid),
    orderBy("lastUpdate", "desc")
  );
  onSnapshot(dataQuery, (change) => {
    listener(change);
  });
};

export const messageListener = (listener, chatId) => {
  const dataQuery = query(
    collection(firestore, "chats", chatId, "messages"),
    orderBy("creation", "desc")
  );
  onSnapshot(dataQuery, (change) => {
    listener(change);
  });
};

export const sendMessage = (chatId, message) => {
  const docData = doc(collection(firestore, "chats", chatId, "messages"));
  setDoc(docData, {
    creator: auth.currentUser.ui,
    message,
    creation: serverTimestamp(),
  });
};

export const createChat = (contactId) =>
  new Promise((resolve, reject) => {
    const docData = doc(collection(firestore, "chats"));
    setDoc(docData, {
      lastMessage: "send first message",
      lastUpdate: serverTimestamp(),
      members: [contactId, auth.currentUser.uid],
    });
  })
    .then(resolve)
    .catch(reject);
