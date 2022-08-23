import React from "react";

import MenuDashboard from "../../../components/MenuDashboard";
import Header from "../../../components/NabBarFinance/navBarFinances";
import Coupons from "../../../components/Dashboard/Coupons/Coupons";

import '../Dashboard.scss';

export default function HomeDashboard() {
  return (
    <div className="dashboard-container">
      <MenuDashboard />

      <main>
        <Header />
        <Coupons />
      </main>
    </div>
  );
}