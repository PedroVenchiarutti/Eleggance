import React from "react";
import "./Carrousel.scss";
import { useFetch } from "../../hooks/useFetch";

const Card = ({ product }) => {
  /* const navigate = useNavigate(); */

  const { data } = useFetch(`public/products/1`);
  console.log("data", data);

  if (!product) return;

  return (
    <>
      <div className="container-img-promo">
        <img src={product.image} alt="tete" />
        <span className="title-product-promo">{data.name}</span>
        <br />
        <span className="full-price-promo">{product.price}</span>
        <span>à vista</span>
        <span className="price-discount">{product.discount}</span>
        <span>ou em</span>
        <p className="price-installments">{product.installments}</p>
      </div>
    </>
  );
};

export default Card;
