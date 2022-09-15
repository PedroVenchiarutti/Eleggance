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


  // refactor cpfMask?
  let cpfFormat = 0;

  if(profile.cpf){
    const cpf = new String(profile.cpf)
    const cpf1 = cpf.substring(0,3)
    const cpf2 = cpf.slice(3,6)
    const cpf3 = cpf.slice(6,9)
    const cpf4 = cpf.slice(9,11)
    cpfFormat = cpf1 + '.' + cpf2 + '.' + cpf3 + '-' + cpf4
  }

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
            CPF: <span className="infoP">{cpfFormat}</span>
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
