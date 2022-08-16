import React from "react";

import MenuDashboard from "../../../components/Dashboard/MenuDashboard";
import HeaderDashboard from "../../../components/Dashboard/HeaderDashboard";

import './Home.scss';
import Cards from "../../../components/Dashboard/Cards/Cards";


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
