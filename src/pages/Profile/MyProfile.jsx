import React from "react";

import { Navbar } from "../../components/Navbar";
import ContentHeader from "../../components/Profile/ContentHeader";
import Select from "../../components/Select/Select";
import MainHeader from "../../components/Profile/MainHeader";
import OrdersTable from "../../components/Profile/OrdersTable";
import ClientMenu from "../../components/ClientMenu/ClientMenu";
import Footer from "../Footer/Footer";
import ToHome from '../../components/ToHome/ToHome'

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
            <Navbar />
            <ToHome />

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