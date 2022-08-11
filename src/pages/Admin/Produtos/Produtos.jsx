import React from "react";
import HeaderDashboard from "../../../HeaderDashboard";
import AdminProductsList from "../../../components/AdminProductsList";
import MenuDashboard from "../../../components/MenuDashboard";
import ModalAddProducts from "../../../components/Modal-Add-Products/Index";
import "./Produtos.scss";
export default function ProdutosDashboard() {
  function modalToggle() {
    let modalAdd = document.getElementById("modalAddProducts");
    modalAdd.classList.toggle("open");
  }

  return (
    <div className="produtos-dashboard-container">
      <MenuDashboard />
      <main>
        <HeaderDashboard titleHead={"Produtos"} name={"Ryan"} />
        <AdminProductsList />
        <ModalAddProducts />
        <div onClick={modalToggle} className="button-add">
          +
        </div>
      </main>
    </div>
  );
}
