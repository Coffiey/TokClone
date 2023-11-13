import { query, orderBy, onSnapshot, where } from "firebase/firestore";
import { auth } from "../../App";

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
