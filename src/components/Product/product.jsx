import React, { useState } from "react";
import "./product.scss";
import InfoProducts from "./infoproduct.jsx";
import { useFetch } from "../../hooks/useFetch";
import Loading from "../../components/SpinerLoader";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import Ratings from "../Ratings";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default ({ id }) => {
  const { data } = useFetch(`api/public/products/${id}`);

  const [showMoreInfos, setShowMoreInfos] = useState(false);
  const toggleMoreInfos = () => setShowMoreInfos(!showMoreInfos);

  const [quantity, setQuantity] = useState(1);

  const [notification, setNotification] = useState("");
  const [shouldUpdateNotification, setShouldUpdateNotification] =
    useState(false);
  useEffect(() => {
    if (shouldUpdateNotification)
      setTimeout(() => {
        setNotification("");
        setShouldUpdateNotification(false);
      }, 10000);
  }, [notification]);

  const { productData } = useContext(CartContext);

  const addToCart = (event, productInfos) => {
    productData(event, productInfos);
    setShouldUpdateNotification(true);
    setNotification("Produto adicionado ao carrinho");
  };

  if (data.length) {
    const infos = {
      id: data[0].id,
      name: data[0].name,
      value: +data[0].value,
      image: data[0].url_img,
      qt: +quantity,
    };

    function inStock(data) {
      if (data > 0) {
        return "Em estoque";
      } else {
        return "Indisponível";
      }
    }

    return (
      <div className="container-components-product">
        <div className="container-top-products">
          <div className="icon-home-products">
            <img src="\icons\home.png" alt="foto" />
          </div>
          <Link to="/produtos">Voltar</Link>
        </div>
        <div className="container-products">
          <div className="photo-info-products">
            <div className="name-product">
              <h1>{data[0].name}</h1>
              <div className="info-p-products">
                <p>ref: {data[0].id}</p>
                <p>
                  Estoque: <span>{inStock(data[0]?.qt)}</span>
                </p>
                <p>
                  Marca: <span>{data[0]?.brand}</span>
                </p>
              </div>
            </div>
            <div className="photo-product">
              <img src={infos.image} alt="foto" />
              <div className="info-products-info">
                <p className="ul-products">
                  <a onClick={() => toggleMoreInfos()}>
                    Clique para Mais Informações <span>&#8595;</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="products-info-price">
            <div className="available-products">
              <Ratings productId={infos.id} />
              <h1>Nos avalie</h1>
            </div>
            <div className="price-product">
              <h1> R$ {infos.value.toFixed(2).replace(".", ",")}</h1>
              <h3>
                10x de {(infos.value / 10).toFixed(2).replace(".", ",")} sem
                JUROS
              </h3>
            </div>
            <div className="button-product">
              Quantidade:
              <input
                className="amount-product"
                type="number"
                value={quantity}
                onChange={(ev) => setQuantity(+ev.target.value)}
              ></input>
            </div>
            <div className="button-buy-center">
              <button
                className="button-buy-product"
                onClick={(ev) => addToCart(ev, infos)}
              >
                <div className="icon-cart-product">
                  <img src="\icons\ShopCart.png" alt="foto" />
                </div>
                <h3>Comprar</h3>
              </button>
            </div>
            <p className="cart-notification">{notification}</p>

            <div className="frete-product">
              <p>Consultar prazo e valor do frete</p>
              <input placeholder="00000-000" type="number"></input>
              <button> OK </button>
              <a href="#"> Nao sei o meu cep </a>
            </div>
            <div className="heart-products">
              <div className="heart-product">
                <input type="radio" id="heart1" name="rate" value="1" />
                <label htmlFor="heart1" title="text">
                  1 heart
                </label>
              </div>
            </div>
          </div>
        </div>
        {showMoreInfos ? <InfoProducts data={data} /> : null}
      </div>
    );
  } else
    return (
      <div className="spinner-center">
        <Loading />
      </div>
    );
};
