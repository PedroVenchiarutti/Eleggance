import React, { useState, useEffect } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../src/api/firebase";

const useFirebase = (e) => {
  const [progress, setProgress] = useState(false);
  const [image, setImage] = useState("");

  // useEffect(() => {
  //   e.preventDefault();
    const file = e.target[0]?.files[0];
    if (!file) return;
    const storageRef = ref(storage, `${dataUrl}/${file}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

// aaaa
    const metadata = {
      contentType: 'image/jpeg'
    };

    uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  },
  (error) => {
    console.log('n foi', error)
  },
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
    });
  }
);






  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       console.log("snapshot", snapshot);
  //       const progress =
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //       setProgress(progress);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  //   uploadTask.then((res) => {
  //     getDownloadURL(storageRef)
  //       .then((url) => {
  //         let urlImage = url;
  //         setImage(urlImage);
  //         setProgress(true);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         return <div>Error...</div>;
  //       });
  //   });
  // }, []);
};

export default useFirebase;
