import { NavLink } from "react-router-dom";
import React from "react";
import "./Search.scss";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default (props) => {
  var busca = props.busca;
  let objName = "";

  const [products, setProducts] = useState(1);
  var [i, setI] = useState(0);

  useEffect(() => {
    console.log(busca);
    axios
      .get(`https://api-elegancce.herokuapp.com/api/public/search/${busca}`)
      .then((response) => {
        const { data } = response;
        setProducts(
          data.filter(function (obj) {
            console.log(i);
            if (obj.name) {
              objName = obj.name.toLowerCase();
              if (objName.includes(props.busca)) {
                if (props.busca != "") {
                  console.log(i)
                  if (i <= 2) {
                    setI((i = i + 1));
                    return objName;
                  }
                }
              }
            }
          })
        );
      });
  }, [busca]);
  console.log(products);

  if (props.busca && i >= 1) {
    return (
      <div className="search-produto">
        <h4>Produtos Sugeridos</h4>
        <div className="container-produtos-map">
          {products.map((produto, keys) => {
            return (
              <NavLink key={produto.id} to={"/detalhes/" + produto.id}>
                <div className="produto">
                  <div className="produto-photo">
                    <img src={produto.url_img} />
                    <div className="container-produto">
                      <p className="produto-name"> {produto.name}</p>
                      <p className="produto-value">Clique para saber mais!</p>
                    </div>
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    );
  }
};
