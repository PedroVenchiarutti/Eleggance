import React, { useState } from "react";
import "./Carrousel.scss";
import SpinerLoader from "../SpinerLoader";

const Card = ({ product }) => {
  const [loading, setLoading] = useState(true);

  const valorConvertido = product.value;
  const valorFormatado = valorConvertido.toString().replace(".", ",");
  const priceParceled = (product.value / 12).toFixed(2);
  const priceParceledFormatado = priceParceled.toString().replace(".", ",");

  if (!product) return;

  return (
    <div className="container-card">
      <div className="container-img-promo">
        {loading && <SpinerLoader />}
        <div className="img-container">
          <img
            src={product.url_img}
            alt="imagem do produto"
            onLoad={() => setLoading(false)}
          />
        </div>

        <div className="container-text-product">
          <div className="title-product">
            <p className="title-product-promo">{product.name}</p>
          </div>

          <span className="cash-payment">à vista</span>
          <p className="price-installments">
            R<span>$</span>
            {priceParceledFormatado}
          </p>
          <span>
            ou em
            <span
              style={{
                fontSize: "25px",
                fontWeight: "bold",
                color: "#e1ab38",
                marginLeft: "5px",
              }}
            >
              12X
            </span>
            <br />
            de R$
          </span>
          <p className="price-installments-parceled">
            R<span>$</span>
            {priceParceledFormatado}
          </p>
        </div>
        <button className="button-buy-card">
          <img src="/icons/ShopCart.png" alt="iconCarrinho" />
          Comprar
        </button>
      </div>
    </div>
  );
};

export default Card;
