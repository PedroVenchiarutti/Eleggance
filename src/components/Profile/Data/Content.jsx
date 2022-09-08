import React, { useState, useEffect } from "react";
import { useFetch } from '../../../hooks/useFetch';

import ClientMenu from "../common/ClientMenu";
import Data from "../../Data/Data";
import Form from "../../Form/Form";

import "./Content.scss";
import "../Profile.scss";
import Api from "../../../api/api";

const initialState = {
  name: "",
  phone: "",
  sexo: "",
  cpf: "",
  birth: ""
}

const BASE_URL = `api/protected/client/${JSON.parse(localStorage.getItem("user")).id}`;

export default () => {
  const [profile, setProfile] = useState({ ...initialState });
  const updateProfileState = (fieldName, value) => setProfile(Object.assign({ ...profile }, { [fieldName]: value }));

  const { data } = useFetch(BASE_URL);
  useEffect(() => { setProfile({ ...data, birth: new Date(data.birth).toLocaleDateString() }) }, [data]);

  return (
    <div className="profile-container">
      <ClientMenu selected="dados" />

      <div className="main-content">
        <Data header="Meus dados cadastrais">
          <Form className="form" onSubmit={e => onFormSubmit(e, profile)}>
            <div className="formWritable">
              <label>Nome Completo:</label>
              <input
                className="nameInput"
                value={profile.name ?? ""}
                onChange={e => updateProfileState("name", e.target.value)}
              />
              <div className="phoneAndGender">
                <span>
                  <label>Telefone:</label>
                  <input
                    className="phoneNumber"
                    value={profile.phone ?? ""}
                    onChange={e => updateProfileState("phone", e.target.value)}
                  />
                </span>
                <span>
                  <label>Gênero:</label>
                  <select value={profile.sexo} onChange={e => updateProfileState("sexo", e.target.value)}>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                    <option value="">Prefiro não dizer</option>
                  </select>
                </span>
              </div>
              <br />
              <button type="submit" className="submit">
                Salvar Alterações
              </button>
            </div>
            <div className="formReadOnly">
              <label>CPF:</label>
              <input readOnly className="readOnly" value={profile.cpf ?? ""} />

              <label htmlFor="birth">Data de nascimento:</label>
              <input readOnly className="readOnly" value={profile.birth ?? ""} />
            </div>
          </Form>
        </Data>
      </div>
    </div>
  );
};

const onFormSubmit = (event, profileInfos) => {
  event.preventDefault();
  Api.put(BASE_URL, profileInfos).then(() => window.location.reload()).catch(error => alert(error.response.data));
}