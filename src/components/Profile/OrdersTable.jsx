import React from "react";

import './OrdersTable.scss'

export default props => (
    <div className="profile-orders-table">
        <table>
            {renderHeadRows()}
            {renderBodyRows(props.list)}
        </table>
    </div>
)

function renderHeadRows() {
    return (
        <thead>
            <tr>
                <th>Produtos</th>
                <th>Quantidade</th>
                <th>Código da compra</th>
                <th>Valor</th>
                <th>Status</th>
            </tr>
        </thead>
    )
}

function renderBodyRows(ordersList) {
    return (
        <tbody>
            {
                ordersList.map(order => {
                    return (
                        <tr key={order.purchaseId}>
                            <td>{order.products.map(products => { return <p> {products} </p> })}</td>
                            <td>{order.quantity.map(quantity => { return <p> {quantity} </p> })}</td>
                            <td>{order.purchaseId}</td>
                            <td>{order.price}</td>
                            <td><p className={order.status === "Pendente" ? "pending" : "send"}></p>{order.status}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    )
}