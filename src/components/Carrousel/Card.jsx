import React from "react";
import "./Carrousel.scss";

const Card = ({ product }) => {
  /* const navigate = useNavigate(); */
  {
    /* renderizando produtos da API */
  }
  if (!product) return;
  return (
    <div className="container-card">
      <div className="container-img-promo">
        <img src={product.url_img} alt="tete" className="product-img-carrousel"/>
        <div className="container-text-product">
           {/* solução melhor em vez de <br>? */}
          <span className="title-product-promo">{product.name}</span>
          <span className="full-price-promo">{product.description}</span><br />
          <span className="cash-payment">à vista</span><br />
          <span className="price-discount">{product.discount}</span>
          <span>ou em</span>
          <p className="price-installments">{product.value}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
