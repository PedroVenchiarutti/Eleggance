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
              <div className="icon-geral">
                <img
                  src="/icons/geral.png"
                  alt="a"
                  className="menuIcon-geral"
                />
              </div>
              <div className="menuAdmin-geral">Geral</div>
            </div>
          </NavLink>
        </li>
        {/* <li>
          <NavLink to={"/admin/reservas"}>Reservas</NavLink>
        </li> */}
        <li>
          <NavLink to={"/admin/produtos"}>
            <div className="menuOption">
              <div className="icon-products">
                <img
                  src="/icons/shop.png"
                  alt="a"
                  className="menuIcon-products"
                />{" "}
              </div>
              <div className="menuAdmin-products">Produtos</div>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/admin/pedidos"}>
            <div className="menuOption">
              <div className="icon-orders">
                <img
                  src="/icons/orders.png"
                  alt="a"
                  className="menuIcon-orders"
                />{" "}
              </div>
              <div className="menuAdmin-orders">Pedidos</div>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/admin/administracao"}>
            <div className="menuOption">
              <div className="icon-admin">
                <img
                  src="/icons/admin.png"
                  alt="a"
                  className="menuIcon-admin"
                />{" "}
              </div>
              <div className="menuAdmin-admin">Administração</div>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/admin/cupons"}>
            <div className="menuOption">
              <div className="icon-coupons">
                <img
                  src="/icons/coupon.png"
                  alt="a"
                  className="menuIcon-coupons"
                />{" "}
              </div>
              <div className="menuAdmin-coupons">Cupons</div>
            </div>
          </NavLink>
        </li>
        <hr />
        {/* <li>
          <NavLink to={"/admin/configuracoes"}>
            <div className="menuOption">
              <div className="icon-settings">
                <img
                  src="/icons/settings.png"
                  alt="a"
                  className="menuIcon-settings"
                />{" "}
              </div>
              <div className="menuAdmin-settings">Configurações</div>
            </div>
          </NavLink>
        </li> */}
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
