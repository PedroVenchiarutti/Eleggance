import React from "react";
import "./cardFinance.scss"

export default (props) => {
  return (
    <div className="cards-finances">
      <div className="div-card-finances">
        <h3> Reservas </h3>
        <h2> 0 </h2>
      </div>
      <div className="div-card-finances">
        <h3> Cupons gerados </h3>
        <h2> 0 </h2>
      </div>
      <div className="div-card-finances">
        <h3> Pedidos </h3>
        <h2> 0 </h2>
      </div>
      <div className="div-card-finances">
        <h3> Usuarios cadastrados </h3>
        <h2> 0 </h2>
      </div>
    </div>
  );
};
