import React, { useState } from "react";
import { useContext } from "react";
import { AdminContext } from "../../../contexts/admin";

import "./login.scss";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useContext(AdminContext);
  const handleSubmit = () => login(email, password);

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
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="Login" className="label-login">
              <span className="content-login">E-mail</span>
            </label>
          </div>
          <div className="single-input">
            <input
              type="password"
              name="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="Password" className="label-password">
              <span className="content-password">Password</span>
            </label>
          </div>
        </form>
          <div className="button-div">
            <button onClick={handleSubmit}>Entrar</button>
          </div>
      </div>
    </div>
  );
}
