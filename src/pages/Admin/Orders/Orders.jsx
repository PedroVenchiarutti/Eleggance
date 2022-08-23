import React from "react";

import MenuDashboard from "../../../components/MenuDashboard";
import Header from "../../../components/NabBarFinance/navBarFinances";
import Orders from "../../../components/Dashboard/Orders/Orders";

import '../Dashboard.scss';

export default function HomeDashboard() {
  return (
    <div className="dashboard-container">
      <MenuDashboard />

      <main>
        <Header titleHead="Pedidos" />
        <Orders />
      </main>
    </div>
  );
}