import React from "react";

import "./navbar.scss";

export const Navbar = () => {
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
            <a href="/login" className="login-button">
              <img src="/img/Frame.svg" />
              <p>
                Entre ou <br /> cadastre-se
              </p>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};
