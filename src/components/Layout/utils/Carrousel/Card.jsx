import React from "react";
import "./Carrousel.scss";

const Card = (props) => {
  return (
    <>
      <div className="container-img-promo">
        <img src={props.image} alt="tete" />
        <span className="title-product-promo">{props.name}</span>
        <br />
        <span className="full-price-promo">{props.price}</span>
        <span>A vista</span>
        <span>{props.discount}</span>
        <span>Ou</span>
        <p>{props.parcele}</p>
      </div>
    </>
  );
};

export default Card;
