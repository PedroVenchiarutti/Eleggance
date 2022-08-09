import React, { useState } from "react";
import "./product.scss";
import InfoProducts from "./infoproduct.jsx";
import { Link } from "react-router-dom";

export default (props) => {
  const [showElement, setShowElement] = useState(false);
  const showOrHide = () => setShowElement(true);

  return (
<<<<<<< HEAD
    <div className="container">
      <div className="container-top">
        <div className="icon-home">
=======
    <div className="container-components-product">
      <div className="container-top-products">
        <div className="icon-home-products">
>>>>>>> 9615ba468789ac3813a424f2ca848287df4c6950
          <img src="\icons\icon-home.png" alt="foto" />
        </div>
        <h1>Caminho do produto</h1>
      </div>
      <div className="container-products">
        <div className="photo-info-products">
          <div className="name-product">
            <h1>Shampoo do bom</h1>
            <div className="info-p-products">
              <p>ref: 001</p>
              <p>estoque: em estoque</p>
              <p>marca: sehloiro</p>
            </div>
          </div>
<<<<<<< HEAD
          <div className="photo--product">
            <img src="\img\produtos\blindagem-nh-650x650_1.png" alt="foto" />
            <div className="info-products-info">
              <ul className="ul-products">
                <li>
                  <a href="">Informacoes do produto</a>
                </li>
                <li>
                  <a href="">Comentarios</a>
                </li>
              </ul>
=======
          <div className="photo-product">
            <img src="\img\produtos\blindagem-nh-650x650_1.png" alt="foto" />
            <div className="info-products-info">
              <p className="ul-products">
                <a onClick={showOrHide}>Informacoes do produto</a>
              </p>
>>>>>>> 9615ba468789ac3813a424f2ca848287df4c6950
            </div>
          </div>
        </div>
        <div className="products-info-price">
<<<<<<< HEAD
          <div className="available">
            <div className="icon-star">
=======
          <div className="available-products">
            <div className="icon-star-product">
>>>>>>> 9615ba468789ac3813a424f2ca848287df4c6950
              <img src="\icons\icon-star1.png" alt="foto" />
              <img src="\icons\icon-star1.png" alt="foto" />
              <img src="\icons\icon-star1.png" alt="foto" />
              <img src="\icons\icon-star1.png" alt="foto" />
            </div>
            <h1>Nos avalie</h1>
<<<<<<< HEAD
            <div className="icon-heart">
=======
            <div className="icon-heart-products">
>>>>>>> 9615ba468789ac3813a424f2ca848287df4c6950
              <img src="\icons\icon-heart.png" alt="foto" />
            </div>
          </div>
          <div className="price-product">
            <h1> R$ 2.000,00</h1>
            <h3> 10x de 200,00 sem JUROS </h3>
          </div>
<<<<<<< HEAD
          <div className="button">
=======
          <div className="button-product">
>>>>>>> 9615ba468789ac3813a424f2ca848287df4c6950
            Quantidade:{" "}
            <input
              placeholder="1"
              className="amount-product"
              type="number"
            ></input>
          </div>
          <Link to={"/finishBuy"}>
<<<<<<< HEAD
            <button className="button-buy">
              <div className="icon-bag">
=======
            <button className="button-buy-product">
              <div className="icon-bag-product">
>>>>>>> 9615ba468789ac3813a424f2ca848287df4c6950
                <img src="\icons\icon-bag.png" alt="foto" />
              </div>
              <h3>Comprar</h3>
            </button>
          </Link>

<<<<<<< HEAD
          <div className="frete">
            <p>Consultar prazo e valor do frete</p>
            <input
              placeholder="00000-000"
              type="number"
              className="fretezin"
            ></input>
=======
          <div className="frete-product">
            <p>Consultar prazo e valor do frete</p>
            <input placeholder="00000-000" type="number"></input>
>>>>>>> 9615ba468789ac3813a424f2ca848287df4c6950
            <button> OK </button>
            <a href="#"> Nao sei o meu cep </a>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      <InfoProducts />
=======
      {showElement ? <InfoProducts /> : null}
>>>>>>> 9615ba468789ac3813a424f2ca848287df4c6950
    </div>
  );
};
