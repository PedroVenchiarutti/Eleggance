import React, { useContext } from "react";
import Footer from "../Footer/Footer";
import { Navbar } from "../../components/Navbar";
import './MyProfile.scss';
import { Link } from "react-router-dom";
import ClientMenu from '../../components/ClientMenu/ClientMenu';
import Data from "../../components/Data/Data";
import ToHome from "../../components/ToHome/ToHome";

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