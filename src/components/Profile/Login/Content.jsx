import React, { useState } from "react";
import Data from "../../Data/Data";
import "../Profile.scss";
import Form from "./Form";
import "./Content.scss";
import Api from "../../../api/api";
import { usePut } from "../../../hooks/useFetch";
import { set } from "react-hook-form";

export default (props) => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [toogle, setToogle] = useState(false);
  const [message, setMessage] = useState({
    type: "",
    message: "",
  });

  const handlePassword = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords don't match");
      return;
    } else if (newPassword.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }
    let data = { password, newPassword };

    usePut(
      "/api/protected/client/password",
      data,
      (response) => {
        setToogle(true);
        setMessage({
          type: "success",
          message: "Senha alterada com sucesso!",
        });
        setPassword("");
        setNewPassword("");
        setConfirmPassword("");
        return;
      },
      (error) => {
        setToogle(true);
        let errorData = error.response.data;

        setMessage({
          type: "error",
          message: errorData,
        });
        return;
      }
    );
  };

  return (
    <>
      <Data header="Meu Login e Senha">
        <h3>Alterar senha</h3>
        <div className="forms">
          <Form item="Senha" value="Alterar Senha" submit={handlePassword}>
            <div className="perfil-password-atual">
              <label htmlFor="currentpassword">Senha atual:</label>
              <input
                type="password"
                name="currentpassword"
                placeholder="Digite sua senha Atual"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="perfil-new-password">
              <label htmlFor="newpassword">Nova senha: </label>
              <input
                type="password"
                name="newpassword"
                placeholder="Digite sua senha"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="perfil-confirm-password">
              <label htmlFor="newpassword">Confirme a nova senha: </label>
              <input
                type="password"
                name="confirmpassword"
                placeholder="Confirme sua senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </Form>
        </div>
        <div className="message-error">
          {toogle ? (
            <p
              className={
                message.type == "error"
                  ? "messager-error"
                  : "p-alteração-sucess"
              }
            >
              Error em tentar alterar a senha: Atual {message.message}
            </p>
          ) : (
            ""
          )}
        </div>
      </Data>
    </>
  );
};
