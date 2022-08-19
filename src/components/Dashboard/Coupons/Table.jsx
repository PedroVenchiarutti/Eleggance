export default ({ couponsList }) =>
    <table>
        <thead>{renderHeadRow()}</thead>
        <tbody>{renderBodyRows(couponsList)}</tbody>
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

const renderBodyRows = (couponsList) =>
    couponsList.map(coupon =>
        <tr key={coupon.id}>
            <td>{coupon.code}</td>
            <td>{coupon.minValue ?? "R$ 0"}</td>
            <td>{coupon.discount}</td>
            <td className="responsive-hide">{coupon.created_at}</td>
            <td className="responsive-hide">{coupon.dt_limit}</td>
            <td>{coupon.availableQuantity ?? "0"}</td>
        </tr>
    )