import React from "react";
import ClientMenu from "../common/ClientMenu";
import Data from "../../Data/Data";
import "../Profile.scss";
import Form from "./Form";
import "./Content.scss";

export default (props) => {
  return (
    <div className="profile-container">
      <ClientMenu selected="login" />
      <div className="main-content">
        <Data header="Meu Login e Senha">
          <h3>Alterar senha</h3>
          <div className="forms">
            <Form item="Senha" value="Alterar Senha">
              <div className="perfil-password-atual">
                <label htmlFor="currentpassword">Senha atual:</label>
                <input
                  type="password"
                  name="currentpassword"
                  placeholder="Digite sua senha Atual"
                />
              </div>
              <div className="perfil-new-password">
                <label htmlFor="newpassword">Nova senha: </label>
                <input
                  type="password"
                  name="newpassword"
                  placeholder="Digite sua senha"
                />
              </div>
              <div className="perfil-confirm-password">
                <label htmlFor="newpassword">Confirme a nova senha: </label>
                <input
                  type="password"
                  name="confirmpassword"
                  placeholder="Confirme sua senha"
                />
              </div>
            </Form>
          </div>
        </Data>
      </div>
    </div>
  );
};
