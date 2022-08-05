import React, { useState } from "react";
import { Navbar } from "../../components/Navbar/index";
import Footer from "../Footer/Footer";
import ProductsList from "../../components/ProductsLIst/index";
import ProductsCard from "../../components/ProductsCard/index";
import { shelfProducts } from "../../api/mock";
import Carrousel from "../../components/Carrousel/Carrousel";
import { Link } from "react-router-dom";
import "./Cart.scss";

export default function Cart(props) {
  const subTotal = 1000;
  return (
    <div className="cartContainer">
      <Navbar />
      <main>
        <table>
          <thead>
            <tr>
              <th className="col-1">Produtos</th>
              <th className="col-2">Quantidade</th>
              <th className="col-3">Valor Unitário</th>
              <th className="col-4">Valor Total</th>
            </tr>
          </thead>
          <tbody>
            <ProductsList products={shelfProducts} />
          </tbody>
          <tfoot>
            <tr>
              <td>SubTotal</td>
            </tr>
            <tr>
              <td>R${subTotal}</td>
            </tr>
            {/* ainda falta tornar o valor dinamico */}
          </tfoot>
        </table>
        <ul>
          <ProductsCard products={shelfProducts}  />
        </ul>
        <div className="actions">
          <Link to="/home" className="finishBuyButton">
            Continuar Comprando
          </Link>
          <Link to="/home" className="homeButton">
            Finalizar Compra
          </Link>
        </div>
        <Carrousel
          products={shelfProducts}
          title="Baseado Nas Suas Ultimas Visitas"
        />
      </main>

      <Footer />
    </div>
  );
}
