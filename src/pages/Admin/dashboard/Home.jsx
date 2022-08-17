import React from "react";

import MenuDashboard from "../../../components/Dashboard/MenuDashboard";
import HeaderDashboard from "../../../components/Dashboard/HeaderDashboard";
import Cards from "../../../components/Dashboard/Cards/Cards";

import '../Dashboard.scss';

export default function HomeDashboard() {
  return (
    <div className="dashboard-container">
      <MenuDashboard />

      <main>
        <HeaderDashboard titleHead="SEJA BEM-VINDO User_name" name="User_name" />
        <Cards />
      </main>
    </div>
  );
}