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
          <NavLink to={"/admin/home"}>
            <div className="menuOption">
              <img src="/icons/generalIcon.png" alt="a" className="menuIcon" /> Geral
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/admin/reservas"}>
            <div className="menuOption">
              <img src="/icons/reservationIcon.png" alt="a" className="menuIcon" /> Reservas
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/admin/produtos"}>
            <div className="menuOption">
              <img src="/icons/productsIcon.png" alt="a" className="menuIcon" /> Produtos
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/admin/pedidos"}>
            <div className="menuOption">
              <img src="/icons/ordersIcon.png" alt="a" className="menuIcon" /> Pedidos
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/admin/administracao"}>
            <div className="menuOption">
              <img src="/icons/adminIcon.png" alt="a" className="menuIcon" /> Administração
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/admin/cupons"}>
            <div className="menuOption">
              <img src="/icons/couponsIcon.png" alt="a" className="menuIcon" /> Cupons
            </div>
          </NavLink>
        </li>
        <hr />
        <li>
          <NavLink to={"/admin/configuracoes"}>
            <div className="menuOption">
              <img src="/icons/settingsIcon.png" alt="a" className="menuIcon" /> Configurações
            </div>
          </NavLink>
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


