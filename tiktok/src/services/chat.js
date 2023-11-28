import {
  query,
  orderBy,
  onSnapshot,
  where,
  doc,
  setDoc,
  addDoc,
  serverTimestamp,
  updateDoc,
  collection,
} from "firebase/firestore";
import { auth, firestore } from "../../App";

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
  const docData = collection(firestore, "chats", chatId, "messages");
  addDoc(docData, {
    creator: auth.currentUser.uid,
    message,
    creation: serverTimestamp(),
  });
  const updateData = doc(firestore, "chats", chatId);
  updateDoc(updateData, {
    lastMessage: message,
    lastUpdate: serverTimestamp(),
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
