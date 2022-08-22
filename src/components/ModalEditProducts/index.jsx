import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";

export default function ModalEditProduct(props) {
  let modalEdit = document.getElementById("modalEditProducts");
  function modalToggle() {
    modalEdit.classList.toggle("open");
  }

  const { data } = useFetch(`api/public/products/4`);
  if (data.length > 0) {
    return (
      <div className="modalEditProducts" id="modalEditProducts">
        <div className="header-modal">
          <h1>Editar Produto</h1>
          <button onClick={modalToggle}>X</button>
        </div>
        <div className="main-modal">
          <label>Nome Do Produto:</label>
          <input value={data[0].name} maxLength={45} type="text" />
          <label>Valor:</label>
          <input
            value={data[0].value.toFixed(2)}
            maxLength={45}
            type="number"
          />
          <label>Descrição</label>
          <input value={data[0].description} maxLength={255} type="text" />
          <label>Categoria</label>
          <input value={data[0].qt} maxLength={45} type="text" />
          <label>Quantidade Disponível</label>
          <input value={data[0].brand} maxLength={3} type="number" />
          <label>Foto Do Produto</label>
          <input type="file" className="inputPhoto" />
        </div>
        <div className="areaBtn">
          <div className="btn btnCadastrarProduto">Cadastrar Produto</div>
          <div className="btn btnCancelarCadastrarProduto">Cancelar</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="modalEditProducts" id="modalEditProducts">
        <div className="header-modal">
          <h1>Editar Produto</h1>
          <button onClick={modalToggle}>X</button>
        </div>
        <div className="main-modal">
          <label>Nome Do Produto:</label>
          <input value="Carregando...." maxLength={45} type="text" />
          <label>Valor:</label>
          <input value="Carregando...." maxLength={45} type="number" />
          <label>Descrição</label>
          <input value="Carregando...." maxLength={255} type="text" />
          <label>Categoria</label>
          <input value="Carregando...." maxLength={45} type="text" />
          <label>Quantidade Disponível</label>
          <input value="Carregando...." maxLength={3} type="number" />
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
}
