import React from "react";
import Table from "../../Table/Table";

import './Table.scss'

export default ({ list, orderBy }) => <Table headerColumnsArray={getHeadRows()} bodyObjectsArray={getBodyObjects(list, orderBy)} />

const getHeadRows = () => [<>
    <th className="products">Produtos</th>
    <th className="responsive-hide">Quantidade</th>
    <th className="responsive-hide">Código da compra</th>
    <th>
        <p>Valor</p>
        <p>Status</p>
    </th>
</>];

const getBodyObjects = (ordersList, orderBy) => sortListByOptions(ordersList, orderBy).map(order => {
    return {
        products: getProductRow(order.products),
        quantity: getQuantityRow(order.quantity),
        id: <td className="responsive-hide">{order.purchaseId}</td>,
        otherInfos: getInfoRow(order.price, order.status)
    }
});

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

const getProductRow = products => (
    <td className="products">
        <div className="products-row">
            <img src="/img/produtos/gloss.png" alt="" />
            <div> {products.map(products => { return <p> {products} </p> })} </div>
        </div>
    </td>
)

const getQuantityRow = quantities => <td className="responsive-hide">{quantities.map(quantity => <p> {quantity} </p>)}</td>

const getInfoRow = (price, status) => (
    <td>
        <p>{price}</p>
        <p className={status === "Pendente" ? "pending" : "send"}>{status}</p>
    </td>
)

const sum = numbersArray => {
    let sum = 0;
    numbersArray.forEach(number => sum += +number);
    return sum;
}