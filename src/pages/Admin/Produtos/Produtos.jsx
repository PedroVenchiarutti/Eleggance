import React, { useEffect } from "react";
import HeaderDashboard from "../../../components/HeaderDashboard";

import AdminProductsList from "../../../components/AdminProductsList";
import MenuDashboard from "../../../components/MenuDashboard";
import ModalAddProducts from "../../../components/ModalAddProducts/Index";
import ModalEditProducts from "../../../components/ModalEditProducts";
import "./Produtos.scss";
import { EditContext } from "../../../contexts/modalEdit";
import { useContext } from "react";

export default function ProdutosDashboard() {
  function modalToggle() {
    let modalAdd = document.getElementById("modalAddProducts");
    modalAdd.classList.toggle("open");
  }

  const {editing} = useContext(EditContext)

  return (
    <div className="produtos-dashboard-container">
      <MenuDashboard />
      <main>
          <HeaderDashboard titleHead={"Produtos"} name={"Ryan"} />
          <AdminProductsList />
          <ModalAddProducts />
          <ModalEditProducts editing={editing}/>

        <div onClick={modalToggle} className="button-add">
          +
        </div>
      </main>
    </div>
  );
}

