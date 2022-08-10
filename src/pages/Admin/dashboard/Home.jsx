import React from "react";
import MenuDashboard from "../../../components/MenuDashboard";
import HeaderDashboard from "../../../HeaderDashboard";

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