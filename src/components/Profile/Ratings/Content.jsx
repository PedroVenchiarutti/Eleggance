import React from "react";

import ContentHeader from "../common/ContentHeader";
import Table from './Table'

import "../Profile.scss";

export default () =>
    <div className="content">
        <ContentHeader title="Minhas avaliações" />
        <Table />
    </div>