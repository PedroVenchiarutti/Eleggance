import React, { useContext } from "react"
import { AuthContext } from "../../../contexts/auth"

import ClientMenu from '../common/ClientMenu'
import Data from "../../Data/Data"
import MainHeader from "../common/MainHeader"

import './Content.scss'
import '../Profile.scss'

export default () => {
    const { user } = useContext(AuthContext);
    
    return (
        <div className="profile-container">
            <ClientMenu selected='perfil' />
            <div className="main-content">
                <MainHeader title="VOCÊ AINDA NÃO TEM PEDIDOS RECENTES." body="Os detalhes dos seus pedidos mais recentes poderão ser acompanhados nesta área" />
                
                <Data header='Meus Dados'>
                    <>
                        <p>Nome: <span className="infoP">{user.name}</span></p>
                        <p>CPF: <span className="infoP">{user.cpf}</span></p>
                        <p>Sexo: <span className="infoP">{user.sexo}</span></p>
                        <p>Data de nascimento: <span className="infoP">{new Date(user.birth).toLocaleDateString()}</span></p>
                        <p>Telefone Principal: <span className="infoP">{user.phone}</span></p>
                        <p>E-mail: <span className="infoP">{user.email}</span></p>
                    </>
                </Data>
            </div>
        </div>
    )
}