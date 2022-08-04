import React from "react";
import Card from "../Carrousel/Card";

export default function AllProducts({ products }) {
  if (!products) return;
  return (
    <>
      {products.map((product, index) => {
        return (
          <li key={index} className="swiper-container">
            <Card product={product} />
          </li>
        );
      })}
    </>
  );
}
