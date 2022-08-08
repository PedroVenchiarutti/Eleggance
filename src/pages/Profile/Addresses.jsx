import React from "react"

import { Navbar } from '../../components/Navbar/index'
import ToHome from '../../components/ToHome/ToHome'
import ClientMenu from '../../components/ClientMenu/ClientMenu'
import MainHeader from '../../components/Profile/common/MainHeader'
import AddressForm from '../../components/Profile/Addresses/Form'
import Addresses from '../../components/Profile/Addresses/Content'

import { myAddresses } from "../../api/mock"

import './Addresses.scss'

export default () => (
    <div>
        {/* <Navbar /> */}
        <ToHome />

        <div className="address-container">
            <ClientMenu selected='enderecos' />

            <div className="main-content">
                <MainHeader title="Cadastrar novo endereço">
                    <AddressForm />
                </MainHeader>

                <Addresses title="Meus endereços" list={myAddresses} />
            </div>
        </div>
    </div>
)