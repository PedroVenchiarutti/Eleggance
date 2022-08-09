import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss";

export const Navbar = () => {
  const { authenticated, loginName } = useContext(AuthContext);
  const { userLogout } = useContext(AuthContext);
  const [active, setMode] = useState(false);

  const ToggleMode = () => {
    setMode(!active);
  };

  const userLogged = () => {
    const height = window.screen.height;
    const width = window.screen.width;

    if (height >= 600 && width >= 600 && authenticated) {
      return (
        <div className="navbar-user-logged">
          <div className="navbar-user-logged-name">
            <button>
              <img src="/img/Frame.svg" />
            </button>
            <h4>
              <span>{loginName.toUpperCase()}</span>
            </h4>
          </div>
          <img src="/icons/shoppingCart.svg" className="svgCart" />
        </div>
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
          <div className="navbar-user-logged-mobile">
            <div className="navbar-user-logged-name-mobile">
              <button>
                <img src="/img/Frame.svg" className="svgUser-mobile" />
              </button>
              <button>
                <img src="/icons/shoppingCart.svg" className="svgCart-mobile" />
              </button>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="navbar-container">
      <nav>
        <div className="logoInSearch">
          <Link to="/">
            <img src="logo.png" />
          </Link>
          <div className="inputSearch">
            <div className="inputList">
              <input type="text" id="txtBusca" placeholder="Buscar..." />
              <div className={active ? "menu menuOpen" : "menu menuClose"}>
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
                  </div>
                </div>
              </div>
            </div>
            <button>
              <img src="icons/iconmonstr-search-thin.svg" />
            </button>
          </div>
        </div>
        {/* menu hamburgue */}
        {userLogged()}
        <div
          className={active ? "icon iconActive" : "icon"}
          onClick={ToggleMode}
        >
          <div className="hamburguer hamburguerIcon"></div>
        </div>
      </nav>
    </div>
  );
};
