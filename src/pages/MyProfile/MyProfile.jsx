import React, { useContext } from "react";
import Footer from "../Footer/Footer";
import { Navbar } from "../../components/Navbar";
import './MyProfile.scss';
import { Link } from "react-router-dom";
import ClientMenu from '../../components/ClientMenu/ClientMenu';
import Data from "../../components/Data/Data";

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
                <ClientMenu selected='perfil' />
                <div className="ordersAndInfo">
                    <div className="orders">
                        <div className="orderText">
                            <p className="recentOrders">VOCÊ AINDA NÃO TEM PEDIDOS RECENTES.</p>
                            <p className="orderDetails">Os detalhes dos seus pedidos mais recentes poderão ser acompanhados nesta área</p>
                        </div>
                    </div>
                    <Data />
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default MyProfile