import React from "react";
import MenuDashboard from "../../../components/Dashboard/MenuDashboard";
import HeaderDashboard from "../../../components/Dashboard/HeaderDashboard";

export default function HomeDashboard() {
  return (
    <div className="dashboard-container">
      <MenuDashboard />

      <main>
        <HeaderDashboard></HeaderDashboard>
      </main>
    </div>
  );
}
