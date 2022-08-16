import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.scss";

export default function Login() {
  const [adminLogin, setAdminLogin] = useState("");
  const [adminSenha, setAdminSenha] = useState("");

  function verificarLogin() {
    if (adminLogin == "admin" && adminSenha == "admin") {
      
    } else {
      alert("tchau");
    }
  }

  return (
    <div className="admin-login-container">
      <div className="modal-login">
        {/* <h1>Elegancce </h1> */}
        <img src="./logo.png" alt="" />
        <input
          type="text"
          placeholder="Login"
          value={adminLogin}
          onChange={(e) => setAdminLogin(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={adminSenha}
          onChange={(e) => setAdminSenha(e.target.value)}
        />
        <button onClick={verificarLogin}>Entrar</button>
      </div>
    </div>
  );
}
