import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/auth";

import Data from "../../Data/Data";
import MainHeader from "../common/MainHeader";

import "./Content.scss";
import "../Profile.scss";
import { useFetch } from "../../../hooks/useFetch";

export default () => {

  const [profile, setProfile] = useState("");
  const { user } = useContext(AuthContext);
  const date = profile.birth
    ? new Date(profile.birth).toISOString().split("T")[0]
    : "";

  const { data } = useFetch(`api/protected/client/${user.id}`);

  useEffect(() => {
    if (data) {
      setProfile(data);
    }
  }, [data]);  

  console.log(profile)
  return (
    <>
      <MainHeader
        title="VOCÊ AINDA NÃO TEM PEDIDOS RECENTES."
        body="Os detalhes dos seus pedidos mais recentes poderão ser acompanhados nesta área"
      />

      <Data header="Meus Dados">
        <>
          <p>
            Nome: <span className="infoP">{profile.name}</span>
          </p>
          <p>
            CPF: <span className="infoP">{profile.cpf}</span>
          </p>
          <p>
            Sexo: <span className="infoP">{profile.sexo}</span>
          </p>
          <p>
            Data de nascimento: <span className="infoP">{date}</span>
          </p>
          <p>
            Telefone Principal: <span className="infoP">{profile.phone}</span>
          </p>
          <p>
            E-mail: <span className="infoP">{profile.email}</span>
          </p>
        </>
      </Data>
    </>
  );
};
