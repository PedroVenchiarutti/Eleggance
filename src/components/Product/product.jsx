import React, { useState, useEffect } from "react";
import "./product.scss";
import InfoProducts from "./infoproduct.jsx";
import { useFetch } from "../../hooks/useFetch";
import Loading from "../SpinerLoader";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import Ratings from "../Ratings";
import { Link } from "react-router-dom";
import Heart from "../Heart";

export default ({ id }) => {
  const { data } = useFetch(`api/public/products/${id}`);

  const getToken = localStorage.getItem("token");

  const [showMoreInfos, setShowMoreInfos] = useState(false);
  const toggleMoreInfos = () => setShowMoreInfos(!showMoreInfos);

  const [quantity, setQuantity] = useState(1);

  const { productData, notification, setNotification, setAlertNotification } =
    useContext(CartContext);

  const [shouldUpdateNotification, setShouldUpdateNotification] =
    useState(false);
  useEffect(() => {
    if (shouldUpdateNotification)
      setTimeout(() => {
        setNotification("");
        setShouldUpdateNotification(false);
      }, 10000);
  }, [notification]);

  const addToCart = (event, productInfos) => {
    productData(event, productInfos);
    setShouldUpdateNotification(true);
    if (getToken == null) {
      setNotification("Você precisa estar logado para adicionar ao carrinho");
      setAlertNotification(false);
    } else {
      setNotification("Produto adicionado ao carrinho");
      /* handleCart(productInfos.id); */
      setAlertNotification(true);
    }
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
        <div className="container-border-product">
          <div className="container-top-products">
            <div className="icon-home-products">
              <img src="\icons\home.png" alt="foto" />
            </div>
            <Link to="/produtos/id">Voltar</Link>
          </div>
          <Ratings productId={infos.id} label="NOS AVALIE" />
          <div className="container-products">
            <div className="photo-info-products">
              <div className="name-product">
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
                <img src={infos.image} alt="foto" width='400px'/>
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
              <div className="name-product">
                <h1>{data[0].name}</h1>
                <Heart productId={infos.id} />
              </div>
              <div className="price-product">
                <h1 className="price">
                  R$ {infos.value.toFixed(2).replace(".", ",")}
                </h1>
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
              <div className="frete-product">
                <div className="frete-itens">
                  <p>Consultar prazo e valor do frete</p>
                  <input placeholder="00000-000" type="number"></input>
                  <button> OK </button>
                </div>
                <a href="#"> Nao sei o meu cep </a>
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
              <p
                className={
                  getToken == null
                    ? "cart-notification-error"
                    : "cart-notification"
                }
              >
                {notification}
              </p>
            </div>
          </div>
          {showMoreInfos ? <InfoProducts data={data} /> : null}
        </div>
      </div>
    );
  } else
    return (
      <div className="spinner-center">
        <Loading />
      </div>
    );
};
