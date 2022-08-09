import React, { useState } from "react"

import { Navbar } from '../../components/Navbar/index';
import ToHome from '../../components/ToHome/ToHome'
import ClientMenu from '../../components/ClientMenu/ClientMenu'
import MainHeader from '../../components/Profile/common/MainHeader'
import AddressForm from '../../components/Profile/Addresses/Form'
import Addresses from '../../components/Profile/Addresses/Content'

import './Addresses.scss'

export default () => {
    const [addresses, setAddressesList] = useState([]);

    const onAddressFormSubmit = (datas) => {
        let address = {
            cep: datas.cep,
            fullAddressText: `${datas.street}, ${datas.number} - ${datas.district} - ${datas.city} ${datas.cep}`
        }
        setAddressesList(addresses => [...addresses, address]);
    }

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

                    <Addresses title="Meus endereços" list={addresses} />
                </div>
            </div>
        </div>
    )
}