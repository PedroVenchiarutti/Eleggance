import React, { useContext } from "react";

import ClientMenu from '../common/ClientMenu'
import MainHeader from '../common/MainHeader';
import Form from './Form';
import ContentHeader from '../common/ContentHeader';
import Table from "./Table";

import '../Profile.scss'

export default () => (
    <div className="profile-container">
        <ClientMenu selected="enderecos" />

        <div className="main-content">
            <MainHeader title="Cadastrar novo endereço">
                <Form />
            </MainHeader>

            <div className="content">
                <ContentHeader title="Meus endereços" />
                <Table />
            </div>
        </div>
    </div>
)