import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { connectAuthEmulator } from "firebase/auth";
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
  console.log("getCurrentUserData");
  const userDocRef = doc(collection(firestore, "user"), auth.currentUser.uid);
  onSnapshot(userDocRef, (res) => {
    if (res.exists) {
      const userData = res.data();
      return dispatch({
        type: USER_STATE_CHANGE,
        currentUser: res.data(),
        loaded: true,
      });
    }
  });
};

export const login = (email, password) => (dispatch) =>
  new Promise((resolve, reject) => {
    console.log("login");
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
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        resolve();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        reject();
      });
  });
