import React from "react";

import './OrdersTable.scss'

export default ({list, orderBy}) => (
    <div className="profile-orders-table">
        <table>
            {renderHeadRows()}
            {renderBodyRows(list, orderBy)}
        </table>
    </div>
)


function renderHeadRows() {
    return (
        <thead>
            <tr>
                <th className="products-header">Produtos</th>
                <th className="responsive-hide">Quantidade</th>
                <th className="responsive-hide">Código da compra</th>
                <th>
                    <p>Valor</p>
                    <p>Status</p>
                </th>
            </tr>
        </thead>
    )
}

function renderBodyRows(ordersList, orderBy) {
    switch (orderBy) {
        case 'price':
            ordersList.sort((a, b) => a.price > b.price)
            break;
        case 'products':
            ordersList.sort((a, b) => a.products.sort() > b.products.sort())
            break;
        case 'quantity':
            ordersList.sort((a, b) => sum(a.quantity) > sum(b.quantity))
            break;
        case 'purchaseId':
            ordersList.sort((a, b) => a.purchaseId > b.purchaseId)
            break;
        case 'status':
        default:
            ordersList.sort((a, b) => a.status.localeCompare(b.status))
            break;
    }

    return (
        <tbody>
            {
                ordersList.map(order => {
                    return (
                        <tr key={order.purchaseId}>
                            <td>{renderProductsRow(order.products)}</td>
                            <td className="responsive-hide">{order.quantity.map(quantity => { return <p> {quantity} </p> })}</td>
                            <td className="responsive-hide">{`#${order.purchaseId}`}</td>
                            <td>
                                <p>{order.price}</p>
                                <p className={order.status === "Pendente" ? "pending" : "send"}>{order.status}</p>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
    )
}

function renderProductsRow(products) {
    return (
        <div className="products-row">
            <img src="/img/produtos/gloss.png" alt="" />
            <div>
                {products.map(products => { return <p> {products} </p> })}
            </div>
        </div>
    )
}

function sum(numbers) {
    let sum = 0;
    numbers.forEach(number => sum += +number);
    return sum;
}