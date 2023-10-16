import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { storage } from "../../App";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const saveMediaToStorage = async (media, path) =>
  new Promise((resolve, reject) => {
    const fileRef = ref(storage, path);
    fetch(media)
      .then((response) => response.blob())
      .then((blob) => uploadBytes(fileRef, blob))
      .then((task) => getDownloadURL(task.ref))
      .then((downloadURL) => resolve(downloadURL))
      .catch(() => reject());
  });
