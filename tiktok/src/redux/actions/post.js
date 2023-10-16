import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import {
  collection,
  addDoc,
  serverTimestamp,
  where,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";
import { auth, firestore } from "../../../App";
import { CURRENT_USER_POSTS_UPDATE, USER_STATE_CHANGE } from "../constants";
import { saveMediaToStorage } from "../../services/misc";
import uuid from "uuid-random";

export const createPost = (description, video, thumbnail) => (dispatch) =>
  new Promise((resolve, reject) => {
    const StoragePostId = uuid();
    const allSavedPromises = Promise.all([
      saveMediaToStorage(
        video,
        `post/${auth.currentUser.uid}/${StoragePostId}/video`
      ),
      saveMediaToStorage(
        thumbnail,
        `post/${auth.currentUser.uid}/${StoragePostId}/thumbnail`
      ),
    ]);
    allSavedPromises
      .then((media) => {
        addDoc(collection(firestore, "post"), {
          creator: auth.currentUser.uid,
          media,
          description,
          likesCount: 0,
          commentsCount: 0,
          creation: serverTimestamp(),
        })
          .then(() => resolve())
          .catch(() => reject());
      })
      .catch(() => reject());
  });

export const getPostsByUser =
  (uid = auth.currentUser.uid) =>
  (dispatch) =>
    new Promise((resolve, reject) => {
      const dataQuery = query(
        collection(firestore, "post"),
        where("creator", "==", uid),
        orderBy("creation", "desc")
      );
      getDocs(dataQuery).then((dataArray) => {
        const data = dataArray.docs.map((doc) => {
          const data = doc.data();
          const id = doc.id;
          return { id, ...data };
        });
        dispatch({ type: CURRENT_USER_POSTS_UPDATE, currentUserPosts: data });
      });
    });
