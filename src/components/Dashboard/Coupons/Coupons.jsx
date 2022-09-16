import { useContext } from "react";
import { CouponContext } from "../../../contexts/coupon";

import Loading from '../../SpinerLoader'
import Table from "./Table";
import CouponModal from './Modal'
import Button from '../../Button/Button';

import '../Dashboard.scss'
import './Coupons.scss'

export default () => {
    const { loading, toggleModalVisibility } = useContext(CouponContext);

    return (
        <div className="content">
            { loading ? <Loading /> : <Table /> }
            <CouponModal />
            <Button className="toggle-modal-button" onClick={() => toggleModalVisibility()}>+</Button>
        </div>
    )
}