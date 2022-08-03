import React from "react";
import LastProducts from "../../components/LastProducts/lastProducts";
import { Navbar } from "../../components/Navbar";
import Footer from "../Footer/Footer";
import Product from "../../components/Product/product";


export default props => {
   return (
<div>
    <Navbar />
    <Product />
    <LastProducts />
    <Footer />    
</div>
    )
}