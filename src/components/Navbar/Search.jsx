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
    axios
      .get(`https://api-elegancce.herokuapp.com/api/public/search/${busca}`)
      .then((response) => {
        i = 0;
        const { data } = response;
        setProducts(
          data.filter((obj) => {
            if (obj.name) {
              objName = obj.name.toLowerCase();
              busca = busca.toLowerCase();
              if (objName.includes(busca)) {
                if (busca != "") {
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
