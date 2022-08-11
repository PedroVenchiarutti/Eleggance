import React, { useState } from "react";

export default function ModalAddProduct() {
  const [valor, setValor] = useState({
    name: "testeeet",
    price: 0,
    descrition: "",
    brand: "",
    qtProduct: "",
    urlImage: "",
  });
  function modalToggle() {
    let modalAdd = document.getElementById("modalAddProducts");
    modalAdd.classList.toggle("open");
  }

  console.log(valor);
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
          onchange={(e) => setValor({ ...valor, price: e.target.value })}
        />
        <label>Descrição:</label>
        <input
          maxLength={255}
          type="text"
          value={valor.descrition}
          onchange={(e) => setValor({ ...valor, description: e.target.value })}
        />
        <label>Categoria</label>
        <input
          maxLength={45}
          type="text"
          value={valor.brand}
          onchange={(e) => setValor({ ...valor, brand: e.target.value })}
        />
        <label>Quantidade Disponível</label>
        <input
          maxLength={3}
          type="number"
          value={valor.qtProduct}
          onchange={(e) =>
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
          onchange={(e) => setValor({ ...valor, urlImage: e.target.value })}
        />
      </div>
      <div className="areaBtn">
        <div className="btn btnCadastrarProduto">Cadastrar Produto</div>
        <div className="btn btnCancelarCadastrarProduto" onClick={modalToggle}>
          Cancelar
        </div>
      </div>
    </div>
  );
}
