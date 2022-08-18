import React from "react";

import MenuDashboard from "../../../components/Dashboard/MenuDashboard";
import HeaderDashboard from "../../../components/Dashboard/HeaderDashboard";
import Orders from "../../../components/Dashboard/Orders/Orders";

import '../Dashboard.scss';

export default function HomeDashboard() {
  return (
    <div className="dashboard-container">
      <MenuDashboard />

      <main>
        <HeaderDashboard titleHead="Pedidos" />
        <Orders />
      </main>
    </div>
  );
}