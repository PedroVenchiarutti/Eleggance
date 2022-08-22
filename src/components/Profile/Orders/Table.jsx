import React from "react";
import { useFetch } from "../../../hooks/useFetch";

import Loading from '../../SpinerLoader'
import Table from "../../Table/Table";

import './Table.scss'

export default ({ orderBy }) => {
    const { data } = useFetch('api/protected/request/');

    return (
        <div className="table-content">
            {
                data.length ?
                    <Table
                        headerColumnsArray={getHeadRows()}
                        bodyObjectsArray={getBodyObjects(data, orderBy)}
                    /> : <Loading />
            }
        </div>
    )
}

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
    const status = order.status ?? "Pendente";
    const products = order.products;

    return {
        products: getOrderProductsInfos(products),
        id: <td className="responsive-hide">{order.id}</td>,
        otherInfos: getInfoRow(status, getOrderValue(products))
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

const getOrderProductsInfos = products => (
    <>
        <td className="products">
            <div className="products-cell">
                <img src="/img/produtos/gloss.png" alt="" />
                <div>{products.map(product => <li key={product.productId} className="product-name">{product.name}</li>)}</div>
            </div>
        </td>
        <td className="responsive-hide">{products.map(product => <p>{product.qt_product}</p>)}</td>
    </>
)

const getInfoRow = (status, price) => (
    <td>
        <p>R${price}</p>
        <p className={status === "Pendente" ? "pending" : "send"}>{status}</p>
    </td>
)

const getOrderValue = (products) => {
    let sum = 0;
    products.forEach(product => sum += +product.value);
    return sum;
}