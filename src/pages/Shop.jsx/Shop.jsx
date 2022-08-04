import React from "react";
import { Navbar } from "../../components/Navbar";
import "./shop.scss";

import AllProducts from "../../components/AllProducts/index";
import { shelfProducts } from "../../api/mock";
export default function Shop({ products }) {
  return (
    <div className="shopContainer">
      <Navbar />
      <ul>
        <AllProducts products={shelfProducts} />
      </ul>
    </div>
  );
}
