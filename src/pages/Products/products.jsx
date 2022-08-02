import React from "react";
import LastProducts from "../../components/LastProducts/lastProducts";
import { Navbar } from "../../components/Navbar";
import Footer from "../Footer/Footer";

export default props => {
   return (
<div>
    <Navbar />
    <LastProducts />
    <Footer />    
</div>
    )
}