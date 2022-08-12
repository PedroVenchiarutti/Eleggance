import React, { useState } from "react";
import Api from "../../api/api";

export default function ModalAddProduct() {
  const [valor, setValor] = useState({
    name: "",
    price: 1,
    descrition: "",
    brand: "",
    qtProduct: 1,
    urlImage: "",
  });
  function postItem() {
    Api.post(`api/protected/product`, {
      name: valor.name,
      value: valor.price,
      description: valor.descrition,
      qt: valor.qtProduct,
      brand: valor.brand,
      urlImage: valor.urlImage,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function modalToggle() {
    let modalAdd = document.getElementById("modalAddProducts");
    modalAdd.classList.toggle("open");
  }

  return (
    <div className="modalAddProducts" id="modalAddProducts">
      <div className="header-modal">
        <h1>Cadastrar Produto</h1>
        <button onClick={modalToggle}>X</button>
      </div>
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
          value={valor.price}
          onChange={(e) => setValor({ ...valor, price: e.target.value })}
        />
        <label>Descrição:</label>
        <input
          maxLength={255}
          type="text"
          value={valor.descrition}
          onChange={(e) => setValor({ ...valor, descrition: e.target.value })}
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
          value={valor.qtProduct}
          onChange={(e) =>
            setValor({
              ...valor,
              qtProduct: e.target.value,
            })
          }
        />
        <label>Foto Do Produto</label>
        <input
          type="file"
          className="inputPhoto"
          value={valor.urlImage}
          onChange={(e) => setValor({ ...valor, urlImage: e.target.value })}
        />
      </div>
      <div className="areaBtn">
        <button className="btn btnCadastrarProduto" onClick={postItem}>
          Cadastrar Produto
        </button>
        <div className="btn btnCancelarCadastrarProduto" onClick={modalToggle}>
          Cancelar
        </div>
      </div>
    </div>
  );
}
