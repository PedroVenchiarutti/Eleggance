import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import { Link } from "react-router-dom";
import "./navbar.scss";
import ModalUser from "../ModalUser/ModalUser";
import { useFetch } from "../../hooks/useFetch";
import Search from "./Search";
import { CartContext } from "../../contexts/cart";

export const Navbar = () => {
  const { authenticated, adminName, username } = useContext(AuthContext);
  const { adminAuthenticated } = useContext(AuthContext);
  const { userLogout } = useContext(AuthContext);
  const [active, setMode] = useState(false);
  const [busca, setBusca] = useState("");
  const [modalUser, setModalUser] = useState(false);
  const [quantity, setQuantity] = useState(null);
  const [dataUser, setDataUser] = useState({});
  const user = localStorage.getItem("user");
  const navigation = useNavigate();

  const ToggleModalUser = () => setModalUser(!modalUser);

  // Abrir/Fechar menu mobile Hamburguer
  const ToggleMode = () => setMode(!active);

  const AdminLogged = () => {
    if (adminAuthenticated) {
      return (
        <div className="div-button">
          <Link to="/admin/home" className="login-button">
            <p>
              {adminName}
              <br />
              <span className="admin-navbar">Admin</span>
            </p>
          </Link>
        </div>
      );
    }
    return (
      <div className="div-button">
        <Link to="/login" className="login-button">
          <img src="/img/Frame.svg" />
          <p>
            Entre ou <br /> cadastre-se
          </p>
        </Link>
      </div>
    );
  };

  const { cart, alertNotification, setAlertNotification } =
    useContext(CartContext);

  useEffect(() => {
    setAlertNotification(true);
    const notificationAlert = () => {
      if (alertNotification && authenticated) {
        const getCart = localStorage.getItem("user");
        const parseCart = JSON.parse(getCart);
        const cartLength = parseCart.productCart?.length;
        console.log("cart length", cartLength);
        setQuantity(cartLength);
        const notification = document.querySelector(".alertIcon");
        notification?.classList.toggle("alertTremer");
      }
    };
    notificationAlert();
  }, [alertNotification]);

  useEffect(() => {
    const getUser = localStorage.getItem("user", JSON.stringify());
    const parseUser = JSON.parse(getUser);
    const newImg = {
      ...parseUser,
    };
    setDataUser(newImg);
  }, []);

  const renderImage = () => {
    const img_url = dataUser.img_url;

    return (
      <button onClick={() => navigation("/perfil")}>
        <img
          className={img_url ? "rounded" : ""}
          src={img_url || "/icons/userWhite.svg"}
          alt="Foto usuario"
        />
      </button>
    );
  };

  //verificar a tela do usuario e renderizar o botao de logout e se ele estiver logado ou nao
  const userLogged = () => {
    const height = window.screen.height;
    const width = window.screen.width;

    if (height >= 600 && width >= 600 && authenticated) {
      // renderizando Desktop se tiver logado
      return (
        <div className="navbar-user-logged">
          <div className="navbar-user-logged-name">
            {renderImage()}
            <div className="navbar-user-name-logout">
              <h4>
                <span onClick={() => navigation("/perfil")}>
                  {username.toUpperCase()}
                </span>
              </h4>
              <button onClick={userLogout}>Sair</button>
            </div>
          </div>
          <div className="alertClass">
            <span
              className={quantity == 0 || quantity == null ? " " : "alertIcon"}
            >
              {quantity == 0 || quantity == null ? " " : quantity}
            </span>
            <button className="buttonCart">
              <Link to="/carrinho">
                <img src="/icons/shoppingCart.svg" className="svgCart" />
              </Link>
            </button>
          </div>
        </div>
      );
    } else if (height >= 600 && width >= 600 && !authenticated) {
      return (
        <div className="navbar-user-logged">
          {AdminLogged()}
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
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="navbar-container">
        <nav>
          <div className="logoInSearch">
            <Link to="/">
              <img src="/logo.png" />
            </Link>
            <div className="inputSearch">
              <div className="inputList">
                <input
                  type="text"
                  id="txtBusca"
                  placeholder="Buscar..."
                  onChange={(ev) => setBusca(ev.target.value.toLowerCase())}
                />
                <div className={active ? "menu menuOpen" : "menu menuClose"}>
                  <div className="list-container">
                    <div className="list">
                      <ul>
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/produtos/id">Produtos</Link>
                        </li>
                        <li>
                          <Link to="/contato">Contato</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <Link to={"/produtos/" + busca}>
                <button>
                  <img src="/icons/iconmonstr-search-thin.svg" />
                </button>
              </Link>
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
      <Search busca={busca} />
    </div>
  );
};
