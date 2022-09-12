import React from "react";

import MainHeader from '../common/MainHeader';
import Form from './Form';
import ContentHeader from '../common/ContentHeader';
import Table from "./Table";

import '../Profile.scss'

export default () => (
    <>
        <MainHeader title="Cadastrar novo endereço">
            <Form />
        </MainHeader>

        <div className="content">
            <ContentHeader title="Meus endereços" />
            <Table />
        </div>

    </>
)