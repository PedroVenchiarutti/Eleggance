import React, { useState, useEffect } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../src/api/firebase";

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
