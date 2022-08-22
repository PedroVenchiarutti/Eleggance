import { useContext } from "react"
import { CouponContext } from "../../../contexts/coupon"

import Loading from '../../SpinerLoader';
import Table from '../../Table/Table';

export default () => {
    const { coupons } = useContext(CouponContext);

    return coupons.length ?
        <Table headerColumnsArray={getHeadRow()} bodyObjectsArray={getRows(coupons)} /> : <Loading />
}

const getHeadRow = () => [
    "Código",
    "Valor mínimo",
    "Valor desconto",
    <th className="responsive-hide">Data de início</th>,
    <th className="responsive-hide">Data de expiração</th>,
    "Quantidade disponível"
]

const getRows = (couponsList) =>
    couponsList.map(coupon => {
        return {
            key: coupon.id,
            code: coupon.code,
            minValue: coupon.minValue ?? "R$ 0",
            discount: coupon.discount + '%',
            created_at: <td className="responsive-hide">{new Date(coupon.created_at).toLocaleDateString()}</td>,
            dt_limit: <td className="responsive-hide">{new Date(coupon.dt_limit).toLocaleDateString()}</td>,
            availableQuantity: coupon.availableQuantity ?? 0
        }
    })