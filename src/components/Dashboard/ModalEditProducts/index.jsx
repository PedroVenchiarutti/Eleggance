import React from "react";
import { useFetch } from "../../../hooks/useFetch";

export default function ModalEditProduct() {
  const { data } = useFetch(`api/public/products/pages/1`);

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
      <div className="main-modal">
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
      </div>
      <div className="areaBtn">
        <div className="btn btnCadastrarProduto">Cadastrar Produto</div>
        <div className="btn btnCancelarCadastrarProduto">Cancelar</div>
      </div>
    </div>
  );
}
