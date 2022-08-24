import React from "react";
import { useFetch } from "../../../hooks/useFetch";

import Loading from '../../SpinerLoader'
import Table from "../../Table/Table";

import './Table.scss'

export default ({ orderBy }) => {
    const { data } = useFetch('api/protected/request/');

    return (
        <div className="table-content">{
            data.length ?
                <Table headerColumnsArray={getHeadRows()} bodyObjectsArray={getBodyObjects(data, orderBy)} /> : <Loading />
        }</div>
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
    return {
        products: getOrderProductsInfos(order.products),
        id: <td className="responsive-hide">{order.id}</td>,
        otherInfos: getInfoCell(order.status, order.price)
    }
});

/**
 * Ordena a lista de acordo com a opção selecionada.
 */
const sortListByOptions = (ordersList, orderBy) => {
    // Mapeia a lista pra facilitar a ordenação da lista.
    ordersList = ordersList.map(order => {
        const products = order.products;

        return {
            id: order.id,
            products,
            quantity: getProductsQuantity(products),
            price: getOrderPrice(products),
            status: order.status ?? "Pendente"
        }
    });

    switch (orderBy) {
        case 'price':
            ordersList.sort((a, b) => a.price > b.price)
            break;
        case 'products':
            ordersList.sort((a, b) => a.products.sort() > b.products.sort())
            break;
        case 'quantity':
            ordersList.sort((a, b) => a.quantity > b.quantity)
            break;
        case 'purchaseId':
            ordersList.sort((a, b) => a.id > b.id)
            break;
        case 'status':
        default:
            ordersList.sort((a, b) => a.status.localeCompare(b.status))
            break;
    }

    return ordersList;
}

/**
 * Retorna o nome do produto e quantidade do pedido.
 */
const getOrderProductsInfos = products => (
    <>
        <td className="products">
            <div className="products-cell">
                <img src="/img/produtos/gloss.png" alt="" />
                <div>{products.map(product => <p className="product-name">{product.name}</p>)}</div>
            </div>
        </td>
        <td className="responsive-hide">{products.map(product => <p>{product.qt_product}</p>)}</td>
    </>
)

/**
 * Retorna o valor e o status do pedido.
 */
const getInfoCell = (status, price) => (
    <td>
        <p>R${price}</p>
        <p className={status === "Pendente" ? "pending" : "send"}>{status}</p>
    </td>
)

const sum = (accumulated, current) => accumulated + current;

/**
 * Retorna o total de produtos da venda.
 */
const getProductsQuantity = products => products.map(product => +product.qt_product).reduce(sum);

/**
 * Retorna o preço do pedido.
 */
const getOrderPrice = products =>
    products.map(product => (+product.value * +product.qt_product) || 0).reduce(sum).toFixed(2);