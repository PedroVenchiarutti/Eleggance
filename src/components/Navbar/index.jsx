import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss";

export const Navbar = () => {
  const { authenticated, loginName } = useContext(AuthContext);
  const { userLogout } = useContext(AuthContext);

  const userLogged = () => {
    if (authenticated) {
      return (
        <>
          <img src="/img/Frame.svg" />
          <div className="user-logged">
            <label>{loginName}</label>
            <button onClick={userLogout} className="login-button">
              Logout
            </button>
          </div>
        </>
      );
    } else {
      return (
        <div className="div-button">
          <Link to="/login" className="login-button">
            <img src="/img/Frame.svg" />
            <p>
              Entre ou <br /> Cadastre-se
            </p>
          </Link>
        </div>
      );
    }
  };

  return (
    <div className="navbar-container">
      <nav>
        <div className="logo">
          <h1>Elegancce</h1>
        </div>
        <div className="list-container">
          <div className="list">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Produtos</a>
              </li>
              <li>
                <a href="">Contato</a>
              </li>
            </ul>
            {userLogged()}
          </div>
        </div>
      </nav>
    </div>
  );
};
