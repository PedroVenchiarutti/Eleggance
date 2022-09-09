import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar/index";
import Footer from "../Footer/Footer";
import ProductsCard from "../../components/ProductsCard/index";
import Carrousel from "../../components/Carrousel/Carrousel";
import "./Cart.scss";
import { useFetch } from "../../hooks/useFetch";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import { AuthContext } from "../../contexts/auth";

export default function Cart({ match }) {
  const { authenticated } = useContext(AuthContext);
  const [itemCart, setItemCart] = useState([]);

  const { data } = useFetch(`api/public/products/pages/1`);

  const navigation = useNavigate();

  if (!authenticated) navigation("/login");

  const { cart } = useContext(CartContext);

  useEffect(() => {
    const getLocalStorageUser = localStorage.getItem("user");
    const parseLocalStorageUser = JSON.parse(getLocalStorageUser);
    setItemCart(parseLocalStorageUser.productCart);
  }, [cart]);

  return (
    <div className="cartContainer">
      <Navbar />
      <main>
        <div className="info-cart-top">
          <div className="icon-home-cart">
            <Link to="/home">
              <img src="\icons\icon-home.png" alt="home" />
            </Link>
            <h1>Carrinho de Compras</h1>
          </div>
        </div>
        <ul className="cartProducts">
          <ProductsCard products={itemCart} />
        </ul>
      </main>
      <div className="actions">
        <Link to="/produtos" className="homeButton">
          CONTINUAR COMPRANDO
        </Link>
        <Link to="/finalizarCompra">
          <button type="button" className="finishBuyButton">
            FINALIZAR COMPRA
          </button>
        </Link>
      </div>
      <Carrousel products={data} title="Baseado Nas Suas Ultimas Visitas" />
      <Footer />
    </div>
  );
}
