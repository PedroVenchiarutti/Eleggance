import React from "react";
import "./styles.scss";


export const Services = () => {
  return (
    <div className="services-container">
      <div className="services-items">
        {/*======== SERVICES TEXT ========*/}
        <div className="services-text">
          <div className="item-first">
            <h4>Corte</h4>
          </div>
          <div className="item-second">
            <h4>Manicure e Pedicure</h4>
          </div>
          <div className="item-third">
            <h4>Procedimentos</h4>
          </div>
          <div className="item-fourth">
            <h4>Spa</h4>
          </div>
        </div>
        {/*======== SERVICES TEXT ========*/}
      </div>
    </div>
  );
};
