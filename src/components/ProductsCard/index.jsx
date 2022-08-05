import React from "react";
import CardCart from "../ItemCart/CardCart";
import "./index.scss";

const ProductsList = ({ products }) => {
  if (!products) return;
  return (
    <>
      {products.map((product, index) => {
        return (
          <li key={index} className="cardContainer">
            <CardCart product={product} />
          </li>
        );
      })}
    </>
  );
};

export default ProductsList;
