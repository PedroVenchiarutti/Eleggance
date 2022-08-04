import React, { useContext } from "react";
import Footer from "../Footer/Footer";
import { Navbar } from "../../components/Navbar";
import './MyProfile.scss';
import { Link } from "react-router-dom";
import ClientMenu from '../../components/ClientMenu/ClientMenu';

const MyProfile = (props) => {  

    return (
        <div className="myProfile">
            <div className="navbar">
            <Navbar />
            </div>
            <div className="pageTitle">
                <Link to="/home" >
                    <img src="icons/iconmonstr-home.svg" alt="casa" />
                </Link>
                <h4>Meu Perfil</h4>
            </div>
            <div className="container">  
                <ClientMenu selected='enderecos' />
                <div className="ordersAndInfo">
                    <div className="orders">
                        <div className="orderText">
                            <p className="recentOrders">VOCÊ AINDA NÃO TEM PEDIDOS RECENTES.</p>
                            <p className="orderDetails">Os detalhes dos seus pedidos mais recentes poderão ser acompanhados nesta área</p>
                        </div>
                    </div>
                    <div className="info">
                        <div className="infoText">
                            <p className="myData">Meus dados</p>
                            <div className="infoData">
                                <p>Nome: <span className="infoP">{props.name}</span></p>
                                <p>CPF: <span className="infoP">{props.cpf}</span></p>
                                <p>Sexo: <span className="infoP">{props.gender}</span></p>
                                <p>Data de nascimento: <span className="infoP">{props.birth}</span></p>
                                <p>Telefone Principal: <span className="infoP">{props.phone}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span></p>
                                <p>E-mail: <span className="infoP">{props.email}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default MyProfile