import React from "react";

import ContentHeader from '../../../components/Profile/common/ContentHeader';
import Table from "./Table";

import '../Profile.scss'

export default () =>
    <div className="content">
        <ContentHeader title="Meus favoritos" />
        <Table />
    </div>;