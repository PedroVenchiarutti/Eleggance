import React from "react";

import ClientMenu from "../../ClientMenu/ClientMenu";
import ContentHeader from '../../../components/Profile/common/ContentHeader';
import Table from "./Table";

import './Content.scss'

export default () => (
    <div className="profile-container">
        <ClientMenu selected="favoritos" />

        <div className="main-content">
            <div className="content">
                <ContentHeader title="Meus favoritos" />
                <Table />
            </div>
        </div>
    </div>
)