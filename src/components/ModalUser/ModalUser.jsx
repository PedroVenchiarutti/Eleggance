import React, { useState, useContext } from "react";
import "./ModalUser.scss";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";

const ModalUser = () => {
  const { adminAuthenticated } = useContext(AuthContext);

  return (
    <div className="modal-user">
      <div className="modal-user-container">
        <div className="modal-user-list">
          <ul className="modal-user-list-item">
            <li>
              <Link to={adminAuthenticated ? "/admin/home" : "/Perfil"}>
                {adminAuthenticated ? "DashBoard" : "Perfil"}
              </Link>
            </li>
            <li>
              <Link to={adminAuthenticated ? "/admin/produtos" : "/carrinho"}>
                {adminAuthenticated ? "Produtos" : "Carrinho"}
              </Link>
            </li>
            <li>
              <Link to="/">{adminAuthenticated ? " " : "Deslogar"}</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ModalUser;
