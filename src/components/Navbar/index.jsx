import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss";

export const Navbar = () => {
  const { authenticated, loginName } = useContext(AuthContext);
  const { userLogout } = useContext(AuthContext);

  /*   console.log(loginName);
   */
  /* 
  const userLogged = ({ authenticated }) => {
    if (authenticated) {
      return (
        <Link to="/login" className="login-button">
          <img src="/img/Frame.svg" />
          <p>
            Entre ou <br /> cadastre-se
          </p>
        </Link>
      );
    } else {
      const localStorageUser = localStorage.getItem("user");
      const user = JSON.parse(localStorageUser);
      const userName = user.login;
      if (userName === "") {
        const navigation = useNavigate();
        navigation("/login");
      }
      return (
        <>
          <Link to="/login" className="login-button">
            <img src="/img/Frame.svg" />
            <p>
              Logout <br />
              <span>{userName ? userName : ""}</span>
            </p>
          </Link>
        </>
      );
    }
  }; */

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
            <div className="div-button">
              {/* {userLogged({ loged: false })} */}
              <button onClick={userLogout}>Logout</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
