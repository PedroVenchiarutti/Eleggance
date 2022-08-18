import React from "react";

import MenuDashboard from "../../../components/Dashboard/MenuDashboard";
import HeaderDashboard from "../../../components/Dashboard/HeaderDashboard";
import Coupons from "../../../components/Dashboard/Coupons/Coupons";

import '../Dashboard.scss';

export default function HomeDashboard() {
  return (
    <div className="dashboard-container">
      <MenuDashboard />

      <main>
        <HeaderDashboard titleHead="Cupons" />
        <Coupons />
      </main>
    </div>
  );
}