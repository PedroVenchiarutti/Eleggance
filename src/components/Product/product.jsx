import React from "react";
import "./product.scss";
import InfoProducts from "./infoproduct.jsx";
import { Link } from "react-router-dom";

export default (props) => {
  return (
    <div className="container">
      <div className="container-top">
        <div className="icon-home">
          <img src="\icons\icon-home.png" alt="foto" />
        </div>
        <h1>Caminho do produto</h1>
      </div>
      <div className="container-products">
        <div className="photo-info-products">
          <div className="name-product">
            <h1>Shampoo do bom</h1>
            <div className="info-p">
              <p>ref: 001</p>
              <p>estoque: em estoque</p>
              <p>marca: sehloiro</p>
            </div>
          </div>
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
            </div>
          </div>
        </div>
        <div className="products-info-price">
          <div className="available">
            <div className="icon-star">
              <img src="\icons\icon-star1.png" alt="foto" />
              <img src="\icons\icon-star1.png" alt="foto" />
              <img src="\icons\icon-star1.png" alt="foto" />
              <img src="\icons\icon-star1.png" alt="foto" />
            </div>
            <h1>Nos avalie</h1>
            <div className="icon-heart">
              <img src="\icons\icon-heart.png" alt="foto" />
            </div>
          </div>
          <div className="price">
            <h1> R$ 2.000,00</h1>
            <h3> 10x de 200,00 sem JUROS </h3>
          </div>
          <div className="button">
            Quantidade:{" "}
            <input
              placeholder="1"
              className="amount-product"
              type="number"
            ></input>
          </div>
          <Link to={"/finishBuy"}>
            <button className="button-buy">
              <div className="icon-bag">
                <img src="\icons\icon-bag.png" alt="foto" />
              </div>
              <h3>Comprar</h3>
            </button>
          </Link>

          <div className="frete">
            <p>Consultar prazo e valor do frete</p>
            <input
              placeholder="00000-000"
              type="number"
              className="fretezin"
            ></input>
            <button> OK </button>
            <a href="#"> Nao sei o meu cep </a>
          </div>
        </div>
      </div>
      <InfoProducts />
    </div>
  );
};
