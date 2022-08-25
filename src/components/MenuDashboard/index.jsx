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
        <img src="../../../logo.png" alt="" />

        <li>
          <NavLink to={"/admin/home"}>
            <div className="menuOption">
              <img src="/icons/geral.png" alt="a" className="menuIcon-geral" /> Geral
            </div>
          </NavLink>
        </li>
        {/* <li>
          <NavLink to={"/admin/reservas"}>Reservas</NavLink>
        </li> */}
        <li>
          <NavLink to={"/admin/produtos"}>
            <div className="menuOption">
              <img src="/icons/shop.png" alt="a" className="menuIcon-products" /> Produtos
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/admin/pedidos"}>
            <div className="menuOption">
              <img src="/icons/orders.png" alt="a" className="menuIcon-orders" /> Pedidos
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/admin/administracao"}>
            <div className="menuOption">
              <img src="/icons/admin.png" alt="a" className="menuIcon-admin" /> Administração
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/admin/cupons"}>
            <div className="menuOption">
              <img src="/icons/coupon.png" alt="a" className="menuIcon-coupons" /> Cupons
            </div>
          </NavLink>
        </li>
        <hr />
        <li>
          <NavLink to={"/admin/configuracoes"}>
            <div className="menuOption">
              <img src="/icons/settings.png" alt="a" className="menuIcon-settings" /> Configurações
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


