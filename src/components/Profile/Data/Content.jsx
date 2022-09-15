import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../contexts/auth";
import { useFetch, usePut } from "../../../hooks/useFetch";

import Data from "../../Data/Data";
import Form from "../../Form/Form";
import Api from "../../../api/api";

import "./Content.scss";
import "../Profile.scss";
import SpinnerButton from "../../SpinerButton";

export default () => {
  const { user, updateUser } = useContext(AuthContext);
  const [profile, setProfile] = useState("");
  const [toogle, setToogle] = useState(false);
  const [image, setImage] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [previelImg, setPrevielImg] = useState("");

  const [message, setMessage] = useState({
    type: "",
    message: "",
  });
  const updateProfileState = (fieldName, value) =>
    setProfile(Object.assign({ ...profile }, { [fieldName]: value }));

  const date = profile.birth
    ? new Date(profile.birth).toISOString().split("T")[0]
    : "";

  const { data } = useFetch(`api/protected/client/${user.id}`);

  useEffect(() => {
    if (data) {
      setProfile(data);
    }
  }, [data]);

  return (
    <>
      <Data header="Meus dados cadastrais">
        <Form
          className="form"
          onSubmit={(e) =>
            updateUser(
              e,
              profile,
              setToogle,
              setMessage,
              setSpinner,
              previelImg
            )
          }
        >
          <div className="img-data">
            <label
              className="label-photo-registration"
              htmlFor="photo-registration"
            >
              {() => renderImg(previelImg)}
              <img
                className="photo-registration"
                src={
                  previelImg ? URL.createObjectURL(previelImg) : profile.img_url
                }
                alt="Foto de perfil"
              />
            </label>

            <input
              type="file"
              id="photo-registration"
              name="image"
              onChange={(e) => {
                updateProfileState("img_url", e.target.files[0]);
                setPrevielImg(e.target.files[0]);
              }}
            />
          </div>
          <div className="container-profile">
            <div className="formWritable">
              <label>Nome Completo:</label>
              <input
                className="nameInput"
                value={profile.name ?? ""}
                onChange={(e) => updateProfileState("name", e.target.value)}
              />
              <div className="phoneAndGender">
                <span>
                  <label>Telefone:</label>
                  <input
                    className="phoneNumber"
                    value={profile.phone ?? ""}
                    onChange={(e) =>
                      updateProfileState("phone", e.target.value)
                    }
                  />
                </span>
                <span>
                  <label>Gênero:</label>
                  <select
                    value={profile.sexo}
                    onChange={(e) => updateProfileState("sexo", e.target.value)}
                  >
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                    <option value="">Prefiro não dizer</option>
                  </select>
                </span>
              </div>
              <br />
              {spinner ? (
                <SpinnerButton />
              ) : (
                <button type="submit" className="submit">
                  Salvar Alterações
                </button>
              )}

              {toogle ? (
                <p
                  className={
                    message.type == "error"
                      ? "messager-error"
                      : "p-alteração-sucess"
                  }
                >
                  {message.message}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="formReadOnly">
              <label>CPF:</label>
              <input readOnly className="readOnly" value={profile.cpf ?? ""} />

              <label>Data de nascimento:</label>
              <input readOnly className="readOnly" value={date} type="date" />
            </div>
          </div>
        </Form>
      </Data>
    </>
  );
};
