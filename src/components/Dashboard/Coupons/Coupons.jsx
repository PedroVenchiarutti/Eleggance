import { useState } from "react";

import Table from "../../Table/Table";
import CouponModal from './Modal'
import Button from '../../Button/Button';

import '../Dashboard.scss'
import './Coupons.scss'

export default () => {
    const headerColumns = ["Código", "Valor mínimo", "Valor desconto", <th className="responsive-hide">Data de início</th>, <th className="responsive-hide">Data de expiração</th>, "Quantidade"];
    const bodyRows = [["123-AB", "R$199,99", "20%", <td className="responsive-hide">02/08/2022</td>, <td className="responsive-hide">12/08/2022</td>, "40"],["123-CD", "R$249,99", "30%", <td className="responsive-hide">02/08/2022</td>, <td className="responsive-hide">12/08/2022</td>, "20"]];

    const [modalVisibility, setModalVisibility] = useState(false);
    const toggleCreateModal = () => setModalVisibility(!modalVisibility);

    return (
        <div className="content">
            <Table headerColumns={headerColumns} bodyRows={bodyRows} />
            <CouponModal showModal={modalVisibility} toggleVisibility={toggleCreateModal} />

            <Button className="toggle-modal-button" onClick={() => toggleCreateModal()}>+</Button>
        </div>
    )
}