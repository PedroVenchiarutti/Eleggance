import React from "react";
import LastProducts from "../../components/LastProducts/lastProducts";
import { Navbar } from "../../components/Navbar";
import Footer from "../Footer/Footer";
import Product from "../../components/Product/product";
import Carrousel from "../../components/Carrousel/Carrousel.jsx";
import {
    shelfProducts,
    trendProducts,
  } from "../../api/mock";
import { useParams } from "react-router-dom";

export default (props) => {
  const { id } = useParams();
  return (
    <div>
      <Navbar />
      <Product id={id} />
      <Carrousel products={shelfProducts} title="Ofertas" />

      <Carrousel products={trendProducts} title="Tendências" />
      <Footer />
    </div>
  );
};
