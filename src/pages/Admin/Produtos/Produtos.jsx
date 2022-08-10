import React from "react";
import HeaderDashboard from "../../../HeaderDashboard";
import AdminProductsList from "../../../components/AdminProductsList";
import MenuDashboard from "../../../components/MenuDashboard";
import "./Produtos.scss";
export default function ProdutosDashboard() {
  return (
    <div className="produtos-dashboard-container">
      <MenuDashboard />
      <main>
        <HeaderDashboard titleHead={"Produtos"} name={"Ryan"} />
        <AdminProductsList />
      </main>
    </div>
  );
}
