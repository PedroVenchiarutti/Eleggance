import React, { useState } from "react";
import "./Content.scss";
import ClientMenu from "../common/ClientMenu";
import Data from "../../Data/Data";
import "../Profile.scss";
import Form from "./Form";
import Api from "../../../api/api";

export default (props) => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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

    console.log(data);

    Api.put("/api/protected/client/password", data)
      .then((res) => {
        alert("Password changed successfully");
        setPassword("");
        setNewPassword("");
        setConfirmPassword("");
      })
      .catch((err) => {
        console.log(err);
        alert("Password change failed");
      });
  };

  return (
    <div className="profile-container">
      <ClientMenu selected="login" />
      <div className="main-content">
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
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <div className="perfil-new-password">
                <label htmlFor="newpassword">Nova senha: </label>
                <input
                  type="password"
                  name="newpassword"
                  placeholder="Digite sua senha"
                  onChange={(e) => setNewPassword(e.target.value)}
                  value={newPassword}
                />
              </div>
              <div className="perfil-confirm-password">
                <label htmlFor="newpassword">Confirme a nova senha: </label>
                <input
                  type="password"
                  name="confirmpassword"
                  placeholder="Confirme sua senha"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                />
              </div>
            </Form>
          </div>
        </Data>
      </div>
    </div>
  );
};
