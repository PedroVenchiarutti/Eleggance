import React from "react";
import "../CardFinances/cardFinance.scss";
import { NavLink } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export default (props) => {
  const { data } = useFetch(`api/public/products/pages/1`);
  let pedidos = data.length;

  return (
    <div className="cards-finances">
      <div className="div-card-finances">
        <NavLink to={"/admin/reservas"}>
          <div className="link-financas">
            <h3> Reservas </h3>
            <h2> 0 </h2>
          </div>
        </NavLink>
      </div>
      <div className="div-card-finances">
        <NavLink to={"/admin/cupons"}>
          <div className="link-financas">
            <h3> Cupons gerados </h3>
            <h2> 0 </h2>
          </div>
        </NavLink>
      </div>
      <div className="div-card-finances">
        <NavLink to={"/admin/pedidos"}>
          <div className="link-financas">
            <h3> Pedidos </h3>
            <h2> {pedidos} </h2>
          </div>
        </NavLink>
      </div>
      <div className="div-card-finances">
        <NavLink to={"/admin/pedidos"}>
          <div className="link-financas">
            <h3> Usuarios cadastrados </h3>
            <h2> 0 </h2>
          </div>
        </NavLink>
      </div>
    </div>
  );
};
