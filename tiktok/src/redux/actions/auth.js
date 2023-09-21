import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { auth, firestore } from "../../../App";
import { USER_STATE_CHANGE } from "../constants";

export const userAuthStateListner = () => (dispatch) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      dispatch(getCurrentUserData());
    } else {
      dispatch({ type: USER_STATE_CHANGE, currentUser: null, loaded: true });
    }
  });
};

export const getCurrentUserData = () => (dispatch) => {
  const userDocRef = doc(collection(firestore, "user"), auth.currentUser.uid);
  console.log(userDocRef);
  onSnapshot(userDocRef, (res) => {
    console.log(res);
    if (res.exists) {
      const userData = res.data();
      console.log("exists", res, userData);
      return dispatch({
        type: USER_STATE_CHANGE,
        currentUser: res.data(),
        loaded: true,
      });
    } else {
      console.log("NOPE");
    }
  });
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
