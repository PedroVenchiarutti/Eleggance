import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export default function MenuDashboard(props) {
  const [toogle, setTooggle] = useState(false);

  function toogleMenu() {
    let menu = document.getElementById("menu");
    let btn = document.getElementById("btnMenu");
    menu.classList.toggle("active");
    btn.classList.toggle("activeBtn");
  }

  return (
    <>
      <ul className="menu-container" id="menu">
        <img src="../../../public/logo.png" alt="" />

        <li className="active">
          <Link to={"/home"}>Geral</Link>
        </li>
        <li>
          <Link to={"/home"}>Reservas</Link>
        </li>
        <li>
          <Link to={"/home"}>Produtos</Link>
        </li>
        <li>
          <Link to={"/home"}>Pedidos</Link>
        </li>
        <li>
          <Link to={"/home"}>Admnistração</Link>
        </li>
        <li>
          <Link to={"/home"}>Cupons</Link>
        </li>
        <hr />
        <li>
          <Link to={"/home"}>Configurações</Link>
        </li>
      </ul>
      <div
        onClick={toogleMenu}
        className="container-menu-hamburger toogle"
        id="toggle"
      >
        <i className="menu-hamburger" id="btnMenu"></i>
      </div>
    </>
  );
}
