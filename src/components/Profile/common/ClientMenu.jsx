import React, { useEffect, useContext } from "react";
import "./ClientMenu.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/auth";

const ClientMenu = ({ selected }) => {
  let navigate = useNavigate();

  const { username } = useContext(AuthContext);
  useEffect(() => {
    const options = document.querySelectorAll(".option");
    options.forEach((option) => option.classList.remove("selected"));

    switch (selected) {
      case "pedidos":
        options[1].classList.add("selected");
        break;
      case "dados":
        options[2].classList.add("selected");
        break;
      case "enderecos":
        options[3].classList.add("selected");
        break;
      case "login":
        options[4].classList.add("selected");
        break;
      case "favoritos":
        options[5].classList.add("selected");
        break;
      case "avaliacoes":
        options[6].classList.add("selected");
        break;
      case "perfil":
      default:
        options[0].classList.add("selected");
    }
  }, [selected]);

  return (
    <div className="options">
      <ul>
        <li className="helloUser">
          <h3>
            Olá, <span className="username">{username}</span>
          </h3>
          <Link to={"/home"}>Sair</Link>
        </li>
        <li className="option">
          <button className="liButton" onClick={() => navigate("/perfil")}>
            <img
              src="/icons/user.png"
              alt="user"
              height="40px"
              width="50px"
              className="user-icon"
            />
            <h2>Meu Perfil</h2>
          </button>
        </li>
        <li className="option">
          <button
            className="liButton"
            onClick={() => navigate("/perfil?tab=pedidos")}
          >
            <img
              src="/icons/box.png"
              alt="caixa"
              height="40px"
              width="50px"
              className="box-icon"
            />
            <h2>Meus Pedidos</h2>
          </button>
        </li>
        <li className="option">
          <button
            className="liButton"
            onClick={() => navigate("/perfil?tab=dados")}
          >
            <img
              src="/icons/file.png"
              alt="arquivo"
              height="40px"
              width="50px"
              className="archive-icon"
            />
            <h2>Meus Dados</h2>
          </button>
        </li>
        <li className="option">
          <button
            className="liButton"
            onClick={() => navigate("/perfil?tab=enderecos")}
          >
            <img
              src="/icons/gps.png"
              alt="gps"
              height="40px"
              width="50px"
              className="gps-icon"
            />
            <h2>Meus Endereços</h2>
          </button>
        </li>
        <li className="option">
          <button
            className="liButton"
            onClick={() => navigate("/perfil?tab=login")}
          >
            <img
              src="/icons/lock.png"
              alt="cadeado"
              height="40px"
              width="50px"
              className="lock-icon"
            />
            <h2>Meu login e senha</h2>
          </button>
        </li>
        <li className="option">
          <button
            className="liButton"
            onClick={() => navigate("/perfil?tab=favoritos")}
          >
            <img
              src="/icons/heart.png"
              alt="coração"
              height="40px"
              width="50px"
              className="heart-icon"
            />
            <h2>Meus Favoritos</h2>
          </button>
        </li>
        <li className="option">
          <button
            className="liButton"
            onClick={() => navigate("/perfil?tab=avaliacoes")}
          >
            <img
              src="/icons/star.png"
              alt="favorito"
              height="40px"
              width="49px"
              className="star-icon"
            />
            <h2>Minhas Avaliações</h2>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ClientMenu;
