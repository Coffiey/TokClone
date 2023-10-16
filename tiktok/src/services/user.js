import { auth, firestore } from "../../App";
import { saveMediaToStorage } from "./misc";
import { doc, updateDoc } from "firebase/firestore";

export const saveUserProfileImage = (image) =>
  new Promise((resolve, reject) => {
    saveMediaToStorage(image, `profileImage/${auth.currentUser.uid}`)
      .then((res) =>
        updateDoc(doc(firestore, "user", auth.currentUser.uid), {
          photoURL: res,
        })
      )
      .then(() => resolve())
      .catch(reject());
  });
