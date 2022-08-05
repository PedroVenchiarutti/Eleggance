import React from "react";
import Footer from "../Footer/Footer";
import AllProducts from "../../components/AllProducts/index";

import { shelfProducts } from "../../api/mock";

export default function FinishBuy({ products }) {
  return (
    <div className="shopContainer">
      <Footer />
    </div>
  );
}
