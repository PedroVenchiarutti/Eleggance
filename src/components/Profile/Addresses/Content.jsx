import React from "react";
import ContentHeader from "../common/ContentHeader";
import Table from "./Table";

import './Content.scss';

export default ({ title, list, removeAddress }) => (
    <div className="content">
        <ContentHeader title={title} />
        <Table list={list} removeAddress={removeAddress} />
    </div>
)