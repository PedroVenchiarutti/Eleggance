import React from "react";
import { useFetch } from "../../hooks/useFetch";
import Api from "../../api/api";
import { useContext } from "react";
import { EditContext } from "../../contexts/modalEdit";
import { useState } from "react";
import Form from "../Form/Form";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../api/firebase";

export default function ModalEditProduct() {
  const { data } = useFetch(`api/public/products/pages/1`);

  const { editing, updateState } = useContext(EditContext)

  const [progress, setProgress] = useState(false);
  const [imagesUrl, setImagesUrl] = useState("");

  async function postItem() {
    // console.log(editing)
    await Api.put(`api/protected/product/${editing.id}`, editing)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  const firebaseUpload = (e) => {
    e.preventDefault();
    const file = e.target[5]?.files[0];
    console.log(file, 'oi');

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
      (error) => { }
    );
    uploadTask.then((res) => {
      getDownloadURL(storageRef)
        .then((url) => {
          let urlImage = url;
          setImagesUrl(urlImage);
          updateState('url_img', urlImage)
          console.log("valorzin", urlImage);
          postItem();
          setProgress(true);
        })

        .catch((error) => {
          console.log(error);
          return <div>Error...</div>;
        });
    });
  }

  function modalToggle() {
    let modalEdit = document.getElementById("modalEditProducts");
    modalEdit.classList.toggle("open");
  }

  return (
    <div className="modalEditProducts" id="modalEditProducts">
      <div className="header-modal">
        <h1>Editar Produto</h1>
        <button onClick={modalToggle}>X</button>
      </div>
      <Form onSubmit={firebaseUpload}>
        <div className="body-modal">
          <div className="main-modal">
            <label>Nome Do Produto:</label>
            <input
              maxLength={45}
              type="text"
              value={editing.name}
              onChange={ev => updateState('name', ev.target.value)}
            />
            <label>Valor:</label>
            <input
              type="number"
              value={editing.value}
              onChange={ev => updateState('value', ev.target.value)}
            />
            <label>Descrição:</label>
            <input
              maxLength={255}
              type="text"
              value={editing.description}
              onChange={ev => updateState('description', ev.target.value)}
            />
            <label>Categoria</label>
            <input
              maxLength={45}
              type="text"
              value={editing.brand}
              onChange={ev => updateState('brand', ev.target.value)}
            />
            <label>Quantidade Disponível</label>
            <input
              maxLength={3}
              type="number"
              value={editing.qt}
              onChange={ev => updateState('qt', ev.target.value)} />
            <label>Foto Do Produto</label>
            <input
              type="file"
              className="inputPhoto"
              // value={editing.url_img}
              onChange={ev => updateState('url_img', ev.target.value)}
            />
          </div>
          <div className="productVisualization">
            <p>Visualização</p>
            <div className="productAndInfo">
              <img src={editing.url_img} alt="" />
              <div className="productInfo">
                <h4>{editing.name}</h4>
                <h1>R${editing.value}</h1>
                <p>10x de R$4,99 sem juros</p>
                <p>Frete Grátis</p>
                <h5>O tratamento único Belkit melhora a força e resistência do cabelo...</h5>
              </div>
            </div>
            <div className="areaBtn">
              {/* <button className="btn btnCadastrarProduto" onClick={postItem}> */}
              <button className="btn btnCadastrarProduto" type="submit">
                {/* <button className="btn btnCadastrarProduto" onClick={firebaseUpload}>  */}
                EDITAR
              </button>
              <div className="btn btnCancelarCadastrarProduto" onClick={modalToggle}>
                CANCELAR
              </div>
            </div>
          </div>
        </div>
      </Form>
      {/* <div className="main-modal">
        <label>Nome Do Produto:</label>
        <input maxLength={45} type="text" />
        <label>Valor:</label>
        <input max={5} type="number" />
        <label>Descrição</label>
        <input maxLength={255} type="text" />
        <label>Categoria</label>
        <input maxLength={45} type="text" />
        <label>Quantidade Disponível</label>
        <input maxLength={3} type="number" />
        <label>Foto Do Produto</label>
        <input type="file" className="inputPhoto" />
      </div> */}
      {/* <div className="areaBtn">
        <div className="btn btnCadastrarProduto">Cadastrar Produto</div>
        <div className="btn btnCancelarCadastrarProduto">Cancelar</div>
      </div> */}
    </div>
  );
}
