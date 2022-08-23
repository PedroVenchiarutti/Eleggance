import React, { useState } from "react";
import Card from "../Carrousel/Card";
import { Link, useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Loading from "../../components/SpinerLoader";
import "./index.scss";

export default function AllProducts({ products }) {
  const [progress, setProgress] = useState(true);

  // numero 1  siginifica a pagina atual e lista pagina de 10 em 10 produtos
  // GEt
  const { data } = useFetch(`api/public/products/pages/1`);
  if (data == "") {
    return (
      <div className="containerSpiner">
        <div>{progress === false ? <div> </div> : <Loading />}</div>
      </div>
    );
  }
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
