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
            <div className="rating-product">
              <div className="rate-product">
                <input type="radio" id="star5" name="rate" value="5" />
                <label htmlFor="star5" title="text">
                  5 stars
                </label>
                <input type="radio" id="star4" name="rate" value="4" />
                <label htmlFor="star4" title="text">
                  4 stars
                </label>
                <input type="radio" id="star3" name="rate" value="3" />
                <label htmlFor="star3" title="text">
                  3 stars
                </label>
                <input type="radio" id="star2" name="rate" value="2" />
                <label htmlFor="star2" title="text">
                  2 stars
                </label>
                <input type="radio" id="star1" name="rate" value="1" />
                <label htmlFor="star1" title="text">
                  1 star
                </label>
              </div>
            </div>
            <h1 className="rating-text-product">Nos avalie</h1>
            <div className="heart-products">
              <div className="heart-product">
                <input type="radio" id="heart1" name="rate" value="1" />
                <label htmlFor="heart1" title="text">
                  1 heart
                </label>
              </div>
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
