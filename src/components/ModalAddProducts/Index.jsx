import React, { useState } from "react";
import { useEffect } from "react";
import Api from "../../api/api";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../api/firebase";
import Form from "../../components/Form/Form";
import Loading from "../../components/SpinerLoader";
import axios from "axios";
import { usePost } from "../../hooks/useFetch";
import ModalOffer from "../ModalOffer";
export default function ModalAddProduct() {
  const [imagesUrl, setImagesUrl] = useState(null);
  const [valor, setValor] = useState({
    name: "",
    description: '',
    value: 0,
    offer: false,
    pricepromo: 0,
    brand: "",
    qt: 1,
    url_img: "",
  });
  const [images, setImages] = useState("");
  const [previelImg, setPrevielImg] = useState(
    "/icons/iconmonstr-photo-camera-6-72.png"
  );
  const [progress, setProgress] = useState(false);

  const postItem = async (e) => {
    let data = { ...valor, url_img: e };

    usePost(
      "api/protected/product",
      data,
      alert("Produto adicionado"),
      (error) => console.error(error)
    );
  };
  // Criar um hooks personalizado para utilização dessa função
  const firebaseUpload = (e) => {
    document.querySelector(".btnCadastrarProduto").disabled = true;
    e.preventDefault();
    const file = e.target[5]?.files[0];

    if (!file) return;
    const storageRef = ref(storage, `image/produtos/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        setProgress(true);
      },
      (error) => { }
    );
    uploadTask.then((res) => {
      getDownloadURL(storageRef)
        .then((url) => {
          let urlImage = url;
          if (urlImage === undefined) {
            alert("Erro ao carregar imagem");
            return;
          }
          postItem(urlImage);
          setProgress(false);
          alert("Imagem carregada com sucesso");
          location.reload();
        })
        .catch((error) => {
          return <div>Error...</div>;
        });
    });
  };

  function modalToggle() {
    let modalAdd = document.getElementById("modalAddProducts");
    modalAdd.classList.toggle("open");
    setValor({
      name: "",
      offer: false,
      pricepromo: 0,
      description: "",
      value: "",
      brand: "",
      qt: "",
      url_img: "",
    });
    setImages("");
  }

  function setCheckbox(e) {
    setValor({ ...valor, offer: e })
    let offers = document.getElementById('offer')
    if(valor.offer == true){
      console.log(valor.offer)
      offers.style.display = 'none'
    }else{
      offers.style.display = 'block'
    }
  }

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
            <label>Oferta:</label>
            <input
              type="checkbox"
              id="checkboxValue"
              value={valor.offer}
              onChange={e => setCheckbox(e.target.checked)}
            />
            <ModalOffer valor={valor} setValor={setValor}/>
            <label>Descrição:</label>
            <textarea
              name="description"
              cols="27"
              rows="6"
              value={valor.description}
              onChange={(e) =>
                setValor({ ...valor, description: e.target.value })
              }
            ></textarea>
            <label>Marca</label>
            <input
              name="brand"
              value={valor.brand}
              onChange={(e) => setValor({ ...valor, brand: e.target.value })}
            />
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

          </div>
          <div className="areaBtn">
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
            <button type="submit" className="btn btnCadastrarProduto">
              Cadastrar Produto
            </button>
            <div
              className="btn btnCancelarCadastrarProduto"
              onClick={modalToggle}
            >
              Cancelar
            </div>
            {progress ? <Loading /> : null}
          </div>
        </div>
      </Form>
    </div>
  );
}
