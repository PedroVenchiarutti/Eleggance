import React from "react";

/* import React from "react";
import { useState } from "react";
import "./AboutUs.scss";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../api/firebase";

const AboutUs = (props) => {
  const [imgURL, setImgURL] = useState("");
  const [progress, setProgress] = useState(0);

  const handleUpload = (e) => {
    e.preventDefault();
    const file = e.target[0]?.files[0];
    if (!file) return;

    const storageRef = ref(storage, `image/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgURL(downloadURL);
        });
      }
    );
  };

  return (
    <div>
      <h1>testando insercao firebase</h1>
      <form onSubmit={handleUpload}>
        <input type="file" name="arquivos" />
        <button type="submit">Enviar</button>
      </form>
      <br />
      {!imgURL && <progress value={progress} max="100" />}
      {imgURL && <img src={imgURL} alt="Imagem" />}
    </div>
  );
};

export default AboutUs;
 */
