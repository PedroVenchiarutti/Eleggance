import React, { useContext } from "react";
import Footer from "../Footer/Footer";
import { Navbar } from "../../components/Navbar";
import './MyProfile.scss';
import { Link } from "react-router-dom";
import ClientMenu from '../../components/ClientMenu/ClientMenu';
import Data from "../../components/Data/Data";
import ToHome from "../../components/ToHome/ToHome";
import ContentHeader from "../../components/Profile/ContentHeader";
import MainHeader from "../../components/Profile/MainHeader";

const MyProfile = (props) => {  

    return (
        <div className="myProfile">
            <div className="navbar">
                <Navbar />
            </div>
            <ToHome />
            <div className="container">
                <ClientMenu selected='perfil' />
                <div className="ordersAndInfo">
                    {/* <div className="orders"> */}
                        <MainHeader title="VOCÊ AINDA NÃO TEM PEDIDOS RECENTES." body="Os detalhes dos seus pedidos mais recentes poderão ser acompanhados nesta área" />
                    {/* </div> */}
                    <Data header={
                        <ContentHeader title="Meus dados"></ContentHeader>
                    } body={
                        <>
                            <p>Nome: <span className="infoP">{props.name}</span></p>
                            <p>CPF: <span className="infoP">{props.cpf}</span></p>
                            <p>Sexo: <span className="infoP">{props.gender}</span></p>
                            <p>Data de nascimento: <span className="infoP">{props.birth}</span></p>
                            <p>Telefone Principal: <span className="infoP">{props.phone}</span></p>
                            <p>E-mail: <span className="infoP">{props.email}</span></p>
                        </>
                    }>
                    </Data>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default MyProfile