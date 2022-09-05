import React from "react";
import "./Carrousel.scss";

const Card = ({ product }) => {
  /* const navigate = useNavigate(); */
  {
    /* renderizando produtos da API */
  }
  console.log("--->", product);

  const valorConvertido = product.value;
  const valorFormatado = valorConvertido.toString().replace(".", ",");
  const priceParceled = (product.value / 12).toFixed(2);
  const priceParceledFormatado = priceParceled.toString().replace(".", ",");

  if (!product) return;
  return (
    <div className="container-card">
      <div className="container-img-promo">
        <img
          src={product.url_img}
          alt="tete"
          className="product-img-carrousel"
        />
        <div className="container-text-product">
          <span className="title-product-promo">{product.name}</span>{" "}
          {/*Se colocar br aqui quebra o /produtos, esse card é usado no carrousel e no /produtos */}
          {/* <span className="full-price-promo">{product.description}</span><br /> */}
          <span className="cash-payment">à vista</span>
          {/*  <span className="price-discount">{product.discount}</span> */}
          <p className="price-installments">R${valorFormatado}</p>
          {/* ======= */}
          {/* solução melhor em vez de <br>? */}
          {/* fazer uma forma de */}
          {/*  <span className="price-discount">
            R$
            {product.discount
              ? (product.discount * 1).toFixed(2)
              : (product.value * 1).toFixed(2)}
          </span> */}
          <span>ou em 12x</span>
          <p className="price-installments-parceled">
            R${priceParceledFormatado}
          </p>
        </div>
        <button className="button-buy-card">Comprar!</button>
      </div>
    </div>
  );
};

export default Card;
