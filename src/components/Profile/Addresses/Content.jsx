import React from "react";
import ContentHeader from "../common/ContentHeader";
import Table from "./Table";

import './Content.scss';

export default props => (
    <div className="addresses">
        <ContentHeader title={props.title} />
        <Table list={props.list} />
    </div>
)