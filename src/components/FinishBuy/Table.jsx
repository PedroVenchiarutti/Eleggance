import Table from '../Table/Table';

export default ({ infos }) => {
    const getPriceString = price => 'R$' + price.toFixed(2).replace('.', ',');
    const getTotalPrice = () =>
        getPriceString(infos.subTotalPrice + infos.shippingPrice - ((infos.discount.byPaymentMethod || 0) + ((infos.discount.byCoupon / 100) * infos.subTotalPrice || 0)));

    return (

        <table>
            <tbody>
                <tr>
                    <td>Subtotal ({infos.totalItems})</td>
                    <td> {getPriceString(infos.subTotalPrice)}</td>
                </tr>
                <hr />
                <tr>
                    <td>Entrega</td>
                    <td> {getPriceString(infos.shippingPrice)}</td>
                </tr>
                <hr />
                {
                    infos.paymentMethod ?
                        <>
                            <tr>
                                <td>Desconto do {infos.paymentMethod}</td>
                                <td> {getPriceString(infos.discount.byPaymentMethod)}</td>
                            </tr>
                            <hr />
                        </> : ''
                }
                {
                    infos.discount.byCoupon ?
                        <>
                            <tr>
                                <td>Desconto do cupom</td>
                                {/* <td>{getPriceString(infos.discount.byCoupon)}</td> */}
                                <td>R${((infos.discount.byCoupon/100) * infos.subTotalPrice).toFixed(2)}</td>
                            </tr>
                            <hr />
                        </> : ''
                }
                <tr>
                    <td>Total</td>
                    <td> {getTotalPrice()}</td>
                </tr>
            </tbody>
        </table>
    );
}