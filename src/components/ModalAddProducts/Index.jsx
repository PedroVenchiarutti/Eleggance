import React, { useState } from "react";
import { useEffect } from "react";
import Api from "../../api/api";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../api/firebase";
import Form from "../../components/Form/Form";
import Loading from "../../components/SpinerLoader";

export default function ModalAddProduct() {
  const [valor, setValor] = useState({
    name: "",
    description: "",
    value: 0,
    brand: "",
    qt: 1,
    url_img: "",
  });
  const [images, setImages] = useState("");
  const [previelImg, setPrevielImg] = useState(
    "/icons/iconmonstr-photo-camera-6-72.png"
  );
  const [imagesUrl, setImagesUrl] = useState();
  const [progress, setProgress] = useState(false);

  async function postItem(url) {
    await Api.post(`api/protected/product`, {
      ...valor,
      url_img: url,
    })
      .then((res) => {
        alert("deu tudo certo finalmente", url);
        setProgress(false);
        modalToggle();
        window.location.reload();
      })
      .catch(function (error) {
        console.error(error);
        alert("Algo deu errrado");
      });
  }

  // Criar um hooks personalizado para utilização dessa função
  const firebaseUpload = async (e) => {
    e.preventDefault();
    const file = e.target[5]?.files[0];
    console.log("file", file);

    if (!file) return;
    const storageRef = ref(storage, `image/produtos/${file.name}`);
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
        console.log("error", error);
      }
    );
    uploadTask.then((res) => {
      getDownloadURL(storageRef)
        .then((url) => {
          if (!url) return;
          let urlImg = url;
          setImagesUrl(urlImg);
          console.log("url", urlImg);
          setProgress(true);
          postItem(urlImg);
        })
        .catch((error) => {
          console.log(error);
          return <div>Error...</div>;
        });
    });
  };

  function modalToggle() {
    let modalAdd = document.getElementById("modalAddProducts");
    modalAdd.classList.toggle("open");
    setValor({
      name: "",
      description: "",
      value: "",
      brand: "",
      qt: "",
      url_img: "",
    });
    setImages("");
    console.log("url", valor);
  }

  return (
    <div className="modalAddProducts" id="modalAddProducts">
      <div className="header-modal">
        <h1>Cadastrar Produto</h1>
        <button onClick={modalToggle}>X</button>
      </div>
      <Form onSubmit={firebaseUpload}>
        <div className="main-modal">
          <label>Nome Do Produto:</label>
          <input
            maxLength={45}
            type="text"
            value={valor.name}
            onChange={(e) => setValor({ ...valor, name: e.target.value })}
          />
          <label>Valor:</label>
          <input
            type="number"
            value={valor.value}
            onChange={(e) => setValor({ ...valor, value: e.target.value })}
          />
          <label>Descrição:</label>
          <input
            maxLength={255}
            type="text"
            value={valor.description}
            onChange={(e) =>
              setValor({ ...valor, description: e.target.value })
            }
          />
          <label>Categoria</label>
          <input
            maxLength={45}
            type="text"
            value={valor.brand}
            onChange={(e) => setValor({ ...valor, brand: e.target.value })}
          />
          <label>Quantidade Disponível</label>
          <input
            maxLength={3}
            type="number"
            value={valor.qt}
            onChange={(e) =>
              setValor({
                ...valor,
                qt: e.target.value,
              })
            }
          />
          <label>Foto Do Produto</label>
          <label className="label-productImage" htmlFor="inputPhoto">
            <img
              src={images ? URL.createObjectURL(images) : previelImg}
              className={previelImg ? "inputPhoto" : "imgPerfil"}
              alt="blabla"
            />
          </label>
          <input
            type="file"
            className="inputPhoto"
            id="inputPhoto"
            name="image"
            onChange={(e) => setImages(e.target.files[0])}
          />
        </div>
        <div className="areaBtn">
          <button type="submit" className="btn btnCadastrarProduto">
            Cadastrar Produto
          </button>
          <div
            className="btn btnCancelarCadastrarProduto"
            onClick={modalToggle}
          >
            Cancelar
          </div>
          <div>{progress === false ? <div> </div> : <Loading />}</div>
        </div>
      </Form>
    </div>
  );
}
