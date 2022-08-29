import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/auth";
import { useFetch } from "../../hooks/useFetch";
import { NavLink } from "react-router-dom";

import "../NabBarFinance/navBarFinances.scss";
import "./navBarFinances.scss";
export default (navBarFinances) => {
  const { loginName } = useContext(AuthContext);
  const { linkImg } = useContext(AuthContext);
  const renderImage = () => {
    if (authenticated) {
      const getLocalStorage = localStorage.getItem("personal");
      const img = JSON.parse(getLocalStorage);
      if (img === null) {
        return;
      } else {
        const linkImg = img[0].id.imgURL;
        if (linkImg) {
          return (
            <button>
              <img src={linkImg} className="imgUser" />
            </button>
          );
        } else {
          return (
            <button>
              <img src="/img/Frame.svg" />;
            </button>
          );
        }
      }
    }
  };
  const { data } = useFetch(`api/public/products/pages/1`);

  const [busca, setBusca] = useState();
  let objName = "";
  const a = data.filter(function (obj) {
    if (obj.name) {
      objName = obj.name;
      if (objName.startsWith(busca)) {
        if (busca != "") {
          return objName;
        }
      }
    }
  });
  return (
    <div>
      <div className="nav-finances">
        <div className="nav-finances-title">
          <div className="finance-tittle">
            <h2 className="h1-nav-finances">Administração</h2>
          </div>
          <input
            id="search-products-finances"
            className="search-products-finances"
            onChange={(ev) => setBusca(ev.target.value)}
          ></input>
          <label
            className="label-nav-finance"
            htmlFor="search-products-finances"
          >
            <img className="icon-search" src="/icons/icon-search.png" />
          </label>

          <img className="icon-bell" src="/icons/icon-bell.png" />
        </div>
        <div className="nav-finance-user">
          <span>{loginName.toUpperCase()}</span>
        </div>
      </div>
      <div className="search-produto">
        {a.map((produto, keys) => {
          return (
            <NavLink key={produto.id} to={"/detalhes"}>
              <div className="produto">
                <div className="produto-photo">
                  <img src={produto.url_img} />
                </div>
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
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};
