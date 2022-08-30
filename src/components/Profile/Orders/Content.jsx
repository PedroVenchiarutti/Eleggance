import React, { useState } from "react";

import ClientMenu from '../common/ClientMenu'
import MainHeader from '../common/MainHeader';
import ContentHeader from '../common/ContentHeader';
import Select from '../../Select/Select';
import Table from './Table';

import '../Profile.scss'

export default () => {
    const orderByOptions = [
        { value: "price", text: "Preço" },
        { value: "products", text: "Produtos" },
        { value: "quantity", text: "Quantidade" },
        { value: "purchaseId", text: "Código da compra" },
        { value: "status", text: "Status" }
    ]

    const [selectValue, setSelectValue] = useState("");
    const updateSelectState = (event) => setSelectValue(event.target.value);

    return (
        <div className="profile-container">
            <ClientMenu selected="pedidos" />

            <div className="main-content">
                <MainHeader>
                    Todas as suas compras ficam salvas aqui. Caso deseje rever ou tenha algum problema, entre em contato conosco.
                </MainHeader>

                <div className="content">
                    <ContentHeader title="Meus pedidos">
                        <Select label="Ordenar por:" options={orderByOptions} onChange={updateSelectState} />
                    </ContentHeader>
                    <Table orderBy={selectValue} />
                </div>
            </div>
        </div>
    )

}   