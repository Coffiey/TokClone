import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { collection, doc, getDoc } from "firebase/firestore";
import { auth, firestore } from "../../../App";
import { USER_STATE_CHANGE } from "../constants";
import { getPostsByUser } from "./post";

export const userAuthStateListner = () => (dispatch) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(getCurrentUserData());
      dispatch(getPostsByUser(auth.currentUser.uid));
    } else {
      dispatch({ type: USER_STATE_CHANGE, currentUser: null, loaded: true });
    }
  });
};

export const getCurrentUserData = () => (dispatch) => {
  const userDocRef = doc(collection(firestore, "user"), auth.currentUser.uid);
  getDoc(userDocRef)
    .then((res) => res.data())
    .then((userData) =>
      dispatch({
        type: USER_STATE_CHANGE,
        currentUser: userData,
        loaded: true,
      })
    )
    .catch((err) => console.error(err));
};

export const login = (email, password) => (dispatch) =>
  new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        resolve();
      })
      .catch(() => {
        reject();
      });
  });

export const register = (email, password) => (dispatch) =>
  new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        resolve();
      })
      .catch(() => {
        reject();
      });
  });
