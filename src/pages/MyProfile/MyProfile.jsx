import React from "react";
import Footer from "../Footer/Footer";
import { Navbar } from "../../components/Navbar";
import './MyProfile.scss';

const MyProfile = (props) => {
    return (
        <div className="myProfile">
            <Navbar></Navbar>
            <div className="pageTitle">
                <img src="icons/iconmonstr-home.svg" alt="casa" />
                <h4>Meu Perfil</h4>
            </div>
            <div className="container">  
                <div className="options">
                    <ul>
                        <li className="helloUser">
                                <h3>Olá, <span className="username">{props.username}</span></h3>
                                <a href="#" className="teste">Sair</a>
                        </li>
                        <li className="option">
                            <button className="liButton">
                                <img src="/icons/user.png" alt="user" height="40px" width="50px"/>
                                <h2>Meu Perfil</h2>
                            </button>

                        </li>
                        <li className="option">
                            <button className="liButton">
                                <img src="/icons/box.png" alt="caixa" height="40px" width="50px"/>
                                <h2>Meus Pedidos</h2>
                            </button>
                        </li>
                        <li className="option">
                        <button className="liButton">
                            <img src="/icons/file.png" alt="arquivo" height="40px" width="50px"/>
                            <h2>Meus Dados</h2>
                        </button>
                        </li>
                        <li className="option">
                            <button className="liButton">
                                <img src="/icons/gps.png" alt="gps" height="40px" width="50px"/>
                                <h2>Meus Endereços</h2>
                            </button>
                        </li>
                        <li className="option">
                            <button className="liButton">
                                <img src="/icons/lock.png" alt="cadeado" height="40px" width="50px"/>
                                <h2>Meu login e senha</h2>
                            </button>
                        </li>
                        <li className="option">
                            <button className="liButton">
                                <img src="/icons/heart.png" alt="coração" height="40px" width="50px"/>
                                <h2>Meus Favoritos</h2>
                            </button>
                        </li>
                        <li className="option">
                            <button className="liButton">
                                <img src="/icons/star.png" alt="coração" height="40px" width="49px"/>
                                <h2>Minhas Avaliações</h2>
                            </button>
                        </li>
                    </ul>
                </div>
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
                                <p>Telefone Principal: <span className="infoP">{props.phone}</span></p>
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