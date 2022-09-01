import React from "react";
import LastProducts from "../../components/LastProducts/lastProducts";
import { Navbar } from "../../components/Navbar";
import Footer from "../Footer/Footer";
import Product from "../../components/Product/product";
import Carrousel from "../../components/Carrousel/Carrousel.jsx";
import { shelfProducts, trendProducts } from "../../api/mock";
import { useLocation, useParams } from "react-router-dom";
import "./products.scss";

export default (state) => {
  const location = useLocation();

  console.log(location);
  const { id } = useParams();
  return (
    <div>
      <Navbar />
      <Product id={id} />
      <Carrousel products={shelfProducts} title="Ofertas" />

      <Carrousel products={shelfProducts} title="Tendências" />
      <Footer />
    </div>
  );
};
