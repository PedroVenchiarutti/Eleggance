import React, { useState } from "react";
import Card from "../Carrousel/Card";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Loading from "../../components/SpinerLoader";
import "./index.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import Product from "./Product/product";
import { PageContext } from "../../contexts/productsPage";
import { useEffect } from "react";
import axios from "axios";
import { SearchConsuming } from "../../contexts/searchConsuming";

export default function AllProducts({
  products,
  orderBy,
  minPrice,
  maxPrice,
  brands,
}) {
  const { cart, productData } = useContext(CartContext);
  const [progress, setProgress] = useState(true);
  const dataSearch = React.useContext(SearchConsuming);
  const { page } = useContext(PageContext);
  var { id } = useParams();
  const [data, setData] = useState([]);
  var i = 0;
  const [Products1, setProduct] = useState();

  // numero 1  siginifica a pagina atual e lista pagina de 10 em 10 produtos
  // GEt




  useEffect(() => {
    axios
      .get(
        `https://api-elegancce.herokuapp.com/api/public/products/pages/${page}`
      )
      .then((response) => {
        setData(response.data);
        
      });
  }, [page]);

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
            if (
              product.value >= minPrice &&
              product.value <= maxPrice &&
              brands.includes(product.brand)
            ) {
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
            } else {
              return;
            }
          })}
      </>
    );
  } else if (id != "id") {
    if (dataSearch[0].length) {
      const data1 = dataSearch[0];
      if (data1 != undefined) {
        return (
          <>
            {data1.map((product, index) => {
              i++;
              if (
                product.value >= minPrice &&
                product.value <= maxPrice &&
                brands.includes(product.brand)
              ) {
                id = id[0].toUpperCase() + id.substring(1);
                product.name =
                  product.name[0].toUpperCase() + product.name.substring(1);

                if (product.name.includes(id)) {
                  return (
                    <li key={index} className="swiper-container">
                      <Link to={`/detalhes/${product.id}`}>
                        <Product product={product} />
                      </Link>
                    </li>
                  );
                } else {
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
  }
}
