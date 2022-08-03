import React from "react";

import { Navbar } from "../../components/Navbar";
import OrdersTable from "../../components/Profile/OrdersTable";
import Footer from "../Footer/Footer";

import { myOrders } from '../../api/mock'

import "./MyProfile.scss"
import ContentHeader from "../../components/Profile/ContentHeader";
import Select from "../../components/Select/Select";
import MainHeader from "../../components/Profile/MainHeader";

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

            <p className="profile-label">Meu perfil</p>
            <div className="my-profile-container">
                <div className="menu-container border">
                    <header>
                        <p>Olá, Pedro</p>
                        <a href="/">Sair</a>
                    </header>

                    <div className="menu-item">
                        <img src="/icons/icon-user-profile.png" alt="" />
                        <p>Meu perfil</p>
                    </div>

                    <div className="menu-item selected">
                        <img src="/icons/icon-orders.png" alt="" />
                        <p>Meus pedidos</p>
                    </div>

                    <div className="menu-item">
                        <img src="/icons/icon-datas.png" alt="" />
                        <p>Meus dados</p>
                    </div>

                    <div className="menu-item">
                        <img src="/icons/icon-address.png" alt="" />
                        <p>Meus endereços</p>
                    </div>

                    <div className="menu-item">
                        <img src="/icons/icon-login-password.png" alt="" />
                        <p>Meu login e senha</p>
                    </div>

                    <div className="menu-item">
                        <img src="/icons/icon-favorites.png" alt="" />
                        <p>Meus favoritos</p>
                    </div>

                    <div className="menu-item">
                        <img src="/icons/icon-rating.png" alt="" />
                        <p>Minhas avaliações</p>
                    </div>
                </div>

                <div className="main-content">
                    <MainHeader text="Todas as suas compras ficam salvas aqui. Caso deseje rever ou tenha algum problema, entre em contato conosco." />

                    <div className="border">
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