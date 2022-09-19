import React, { useState, useEffect, useContext } from "react";
import Card from "../Carrousel/Card";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/SpinerLoader";
import "./index.scss";
import { CartContext } from "../../contexts/cart";
import Product from "./Product/product";
import { PageContext } from "../../contexts/productsPage";
import axios from "axios";
import { filtersContext } from "../../contexts/filters";

export default function AllProducts({ products, orderBy }) {
  const [progress, setProgress] = useState(true);
  const { page } = useContext(PageContext);
  var { id } = useParams();
  const [data, setData] = useState([]);
  const [productData, setProductData] = useState([]);
  var i = 0;
  const { brandsSelected, minPrice, maxPrice } = useContext(filtersContext);

  useEffect(() => {
    axios
      .get(
        `https://api-elegancce.herokuapp.com/api/public/filter/?to=${parseInt(
          maxPrice
        )}&from=${parseInt(minPrice)}`
      )
      .then((response) => {
        setProductData(response.data);
        if (brandsSelected.length > 0) {
          let resposta = response.data.filter((product) => {
            if (brandsSelected.includes(product.brand)) {
              return [product];
            }
          });
          setData(resposta);
        } else {
          response.data.forEach((product) => {
            if (product.value >= minPrice && product.value <= maxPrice) {
              setData(response.data.slice(page * 10 - 10, page * 10));
            }
          });
        }
      });
  }, [page, brandsSelected, minPrice, maxPrice]);

  if (data == "") {
    return (
      <div className="containerSpiner">
        <div>{progress === false ? <div> </div> : <Loading />}</div>
      </div>
    );
  }
  if (!products) return;

  function compareFunction(a, b) {
    if (orderBy == "asc") {
      return a.value - b.value;
    } else if (orderBy == "desc") {
      return b.value - a.value;
    } else {
      return;
    }
  }

  if (id === "id") {
    return (
      <>
        {data
          .sort((a, b) => compareFunction(a, b))
          .map((product, index) => {
            i++;
            {
              id = id[0].toUpperCase() + id.substring(1);
              product.name =
                product.name[0].toUpperCase() + product.name.substring(1);
              if (id === "Id") {
                return (
                  <li key={index} className="swiper-container">
                    <Link to={`/detalhes/${product.id}`}>
                      <Product product={product} />
                    </Link>
                  </li>
                );
              }
            }
          })}
      </>
    );
  } else {
    return (
      <>
        {productData
          .sort((a, b) => compareFunction(a, b))
          .map((product, index) => {
            i++;
            {
              id = id[0].toUpperCase() + id.substring(1);
              product.name =
                product.name[0].toUpperCase() + product.name.substring(1);
              if (product.name.includes(id)) {
                i = 1;
                return (
                  <li key={index} className="swiper-container">
                    <Link to={`/detalhes/${product.id}`}>
                      <Product product={product} />
                    </Link>
                  </li>
                );
              } else if (i == productData.length) {
                i = 1;
                return (
                  <li key={index} className="swiper-container">
                    <p className="p-all-products-null-products">
                      Não foi encontrado nenhum produto com esse nome
                    </p>
                  </li>
                );
              }
            }
          })}
      </>
    );
  }
}
