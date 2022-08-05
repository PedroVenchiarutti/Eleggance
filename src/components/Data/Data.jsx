import React from "react";
import './Data.scss';

const Data = (props) => {

return(
<div className="info">
    <div className="infoText">
        <p className="myData">Meus dados</p>
        <div className="infoData">
            <p>Nome: <span className="infoP">{props.name}</span></p>
            <p>CPF: <span className="infoP">{props.cpf}</span></p>
            <p>Sexo: <span className="infoP">{props.gender}</span></p>
            <p>Data de nascimento: <span className="infoP">{props.birth}</span></p>
            <p>Telefone Principal: <span className="infoP">{props.phone}</span></p>
            <p>E-mail: <span className="infoP">{props.email}</span></p>
        </div>
    </div>
</div>
)

}

export default Data