import { useContext } from "react";
import { CouponContext } from "../../../contexts/coupon";

import Table from "../../Table/Table";
import CouponModal from './Modal'
import Button from '../../Button/Button';

import '../Dashboard.scss'
import './Coupons.scss'

export default () => {
    const { coupons, toggleModalVisibility } = useContext(CouponContext);
    const headerColumns = ["Código", "Valor mínimo", "Valor desconto", <th className="responsive-hide">Data de início</th>, <th className="responsive-hide">Data de expiração</th>, "Quantidade"];

    return (
        <div className="content">
            <Table headerColumnsArray={headerColumns} objectsArray={coupons} />
            <CouponModal />

            <Button className="toggle-modal-button" onClick={() => toggleModalVisibility()}>+</Button>
        </div>
    )
}