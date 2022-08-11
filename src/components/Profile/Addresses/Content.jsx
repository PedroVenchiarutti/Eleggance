import React, { useEffect, useState } from "react";

import ClientMenu from "../../ClientMenu/ClientMenu";
import MainHeader from '../common/MainHeader';
import Form from './Form';
import ContentHeader from '../common/ContentHeader';
import Table from "./Table";

import '../Profile.scss'

export default () => {
    const addressesFromStorage = sessionStorage.getItem('addresses');
    const [addresses, setAddressesList] = useState(addressesFromStorage ? JSON.parse(addressesFromStorage) : []);

    const onAddressFormSubmit = (datas) => {
        let address = {
            cep: datas.cep,
            fullAddressText: `${datas.street}, ${datas.number} - ${datas.district} - ${datas.city} ${datas.cep}`
        }
        if (!addresses.find(item => item.cep == address.cep)) setAddressesList([...addresses, address]);
    }

    const removeAddress = (cep) => setAddressesList(addresses.filter(item => item.cep != cep));

    useEffect(() => {
        sessionStorage.setItem('addresses', JSON.stringify(addresses));
    }, [addresses]);

    return (
        <div className="profile-container">
            <ClientMenu selected="enderecos" />

            <div className="main-content">
                <MainHeader title="Cadastrar novo endereço">
                    <Form onFormSubmit={onAddressFormSubmit} />
                </MainHeader>

                <div className="content">
                    <ContentHeader title="Meus endereços" />
                    <Table list={addresses} removeAddress={removeAddress} />
                </div>
            </div>
        </div>
    )
}