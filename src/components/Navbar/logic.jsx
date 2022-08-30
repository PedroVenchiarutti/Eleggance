import { useFetch } from "../../hooks/useFetch";
import { NavLink } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";
import "./logic.scss";

export default (props) => {
  const { data } = useFetch(`api/public/products/pages/1`);

  let objName = "";
  const a = data.filter(function (obj) {
    if (obj.name) {
      objName = obj.name.toUpperCase();
      if (objName.includes(props.busca)) {
        if (props.busca != "") {
          console.log(objName);
          return objName;
        }
      }
    }
  });

  return (
      <div className="search-produto">
       Produtos Sugeridos
      <div className="fon">
      <div>
        {a.map((produto, keys) => {
          return (
            <NavLink key={produto.id} to={"/detalhes/" + produto.id}>
              <div className="produto">
                <div className="produto-photo">
                  <img src={produto.url_img} />
                  <div className="container-produto">
                    <p className="produto-name"> {produto.name}</p>
                    <p className="produto-value">
                      {" "}
                      {"RS " +
                        produto.value +
                        ",00" +
                        "  ou em 10x de R$ " +
                        produto.value / 10 +
                        ",00"}
                    </p>
                  </div>
                </div>
              </div>
            </NavLink>
          );
        })}
        </div>
        </div>
      </div>
  );
};
