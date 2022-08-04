import React from "react";
import LastProducts from "../../components/LastProducts/lastProducts";
import { Navbar } from "../../components/Navbar";
import Footer from "../Footer/Footer";
import Product from "../../components/Product/product";
import Carrousel from "../../components/Carrousel/Carrousel.jsx";
import {
    images,
    shelfProducts,
    trendProducts,
    smallBanner,
  } from "../../api/mock";


export default props => {
   return (
<div>
    <Navbar />
    <Product />
    <Carrousel products={shelfProducts} title="Ofertas" />

      <Carrousel products={trendProducts} title="Tendências" />
    <Footer />    
</div>
    )
}