import { useContext } from "react";
import { CouponContext } from "../../../contexts/coupon";

import Table from "./Table";
import Loading from '../../SpinerLoader'
import CouponModal from './Modal'
import Button from '../../Button/Button';

import '../Dashboard.scss'
import './Coupons.scss'

export default () => {
    const { coupons, toggleModalVisibility } = useContext(CouponContext);

    return (
        <div className="content">
            { coupons.length ? <Table couponsList={coupons} /> : <Loading /> }
            <CouponModal />

            <Button className="toggle-modal-button" onClick={() => toggleModalVisibility()}>+</Button>
        </div>
    )
}