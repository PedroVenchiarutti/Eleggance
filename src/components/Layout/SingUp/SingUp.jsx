import React from "react";
import "./SingUp.scss";

const SingUp = (props) => {
  return (
    <div className="container">
      <div className="box">
        <div className="box-header">
          <h3>{props.title}</h3>
          <img
            src="public\img\modelo-login.jpg"
            alt="foto"
            className="fade-in-fwd"
          />
          <div className="content-input">
            <h1 className="slide-in-elliptic-right-fwd">Eleggance</h1>
            <h2>SINGUP</h2>
            <input
              type="text"
              name="input-login"
              id="input-login"
              placeholder="Login:"
            />
            <input
              type="password"
              name="input-password"
              id="input-password"
              placeholder="Password:"
            />
            <div className="button-div">
              <button className="button-login">Entrar</button>
            </div>
            <div className="footer-card">
              <a href="#">
                <p>Esqueceu a senha?</p>
              </a>
              <a href="#">
                <p>Cadastre aqui</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
