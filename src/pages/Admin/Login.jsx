import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.scss";

export default function Login() {
  const [adminEmail, setAdminEmail] = useState("");
  const [adminSenha, setAdminSenha] = useState("");

    function verificarLogin(){
        
    }
    
  return (
    <div className="admin-login-container">
      <div className="modal-login">
        <h1>DashBoard Elegancce </h1>
        <input
          type="text"
          placeholder="Email"
          value={adminEmail}
          onChange={(e) => setAdminEmail(e.target.value)}
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
