import React from "react";
import "./SingUp.scss";

function inputRender(title) {
  if (title.title === "Entrar") {
    return (
      <>
        <input
          type="text"
          name="input-login"
          id="input-login"
          placeholder="Login:"
          required
        />

        <input
          type="password"
          name="input-password"
          id="input-password"
          placeholder="Password:"
          required
        />
      </>
    );
  } else if (title.title === "Cadastrar") {
    return (
      <>
        <input
          type="text"
          name="input-login"
          id="input-login"
          placeholder="Digite seu Login:"
          required
        />
        <input
          type="password"
          name="input-password"
          id="input-password"
          placeholder="Seu Email:"
          required
        />
        <input
          type="text"
          name="input-login"
          id="input-login"
          placeholder="Digite uma senha:"
          required
        />
        <input
          type="password"
          name="input-password"
          id="input-password"
          placeholder="Confirme sua senha:"
          required
        />
      </>
    );
  } else {
    return <></>;
  }
}

const SingUp = (props) => {
  return (
    <div className="container">
      <div className="box">
        <div className="box-header">
          <img src="\img\modelo-login.jpg" alt="foto" className="fade-in-fwd" />
          <div
            className={
              props.title === "Cadastrar"
                ? "content-input-cadastrar"
                : "content-input-login"
            }
          >
            <h1 className="slide-in-elliptic-right-fwd">Eleggance</h1>
            <h2>{props.title}</h2>
            {inputRender(props)}
            <div className="button-div">
              <a href={props.option == "Cadastrar" ? "/registration" : "/home"}>
                <button className="button-login">{props.option}</button>
              </a>
            </div>
            <div className="footer-card">
              <a href={props.option == "Esqueceu senha" ? "/" : "/login"}>
                <p>
                  {props.option === "Entrar" ? "Esqueceu a senha" : "Voltar"}
                </p>
              </a>
              <a href="/cadastro">
                <p>{props.option === "Entrar" ? "Cadastre aqui" : ""} </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
