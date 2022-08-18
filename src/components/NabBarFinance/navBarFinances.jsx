import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/auth";
import { Link, useNavigate } from "react-router-dom";

import "../NabBarFinance/navBarFinances.scss"
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
    console.log(linkImg);
  };
  return (
    <div className="nav-finances">
      <div className="nav-finances-title">
      <div className="finance-tittle">
      <h2 className="h1-nav-finances">Administração</h2>
      </div>
        <input  id="search-products-finances" className="search-products-finances"></input>
        <label className="label-nav-finance" htmlFor="search-products-finances">
        <img  className="icon-search" src="/icons/icon-search.png" />
        </label>
   
        <img className="icon-bell" src="/icons/icon-bell.png" />
      </div>
      <div className="nav-finance-user">
        <span>{loginName.toUpperCase()}</span>
      </div>
    </div>
  );
};
