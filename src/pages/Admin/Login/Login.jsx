import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.scss";

export default function Login() {
  const [adminLogin, setAdminLogin] = useState("");
  const [adminSenha, setAdminSenha] = useState("");

  function verificarLogin() {
    if (adminLogin == "admin" && adminSenha == "admin") {
    } else {
      alert("Login bem-sucedido!");
    }
  }

  return (
    <div className="admin-login-container">
      <div className="form-background">
        <div className="logo-div">
          <img src="./logo.png" alt="" />
        </div>
        <form className="modal-login">
          <div className="single-input">
            <input
              type="text"
              name="Login"
              value={adminLogin}
              required
              onChange={(e) => setAdminLogin(e.target.value)}
            />
            <label htmlFor="Login" className="label-login">
              <span className="content-login">Login</span>
            </label>
          </div>
          <div className="single-input">
            <input
              type="password"
              name="Password"
              required
              value={adminSenha}
              onChange={(e) => setAdminSenha(e.target.value)}
            />
            <label htmlFor="Password" className="label-password">
              <span className="content-password">Password</span>
            </label>
          </div>
        </form>
        <div className="button-div">
          <button onClick={verificarLogin}>Entrar</button>
          </div>
      </div>
    </div>
  );
}
