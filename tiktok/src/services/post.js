import {
  collection,
  query,
  orderBy,
  onSnapshot,
  getDoc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { firestore } from "../../App";

export const getFeed = () =>
  new Promise((resolve, reject) => {
    const dataQuery = query(
      collection(firestore, "post"),
      orderBy("creation", "desc")
    );
    onSnapshot(dataQuery, (dataArray) => {
      const data = dataArray.docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        return { id, ...data };
      });
      resolve(data);
    });
  });

export const getLikeById = (postId, uid) =>
  new Promise((resolve, reject) => {
    const userDocRef = doc(firestore, "post", postId, "likes", uid);
    getDoc(userDocRef)
      .then((res) => {
        resolve(res.exists);
      })
      .catch(() => reject());
  });

export const updateLike = (postId, uid, currentLikeState) =>
  new Promise((resolve, reject) => {
    if (currentLikeState) {
      const userDocRef = doc(firestore, "post", postId, "likes", uid);
      deleteDoc(userDocRef).catch(() => reject());
    } else {
      const userDocRef = doc(firestore, "post", postId, "likes", uid);
      setDoc(userDocRef, {}).catch(() => reject());
    }
  });
