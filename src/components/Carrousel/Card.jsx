import React from "react";
import "./Carrousel.scss";

const Card = ({ product }) => {
  /* const navigate = useNavigate(); */

  if (!product) return;
  return (
    <>
      {/* renderzando produto statico do mock */}
      <div className="container-img-promo">
        <img src={product.image} alt="tete" />
        <span className="title-product-promo">{product.name}</span>
        <br />
        <span className="full-price-promo">{product.description}</span>
        <span>à vista</span>
        <span className="price-discount">{product.discount}</span>
        <span>ou em</span>
        <p className="price-installments">{product.value}</p>
      </div>
    </>
  );
};

export default Card;
