import { useFetch } from "../../hooks/useFetch";
import { NavLink } from "react-router-dom";
import React from "react";
import "./Search.scss";

export default (props) => {
  const { data } = useFetch(`api/public/products/pages/1`);

  let objName = "";
  let i = 0;
  const a = data.filter(function (obj) {
    if (obj.name) {
      objName = obj.name.toLowerCase();
      if (objName.includes(props.busca)) {
        if (props.busca != "") {
          if (i <= 2) {
            i = i + 1;
            return objName;
          }
        }
      }
    }
  });

  if (props.busca && i >= 1) {
    return (
      <div className="search-produto">
        <h4>Produtos Sugeridos</h4>
        <div className="container-produtos-map">
          {a.map((produto, keys) => {
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
