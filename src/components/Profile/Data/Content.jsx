import React, { useEffect, useState } from "react";
import ClientMenu from "../common/ClientMenu";
import Data from "../../Data/Data";
import "../Profile.scss";
import Form from "../../Form/Form";
import "./Content.scss";

export default (props) => {

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");

  const gender = document.getElementById("genderSelect");

  function submitForm() {
    event.preventDefault();;
    var object = {
      "Nome completo": fullName,
      Telefone: phone,
      Gênero: gender.value,
    };

    localStorage.setItem("changes", JSON.stringify(object));
  }

  return (
    <div className="profile-container">
      <ClientMenu selected="dados" />
      <div className="main-content">
        <Data header="Meus dados cadastrais">
          <Form className="form">
            <div className="formWritable">
              <label htmlFor="name">Nome Completo:</label>
              <input
                type="text"
                name="name"
                className="nameInput"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Trazer nome da API"
              />
              <div className="phoneAndGender">
                <span>
                  <label htmlFor="phone">Telefone:</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="13 9 1234-1234"
                    id="phoneNumber"
                    maxLength="13"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </span>
                <span>
                  <label htmlFor="gender">Sexo:</label>
                  <select name="gender" id="genderSelect">
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                    <option value="Outro">Outro</option>
                  </select>
                </span>
              </div>
              <br />
              <button type="submit" className="submit" onClick={submitForm}>
                Salvar Alterações
              </button>
            </div>
            <div className="formReadOnly">
              <label htmlFor="cpf">CPF:</label>
              <input
                type="text"
                name="cpf"
                readOnly
                className="readOnly"
                placeholder="Trazer CPF da API"
              />

              <label htmlFor="birth">Data de nascimento:</label>
              <input
                type="text"
                name="birth"
                readOnly
                className="readOnly"
                placeholder="Trazer data de nascimento da API"
              />
            </div>
          </Form>
        </Data>
      </div>
    </div>
  );
};
