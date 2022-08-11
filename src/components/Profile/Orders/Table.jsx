import React from "react";

import './Table.scss'

export default ({ list, orderBy }) => (
    <div className="profile-orders-table">
        <table>
            <thead>{renderHeadRows()}</thead>
            <tbody>{renderBodyRows(list, orderBy)}</tbody>
        </table>
    </div>
)


const renderHeadRows = () => (
    <tr>
        <th className="products">Produtos</th>
        <th className="responsive-hide">Quantidade</th>
        <th className="responsive-hide">Código da compra</th>
        <th>
            <p>Valor</p>
            <p>Status</p>
        </th>
    </tr>
)

function renderBodyRows(ordersList, orderBy) {
    return (
        sortListByOptions(ordersList, orderBy).map(order => {
            return (
                <tr key={order.purchaseId}>
                    {renderProductRow(order.products)}
                    {renderQuantityRow(order.quantity)}
                    <td className="responsive-hide">{`#${order.purchaseId}`}</td>
                    <td>
                        <p>{order.price}</p>
                        <p className={order.status === "Pendente" ? "pending" : "send"}>{order.status}</p>
                    </td>
                </tr>
            )
        })
    )
}

const sortListByOptions = (ordersList, orderBy) => {
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

    return ordersList;
}

const renderProductRow = products => (
    <td className="products">
        <div className="products-row">
            <img src="/img/produtos/gloss.png" alt="" />
            <div> {products.map(products => { return <p> {products} </p> })} </div>
        </div>
    </td>
)

const renderQuantityRow = quantities => (
    <td className="responsive-hide">{quantities.map(quantity => <p> {quantity} </p>)}</td>
)

const sum = numbersArray => {
    let sum = 0;
    numbersArray.forEach(number => sum += +number);
    return sum;
}