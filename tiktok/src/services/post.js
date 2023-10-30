import {
  collection,
  query,
  orderBy,
  onSnapshot,
  getDoc,
  setDoc,
  deleteDoc,
  doc,
  addDoc,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { firestore } from "../../App";

let commentListerInstance = null;

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
        resolve(res.exists());
      })
      .catch(() => reject());
  });

export const updateLike = (postId, uid, currentLikeState) =>
  new Promise((resolve, reject) => {
    if (currentLikeState) {
      const userDocRef = doc(
        collection(firestore, "post"),
        postId,
        "likes",
        uid
      );
      deleteDoc(userDocRef).catch(() => reject());
    } else {
      const userDocRef = doc(firestore, "post", postId, "likes", uid);
      setDoc(userDocRef, {}).catch(() => reject());
    }
  });

export const addComment = (postId, creator, comment) => {
  const userDocRef = collection(firestore, "post", postId, "comments");
  addDoc(userDocRef, { creator, comment, creation: serverTimestamp() }).catch(
    () => reject()
  );
};

export const commentListner = (postId, setCommentList) => {
  const dataQuery = query(
    collection(firestore, "post", postId, "comments"),
    orderBy("creation", "desc")
  );
  commentListerInstance = onSnapshot(dataQuery, (dataArray) => {
    if (dataArray.docChanges().length == 0) return;
    const comment = dataArray.docs.map((doc) => {
      const data = doc.data();
      const id = doc.id;
      return { id, ...data };
    });
    setCommentList(comment);
  });
};

export const clearCommentListner = () => {
  console.log("clear called");
  if (commentListerInstance) {
    commentListerInstance();
    commentListerInstance = null;
  }
};

export const getPostsByUserId = (uid = auth.currentUser.uid) =>
  new Promise((resolve, reject) => {
    const dataQuery = query(
      collection(firestore, "post"),
      where("creator", "==", uid),
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
