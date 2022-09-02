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
    brand: "newHair",
    qt: 1,
    url_img: "",
  });
  const [images, setImages] = useState("");
  const [imagesUrl, setImagesUrl] = useState("");
  const [previelImg, setPrevielImg] = useState(
    "/icons/iconmonstr-photo-camera-6-72.png"
  );
  const [progress, setProgress] = useState(false);

  const postItem = async (e) => {
    await Api.post(`api/protected/product`, valor)
      .then((res) => {
        console.log(res);
        alert("Produto adicionado");
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  // Criar um hooks personalizado para utilização dessa função
  const firebaseUpload = (e) => {
    document.querySelector(".btnCadastrarProduto").disabled = true;
    e.preventDefault();
    const file = e.target[5]?.files[0];
    console.log(file);

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
      (error) => {}
    );
    uploadTask.then((res) => {
      getDownloadURL(storageRef)
        .then((url) => {
          let urlImage = url;
          setImagesUrl(urlImage);
          setValor({
            ...valor,
            url_img: urlImage,
          });
          console.log("valorzin", valor);
          postItem();
          setProgress(true);
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
  }

  // function disableButton(){
  //   let button = document.querySelector('.btnCadastrarProduto')
  //   button.disabled = true
  // }

  return (
    <div className="modalAddProducts" id="modalAddProducts">
      <div className="header-modal">
        <h1>Cadastrar Produto</h1>
        <button onClick={modalToggle}>X</button>
      </div>
      <Form onSubmit={firebaseUpload}>
        <div className="add body-modal">
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
            {/* <input
              maxLength={255}
              type="text"
              value={valor.description}
              onChange={(e) =>
                setValor({ ...valor, description: e.target.value })
              }
            /> */}
            <textarea name="description" cols="27" rows="6"
            value={valor.description}
            onChange={(e) =>
              setValor({ ...valor, description: e.target.value })}>
              </textarea>
            <label>Marca</label>
            <select name="brand" onChange={e => setValor({...valor, brand: e.target.value})}>
              <option value="newHair">New Hair</option>
              <option value="natura">Natura</option>
              <option value="boticario">O Boticário</option>
              <option value="avon">Avon</option>
            </select>
            {/* <input
              maxLength={45}
              type="text"
              value={valor.brand}
              onChange={(e) => setValor({ ...valor, brand: e.target.value })}
            /> */}
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
          </div>
        </div>
      </Form>
    </div>
  );
}
