import { useState } from "react";

import Table from "../../Table/Table";
import CouponModal from './Modal'
import Button from '../../Button/Button';

import '../Dashboard.scss'
import './Coupons.scss'

export default () => {
    const headerColumns = ["Código", "Valor mínimo", "Valor desconto", "Data de início", "Data de expiração", "Quantidade"];
    const bodyRows = [["123-AB", "R$199,99", "20%", "02/08/2022", "12/08/2022", "40"],["123-CD", "R$249,99", "30%", "02/08/2022", "15/08/2022", "20"]];

    const [modalVisibility, setModalVisibility] = useState(false);
    const toggleCreateModal = () => modalVisibility ? setModalVisibility(false) : setModalVisibility(true);

    return (
        <div className="dashboard-container">
            <Table headerColumns={headerColumns} bodyRows={bodyRows} />
            <CouponModal showModal={modalVisibility} toggleVisibility={toggleCreateModal} />

            <Button className="toggle-modal-button" onClick={() => toggleCreateModal()}>+</Button>
        </div>
    )
}