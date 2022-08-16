import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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

        <li>
          <NavLink to={"/admin/home"}>Geral</NavLink>
        </li>
        <li>
          <NavLink to={"/admin/reservas"}>Reservas</NavLink>
        </li>
        <li>
          <NavLink to={"/admin/produtos"}>Produtos</NavLink>
        </li>
        <li>
          <NavLink to={"/admin/pedidos"}>Pedidos</NavLink>
        </li>
        <li>
          <NavLink to={"/admin/admnistracao"}>Admnistração</NavLink>
        </li>
        <li>
          <NavLink to={"/admin/cupons"}>Cupons</NavLink>
        </li>
        <hr />
        <li>
          <NavLink to={"/admin/configuracoes"}>Configurações</NavLink>
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
