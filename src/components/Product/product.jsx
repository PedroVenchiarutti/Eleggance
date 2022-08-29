import React, { useState } from "react";
import "./product.scss";
import InfoProducts from "./infoproduct.jsx";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Loading from '../../components/SpinerLoader';
import { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import Ratings from '../Ratings';

export default ({ id }) => {
  const { data } = useFetch(`api/public/products/${id}`);

  const [showMoreInfos, setShowMoreInfos] = useState(false);
  const toggleMoreInfos = () => setShowMoreInfos(!showMoreInfos);
  const [quantity, setQuantity] = useState(1);

  const { productData } = useContext(CartContext);

  if (data.length) {
    const infos = {
      id: data[0].id,
      name: data[0].name,
      value: data[0].value,
      url_img: data[0].url_img,
      qt: quantity
    }

    console.log(data)
    return (
      <div className="container-components-product">
        <div className="container-top-products">
          <div className="icon-home-products">
            <img src="/icons/icon-home.png" alt="foto" />
          </div>
        </div>
        <div className="container-products">
          <div className="photo-info-products">
            <div className="name-product">
              <h1>{data[0].name}</h1>
              <div className="info-p-products">
                <p>ref: {data[0].id}</p>
                {/* <p>Estoque: <span>Em Estoque</span> </p>
            <p>Marca: <span>Marca do Produto</span> </p> */}
              </div>
            </div>
            <div className="photo-product">
              <img src={infos.url_img} alt="foto" />
              <div className="info-products-info">
                <p className="ul-products">
                  <a onClick={() => toggleMoreInfos()}>Mais Informações</a>
                </p>
              </div>
            </div>
          </div>
          <div className="products-info-price">
            <div className="available-products">
              <Ratings />
              <h1>Nos avalie</h1>
            </div>
            <div className="price-product">
              <h1> R$ {infos.value.toFixed(2).replace('.', ',')}</h1>
              <h3> 10x de {(infos.value / 10).toFixed(2).replace('.', ',')} sem JUROS </h3>
            </div>
            <div className="button-product">
              Quantidade:{" "}
              <input className="amount-product" type="number" value={quantity} onChange={ev => setQuantity(+ev.target.value)}></input>
            </div>
            <div className="button-buy-center">
              <Link to={"/finishBuy"}>
                <button className="button-buy-product" onClick={ev => productData(ev, infos)}>
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
        {showMoreInfos ? <InfoProducts /> : null}
      </div>
    )
  } else return <Loading />
};