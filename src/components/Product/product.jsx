import React, { useState } from "react";
import "./product.scss";
import InfoProducts from "./infoproduct.jsx";
import { Link } from "react-router-dom";

export default (props) => {
  const [showElement, setShowElement] = useState(false);
  const showOrHide = () => setShowElement(true);

  return (
    <div className="container-components-product">
      <div className="container-top-products">
        <div className="icon-home-products">
          <img src="\icons\icon-home.png" alt="foto" />
        </div>
        <h1>Caminho do produto</h1>
      </div>
      <div className="container-products">
        <div className="photo-info-products">
          <div className="name-product">
            <h1>Nome do Produto</h1>
            <div className="info-p-products">
              <p>ref: 001 </p>
              {/* <p>Estoque: <span>Em Estoque</span> </p>
              <p>Marca: <span>Marca do Produto</span> </p> */}
            </div>
          </div>
          <div className="photo-product">
            <img src="\img\produtos\blindagem-nh-650x650_1.png" alt="foto" />
            <div className="info-products-info">
              <p className="ul-products">
                <a onClick={showOrHide}>Mais Informações</a>
              </p>
            </div>
          </div>
        </div>
        <div className="products-info-price">
          <div className="available-products">
            {/* <div className="icon-star-product">
              <img src="\icons\icon-star1.png" alt="foto" />
              <img src="\icons\icon-star1.png" alt="foto" />
              <img src="\icons\icon-star1.png" alt="foto" />
              <img src="\icons\icon-star1.png" alt="foto" />
            </div> */}
            <div className="icon-star-products">
              <img className="star-one" src="\icons\Star1.png" alt="foto" />
              <img className="star-two" src="\icons\Star1.png" alt="foto" />
              <img className="star-three" src="\icons\Star1.png" alt="foto" />
              <img className="star-four" src="\icons\Star1.png" alt="foto" />
              <img className="star-five" src="\icons\Star1.png" alt="foto" />
            </div>
              <h1 className="rating">Nos avalie</h1>
            <div className="icon-heart-products">
              <img src="\icons\icon-heart.png" alt="foto" />
            </div>
          </div>
          <div className="price-product">
            <h1> R$ 2.000,00</h1>
            <h3> 10x de 200,00 sem JUROS </h3>
          </div>
          <div className="button-product">
            Quantidade:{" "}
            <input
              placeholder="1"
              className="amount-product"
              type="number"
            ></input>
          </div>
          <div className="button-buy-center">
            <Link to={"/finishBuy"}>
              <button className="button-buy-product">
                <div className="icon-cart-product">
                  <img src="\icons\ShopCart.png" alt="foto" />
                </div>
                <h3>Comprar</h3>
              </button>
            </Link>
          </div>

          <div className="frete-product">
            <p>Consultar prazo e valor do frete</p>
            <input placeholder="00000-000" type="number"></input>
            <button> OK </button>
            <a href="#"> Nao sei o meu cep </a>
          </div>
        </div>
      </div>
      {showElement ? <InfoProducts /> : null}
    </div>
  );
};
