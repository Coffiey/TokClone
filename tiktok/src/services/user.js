import { auth, firestore } from "../../App";
import { saveMediaToStorage } from "./misc";
import {
  doc,
  updateDoc,
  query,
  where,
  getDocs,
  collection,
  getDoc,
} from "firebase/firestore";

export const saveUserProfileImage = (image) =>
  new Promise((resolve, reject) => {
    saveMediaToStorage(image, `profileImage/${auth.currentUser.uid}`)
      .then((res) =>
        updateDoc(doc(firestore, "user", auth.currentUser.uid), {
          photoURL: res,
        })
      )
      .then(() => resolve())
      .catch(() => reject());
  });

export const saveUserField = (field, value) =>
  new Promise((resolve, reject) => {
    const obj = {};
    obj[field] = value;
    updateDoc(doc(firestore, "user", auth.currentUser.uid), obj)
      .then(() => (item = false))
      .then(() => resolve())
      .catch(() => reject());
  });

export const queryUserByEmail = (email) =>
  new Promise((resolve, reject) => {
    if (email === "") {
      resolve([]);
    } else {
      const dataCollection = collection(firestore, "user");
      const location1 = where("email", ">=", email);
      const location2 = where("email", "<=", email + "\uf8ff");
      const dataQuery = query(dataCollection, location1, location2);
      getDocs(dataQuery)
        .then((userResult) => {
          const users = userResult.docs.map((doc) => {
            const data = doc.data();
            const id = doc.id;
            return { id, ...data };
          });
          resolve(users);
        })
        .catch(() => reject());
    }
  });

export const getUserById = (id) =>
  new Promise((resolve, reject) => {
    const userDocRef = doc(collection(firestore, "user"), id);
    getDoc(userDocRef)
      .then((res) => {
        resolve(res.exists ? res.data() : null);
      })
      .catch(() => reject());
  });

export const getIsFollowing = (userId, otherUserId) =>
  new Promise((resolve, reject) => {
    const userDocRef = doc(firestore, "post", userId, "following", otherUserId);
    getDoc(userDocRef)
      .then((res) => {
        resolve(res.exists());
      })
      .catch(() => reject());
  });
