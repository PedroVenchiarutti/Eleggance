import React from "react";
import { Link } from "react-router-dom";

import { Navbar } from "../../components/Navbar";
import ContentHeader from "../../components/Profile/ContentHeader";
import Select from "../../components/Select/Select";
import MainHeader from "../../components/Profile/MainHeader";
import OrdersTable from "../../components/Profile/OrdersTable";
import ClientMenu from "../../components/ClientMenu/ClientMenu";
import Footer from "../Footer/Footer";

import { myOrders } from '../../api/mock'

import "./MyProfile.scss"

export default props => {
    const orderByOptions = [
        { value: "Preço" },
        { value: "Produtos" },
        { value: "Quantidade" },
        { value: "Código da compra" },
        { value: "Valor" },
        { value: "Status" }
    ]

    return (
        <div>
            {/* <Navbar /> */}

            <div className="pageTitle">
                <Link to="/home" >
                    <img src="/icons/iconmonstr-home.svg" alt="casa" />
                </Link>
                <h4>Meu Perfil</h4>
            </div>

            <div className="my-profile-container">
                <ClientMenu selected='pedidos' />

                <div className="main-content">
                    <MainHeader text="Todas as suas compras ficam salvas aqui. Caso deseje rever ou tenha algum problema, entre em contato conosco." />

                    <div className="orders">
                        <ContentHeader title="Meus pedidos">
                            <Select label="Ordenar por:" options={orderByOptions} />
                        </ContentHeader>
                        <OrdersTable list={myOrders} />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}