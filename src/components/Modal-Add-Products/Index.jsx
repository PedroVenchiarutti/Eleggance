import React from "react";

export default function ModalAddProduct() {
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
        <input type="text" />
        <label>Valor:</label>
        <input type="text" />
        <label>Descrição</label>
        <input type="text" />
        <label>Categoria</label>
        <input type="text" />
        <label>Quantidade Disponível</label>
        <input type="text" />
        <label>Foto Do Produto</label>
        <input type="file" className="inputPhoto" />
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
