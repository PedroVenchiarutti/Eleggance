import React, { useEffect, useState } from "react"

import { Navbar } from '../../components/Navbar/index';
import ToHome from '../../components/ToHome/ToHome'
import ClientMenu from '../../components/ClientMenu/ClientMenu'
import MainHeader from '../../components/Profile/common/MainHeader'
import AddressForm from '../../components/Profile/Addresses/Form'
import Addresses from '../../components/Profile/Addresses/Content'
import Footer from '../Footer/Footer'

import './Addresses.scss'

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
        <div>
            <Navbar />
            <ToHome />

            <div className="address-container">
                <ClientMenu selected='enderecos' />

                <div className="main-content">
                    <MainHeader title="Cadastrar novo endereço">
                        <AddressForm onFormSubmit={onAddressFormSubmit} />
                    </MainHeader>

                    <Addresses title="Meus endereços" list={addresses} removeAddress={removeAddress} />
                </div>
            </div>

            <Footer />
        </div>
    )
}