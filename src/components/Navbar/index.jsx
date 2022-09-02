import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/auth";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss";
import ModalUser from "../ModalUser/ModalUser";

export const Navbar = () => {
  const { authenticated, loginName } = useContext(AuthContext);
  const { userLogout } = useContext(AuthContext);
  const [active, setMode] = useState(false);
  const [modalUser, setModalUser] = useState(false);

  // Abrir/Fechar menu mobile Hamburguer
  const ToggleMode = () => {
    setMode(!active);
  };

  const navigation = useNavigate();

  //
  const ToggleModalUser = () => {
    setModalUser(!modalUser);
    console.log("modalUser", modalUser);
  };

  // Pega a imagen do usuario e renderizar na navbar se nao tiver img pega a img padrao
  const renderImage = () => {
    return (
      <button onClick={() => navigation("/perfil")}>
        <img src="/icons/userWhite.svg" alt="Foto usuario" />;
      </button>
    );
  };

  //verificar a tela do usuario e renderizar o botao de logout e se ele estiver logado ou nao
  const userLogged = () => {
    const height = window.screen.height;
    const width = window.screen.width;

    if (height >= 600 && width >= 600 && authenticated) {
      // renderizando Desktop
      return (
        <div className="navbar-user-logged">
          <div className="navbar-user-logged-name">
            {renderImage()}
            <div className="navbar-user-name-logout">
              <h4>
                <span>{loginName.toUpperCase()}</span>
              </h4>
              <button onClick={userLogout}>Sair</button>
            </div>
          </div>
          <button className="buttonCart">
            <Link to="/carrinho">
              <img src="/icons/shoppingCart.svg" className="svgCart" />
            </Link>
          </button>
        </div>
      );
    } else if (height >= 600 && width >= 600 && !authenticated) {
      return (
        <div className="navbar-user-logged">
          <div className="div-button">
            <Link to="/login" className="login-button">
              <img src="/img/Frame.svg" />
              <p>
                Entre ou <br /> cadastre-se
              </p>
            </Link>
          </div>
          <button className="buttonCart">
            <Link to="/carrinho">
              <img src="/icons/shoppingCart.svg" className="svgCart" />
            </Link>
          </button>
        </div>
      );
    } else {
      //mobile
      return (
        <div className="navbar-user-logged-mobile">
          <div className="navbar-user-logged-name-mobile">
            <button className="buttonFrame" onClick={ToggleModalUser}>
              <img src="/img/Frame.svg" className="svgUser-mobile" />
            </button>
            {modalUser ? <ModalUser /> : null}
            {/*   <button className="buttonCart">
              <Link to="/carrinho">
                <img src="/icons/shoppingCart.svg" className="svgCart-mobile" />
              </Link>
            </button> */}
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
            <img src="/logo.png" className="logo-navbar" />
          </Link>
          <div className="inputSearch">
            <div className="inputList">
              <input type="text" id="txtBusca" placeholder="Buscar..." />
              <div className={active ? "menu menuOpen" : "menu menuClose"}>
                <div className="list-container">
                  <div className="list">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/produtos">Produtos</Link>
                      </li>
                      <li>
                        <Link to="/contato">Contato</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <button>
              <img src="/icons/iconmonstr-search-thin.svg" />
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
