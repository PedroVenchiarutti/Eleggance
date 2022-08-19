import { useContext } from "react";
import { CouponContext } from "../../../contexts/coupon";

import Table from "./Table";
import CouponModal from './Modal'
import Button from '../../Button/Button';

import '../Dashboard.scss'
import './Coupons.scss'

export default () => {
    const { toggleModalVisibility } = useContext(CouponContext);

    return (
        <div className="content">
            <Table />
            <CouponModal />

            <Button className="toggle-modal-button" onClick={() => toggleModalVisibility()}>+</Button>
        </div>
    )
}