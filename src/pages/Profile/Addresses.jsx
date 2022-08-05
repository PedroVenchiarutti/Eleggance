import React from "react"

import { Navbar } from '../../components/Navbar/index'
import ToHome from '../../components/ToHome/ToHome'
import ClientMenu from '../../components/ClientMenu/ClientMenu'
import MainHeader from '../../components/Profile/common/MainHeader'
import ContentHeader from '../../components/Profile/common/ContentHeader'

export default () => (
    <div>
        <Navbar />
        <ToHome />

        <div className="container">
            <ClientMenu selected='enderecos' />

            <div className="main-content">
                <MainHeader title="Cadastrar novo endereço">
                    {/* ADDRESS FORM */}
                </MainHeader>

                <div className="address">
                    <ContentHeader title="Meus endereços">
                        {/* ADDRESS TABLE */}
                    </ContentHeader>
                </div>
            </div>
        </div>
    </div>
)