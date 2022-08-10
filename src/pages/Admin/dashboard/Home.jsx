import React from "react";
import MenuDashboard from "../../../components/MenuDashboard";
import HeaderDashboard from "../../../HeaderDashboard";

export default function HomeDashboard() {
  return (
    <div className="dashboard-container">
      <header>
        <MenuDashboard />
        <HeaderDashboard titleHead={"SEJA BEM VINDO"} name={"Ryan"} />
      </header>
      <main></main>
    </div>
  );
}
