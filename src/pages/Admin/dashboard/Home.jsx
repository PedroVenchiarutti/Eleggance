import React from "react";

import Header from "../../../components/NabBarFinance/navBarFinances";;
import MenuDashboard from "../../../components/MenuDashboard";
import Cards from "../../../components/Dashboard/Cards/Cards";

import '../Dashboard.scss';

export default function HomeDashboard() {
  return (
    <div className="dashboard-container">
      <MenuDashboard />

      <main>
        <Header />
        <Cards />
      </main>
    </div>
  );
}

