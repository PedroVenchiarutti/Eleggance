import React, { useContext } from "react";
import LastProducts from "../../components/LastProducts/lastProducts";
import { Navbar } from "../../components/Navbar";
import Footer from "../Footer/Footer";
import Product from "../../components/Product/product";
import Carrousel from "../../components/Carrousel/Carrousel.jsx";
import { useLocation, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export default (state) => {
  //pegando Rota atual
  const location = useLocation();

  const { data } = useFetch(`api/public/products/pages/1`);

  const { id } = useParams();

  return (
    <div>
      <Navbar />
      <Product id={id} />
      <Carrousel products={data} title="Ofertas" />

      <Carrousel products={data} title="Tendências" />
      <Footer />
    </div>
  );
};
