import React from "react";
import Card from "../Carrousel/Card";
import { Link, useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export default function AllProducts({ products }) {
  const { data } = useFetch(`api/public/products/pages/1`);
  console.log("data", data);

  if (!products) return;
  return (
    <>
      {/* renderzando produto statico do mock */}
      {data.map((product, index) => {
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
