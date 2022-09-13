import React, { useState, useEffect } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../src/api/firebase";

const useFirebase = (e) => {
  const [progress, setProgress] = useState(false);
  const [image, setImage] = useState("");

  useEffect(() => {
    e.preventDefault();
    const file = e.target[0]?.files[0];
    if (!file) return;
    const storageRef = ref(storage, `${dataUrl}/${file}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        console.log("snapshot", snapshot);
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      }
    );
    uploadTask.then((res) => {
      getDownloadURL(storageRef)
        .then((url) => {
          let urlImage = url;
          setImage(urlImage);
          setProgress(true);
        })
        .catch((error) => {
          console.log(error);
          return <div>Error...</div>;
        });
    });
  }, []);
};

// export default useFirebase;

export default function useStorageFb(storageRef, file, callbackSuccess) {
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.then((res) => {
    getDownloadURL(storageRef)
      .then((url) => {
        callbackSuccess(url);
      })
      .catch((error) => {
        console.log(error);
        return <div>Error...</div>;
      });
  });
}
