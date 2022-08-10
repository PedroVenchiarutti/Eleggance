import React from "react";
import Card from "../Carrousel/Card";
import { Link, useNavigate } from "react-router-dom";

export default function AllProducts({ products }) {
  if (!products) return;
  return (
    <>
      {/* renderzando produto statico do mock */}
      {products.map((product, index) => {
        return (
          <li key={index} className="swiper-container">
            <Link to="/produtos">
              <Card product={product} />
            </Link>
          </li>
        );
      })}
    </>
  );
}
