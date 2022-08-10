import React from "react";
import ContentHeader from "../common/ContentHeader";
import Table from "./Table";

import './Content.scss';

export default ({title, list}) => (
    <div className="addresses">
        <ContentHeader title={title} />
        <Table list={list} />
    </div>
)