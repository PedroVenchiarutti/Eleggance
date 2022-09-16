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

export default function AllProducts({
  products,
  orderBy,
  minPrice,
  maxPrice,
  brands,
}) {
  const { cart, productData } = useContext(CartContext);
  const [progress, setProgress] = useState(true);
  const { page } = useContext(PageContext);
  var { id } = useParams();
  const [data, setData] = useState([]);
  const { brandsSelected } = useContext(filtersContext);

  useEffect(() => {
    axios
      .get(`https://api-elegancce.herokuapp.com/api/public/products/`)
      .then((response) => {
        if (brandsSelected.length > 0) {
          response.data.forEach((product) => {
            if (brandsSelected.includes(product.brand)) {
              if (brandsSelected.length > 1) {
                setData((data) => [...data, product]);
              } else {
                setData([product]);
              }
            }
          });
        } else {
          setData(response.data.slice(page * 10 - 10, page * 10));
        }
      });
  }, [page, brandsSelected]);

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

  console.log("data:", data);

  return (
    <>
      {data
        .sort((a, b) => compareFunction(a, b))
        .map((product, index) => {
          if (product.value >= minPrice && product.value <= maxPrice) {
            if (id === "id") {
              return (
                <li key={index} className="swiper-container">
                  <Link to={`/detalhes/${product.id}`}>
                    <Product product={product} />
                  </Link>
                </li>
              );
            } else {
              id = id[0].toUpperCase() + id.substring(1);
              product.name =
                product.name[0].toUpperCase() + product.name.substring(1);
              if (product.name.includes(id)) {
                return (
                  <li key={index} className="swiper-container">
                    <Link to={`/detalhes/${product.id}`}>
                      <Card key={product.id} product={product} />
                    </Link>
                  </li>
                );
              } else {
                if (i == 0) {
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
            }
          } else {
            return;
          }
        })}
    </>
  );
}
