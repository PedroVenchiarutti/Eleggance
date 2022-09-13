import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";

import "../NabBarFinance/navBarFinances.scss";
import "./navBarFinances.scss";
import Search from "../Navbar/Search";
export default (props) => {
  const { adminName, userLogout } = useContext(AuthContext);
  const [busca, setBusca] = useState();

  return (
    <div className="nav">
      <div className="container-nav-finances">
        <div className="nav-finances">
          <div className="nav-finances-title">
            <div className="finance-tittle">
              <h2 className="h1-nav-finances">{props.name}</h2>
            </div>
            <input
              id="search-products-finances"
              className="search-products-finances"
              onChange={(ev) => setBusca(ev.target.value.toUpperCase())}
            />
            <label
              className="label-nav-finance"
              htmlFor="search-products-finances"
            >
              <button className="button-search">
                <img className="icon-search" src="/icons/search.png" />
              </button>
            </label>

            <img className="icon-bell" src="/icons/notification.png" />
          </div>
          <div className="nav-finance-user">
            <span>{adminName.toUpperCase()}</span>
            <span className="btn-logout" onClick={() => userLogout("/admin")}>Sair</span>
          </div>
        </div>
      </div>
      <div className="search-container">
        <Search busca={busca} />
      </div>
    </div>
  );
};
