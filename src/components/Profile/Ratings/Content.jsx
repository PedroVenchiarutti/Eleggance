import React from "react";

import ClientMenu from "../common/ClientMenu";
import ContentHeader from "../common/ContentHeader";
import Table from './Table'

import "../Profile.scss";

export default () =>
    <div className="profile-container">
        <ClientMenu selected="avaliacoes" />
        <div className="main-content">
            <div className="content">
                <ContentHeader title="Minhas avaliações" />
                <Table />
            </div>
        </div>
    </div>