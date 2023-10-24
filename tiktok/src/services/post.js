import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
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
