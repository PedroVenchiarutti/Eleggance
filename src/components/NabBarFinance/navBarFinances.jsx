import React, { useState, useContext} from "react";
import { AuthContext } from "../../contexts/auth";

import "../NabBarFinance/navBarFinances.scss";
import "./navBarFinances.scss";
import Logic from "../Navbar/logic";
export default (props) => {
  const { loginName } = useContext(AuthContext);
  const [busca, setBusca] = useState();

  //========TOGGLE SEARCH ========//
  function toggleSearch() {
    var search = document.getElementById("search-products-finances");
    if (search.style.display === "none") {
      search.style.display = "block";
    } else {
      search.style.display = "none";
    }
  }

  return (
    <div >
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
          ></input>
          <label
            className="label-nav-finance"
            htmlFor="search-products-finances"
          >
            <button onClick={toggleSearch} className="button-search">
              <img className="icon-search" src="/icons/search.png" />
            </button>
          </label>

          <img className="icon-bell" src="/icons/notification.png" />
        </div>
        <div className="nav-finance-user">
          <span>{loginName.toUpperCase()}</span>
        </div>
      </div>
    </div>
    <Logic busca={busca}/>
    </div>
  );
};
