import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";

import "./ModalUser.scss";
export default () => {
  const { authenticated, adminAuthenticated, userLogout } = useContext(AuthContext);

  return (
    <div className="modal-user">
      <div className="modal-user-container">
        <div className="modal-user-list">
          <ul className="modal-user-list-item">
            {authenticated ? <UserModal logoutAction={userLogout} /> : adminAuthenticated ? <AdminModal logoutAction={userLogout} /> : <GuestModal />}
          </ul>
        </div>
      </div>
    </div>
  );
};

const GuestModal = () =>
  <ul>
    <li>
      <Link to="/login">Fazer login</Link>
    </li>
  </ul>

const UserModal = ({ logoutAction }) =>
  <ul>
    <li>
      <Link to="/perfil">Perfil</Link>
    </li>
    <li>
      <Link to="/carrinho">Carrinho</Link>
    </li>
    <li>
      <span onClick={logoutAction}>Deslogar</span>
    </li>
  </ul>

const AdminModal = ({ logoutAction }) =>
  <ul>
    <li>
      <Link to="/admin/home">Dashboard</Link>
    </li>
    <li>
      <Link to="/admin/produtos">Produtos</Link>
    </li>
    <li>
      <span onClick={logoutAction}>Deslogar</span>
    </li>
  </ul>