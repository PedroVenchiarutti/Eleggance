import React from "react";
import { useState, useEffect } from "react";
import "./AboutUs.scss";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
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
          //pegando link da imagem
          return urlLINK.push(downloadURL);
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
      <div>
        <li>
          <a href={imgURL}>{imgURL}</a>
        </li>
      </div>
    </div>
  );
};

export default AboutUs;
