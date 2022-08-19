import { useContext } from "react"
import { CouponContext } from "../../../contexts/coupon"

export default () =>
    <table>
        <thead>{renderHeadRow()}</thead>
        <tbody>{renderBodyRows()}</tbody>
    </table>

const renderHeadRow = () =>
    <tr>
        <th>Código</th>
        <th>Valor mínimo</th>
        <th>Valor desconto</th>
        <th className="responsive-hide">Data de início</th>
        <th className="responsive-hide">Data de expiração</th>
        <th>Quantidade disponível</th>
    </tr>

const renderBodyRows = () =>
    useContext(CouponContext).coupons.map(coupon =>
        <tr key={coupon.id}>
            <td>{coupon.id}</td>
            <td>{coupon.minValue}</td>
            <td>{coupon.discountValue}</td>
            <td className="responsive-hide">{coupon.initialDate}</td>
            <td className="responsive-hide">{coupon.expirationDate}</td>
            <td>{coupon.availableQuantity}</td>
        </tr>
    )