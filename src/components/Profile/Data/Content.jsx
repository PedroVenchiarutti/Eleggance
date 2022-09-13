import React, { useState, useContext } from "react";
import { AuthContext } from '../../../contexts/auth';

import Data from "../../Data/Data";
import Form from "../../Form/Form";
import "./Content.scss";

import "./Content.scss";
import "../Profile.scss";

export default () => {
  const { user, updateUser } = useContext(AuthContext);

  const [profile, setProfile] = useState({ ...user });
  const updateProfileState = (fieldName, value) => setProfile(Object.assign({ ...profile }, { [fieldName]: value }));

  return (
    <>

      <Data header="Meus dados cadastrais">
        <Form className="form" onSubmit={e => updateUser(e, profile)}>
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

            <label>Data de nascimento:</label>
            <input readOnly className="readOnly" value={new Date(profile.birth).toLocaleDateString()} />
          </div>
        </Form>
      </Data>
    </>
  )
};