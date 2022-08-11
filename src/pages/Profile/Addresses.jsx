import React from "react"

import { Navbar } from '../../components/Navbar/index';
import ToHome from '../../components/Profile/common/ToHome'
import { AddressProvider } from "../../contexts/address";
import Addresses from '../../components/Profile/Addresses/Content'
import Footer from '../Footer/Footer'

export default () => (
    <div>
        <Navbar />
        <ToHome />
        <AddressProvider>
            <Addresses />
        </AddressProvider>
        <Footer />
    </div>
)
