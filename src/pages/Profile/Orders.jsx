import React, { useState } from "react";

import { Navbar } from "../../components/Navbar";
import ToHome from '../../components/ToHome/ToHome'

import ClientMenu from "../../components/ClientMenu/ClientMenu";

import MainHeader from '../../components/Profile/common/MainHeader'
import ContentHeader from '../../components/Profile/common/ContentHeader'
import Select from "../../components/Select/Select";
import OrdersTable from '../../components/Profile/Orders/OrdersTable'

import Footer from "../Footer/Footer";

import { myOrders } from '../../api/mock'

import "./Orders.scss"

export default props => {
    const orderByOptions = [
        { value: "price", text:"Preço" },
        { value: "products", text:"Produtos" },
        { value: "quantity", text:"Quantidade" },
        { value: "purchaseId", text:"Código da compra" },
        { value: "status", text:"Status" }
    ]

    const [selectValue, setSelectValue] = useState("");
    function updateSelectState(e) {
        setSelectValue(e.target.value);
    }

    return (
        <div>
            <Navbar />
            <ToHome />

            <div className="my-profile-container">
                <ClientMenu selected='pedidos' />

                <div className="main-content">
                    <MainHeader body="Todas as suas compras ficam salvas aqui. Caso deseje rever ou tenha algum problema, entre em contato conosco." />

                    <div className="orders">
                        <ContentHeader title="Meus pedidos">
                            <Select label="Ordenar por:" options={orderByOptions} onChange={updateSelectState} />
                        </ContentHeader>
                        <OrdersTable list={myOrders} orderBy={selectValue} />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}