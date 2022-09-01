import React, { useState } from "react";
import "./ModalUser.scss";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

const ModalUser = () => {
  return (
    <div className="modal-user">
      <div className="modal-user-container">
        <div className="modal-user-list">
          <ul className="modal-user-list-item">
            <li>
              <Link to="/perfil">Perfil</Link>
            </li>
            <li>
              <Link to="/carrinho">Carrinho</Link>
            </li>
            <li>
              <Link to="/contato">Deslogar</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ModalUser;
