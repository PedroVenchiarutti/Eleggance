import React, { useEffect, useState } from "react"
import ClientMenu from '../common/ClientMenu'
import Data from "../../Data/Data"
import MainHeader from "../common/MainHeader"
import '../Profile.scss'

const MyProfile = (props) => {  

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    
    useEffect(() => {

        const saved = JSON.parse(localStorage.getItem('user'))
        setName(saved.login)
        setEmail(saved.email)
    },[])

    return (
            <div className="profile-container">
                <ClientMenu selected='perfil' />
                <div className="main-content">
                        <MainHeader title="VOCÊ AINDA NÃO TEM PEDIDOS RECENTES." body="Os detalhes dos seus pedidos mais recentes poderão ser acompanhados nesta área" />
                    <Data header='Meus Dados'>
                    {/* { <ContentHeader title="Meus dados"></ContentHeader>}> */}
                        <>
                            <p>Nome: <span className="infoP">{name}</span></p>
                            <p>CPF: <span className="infoP">{props.cpf}</span></p>
                            <p>Sexo: <span className="infoP">{props.gender}</span></p>
                            <p>Data de nascimento: <span className="infoP">{props.birth}</span></p>
                            <p>Telefone Principal: <span className="infoP">{props.phone}</span></p>
                            <p>E-mail: <span className="infoP">{email}</span></p>
                        </>
                    </Data>
                </div>
            </div>
    )
}

export default MyProfile