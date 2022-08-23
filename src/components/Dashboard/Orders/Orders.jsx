import { useFetch } from '../../../hooks/useFetch'

import Table from "../../Table/Table";
import Loading from '../../SpinerLoader'

import '../Dashboard.scss';
import './Orders.scss';

export default () => {
    const headerColumns = ["Nome do produto", "Quantidade", "Valor", <th className="responsive-hide">Status pagamento</th>, <th className="responsive-hide">Status entrega</th>, "Código da venda"];
    const { data } = useFetch('api/protected/request/');

    return (
        <div className="content">
            {  data.length ? <Table headerColumnsArray={headerColumns} bodyObjectsArray={getRows(data)} /> : <Loading /> }
        </div>
    )
}

const getRows = (orders) => orders.map(order => {
    const status = order.status ?? "Pendente";
    const products = order.products;

    return {
        products: getOrderProductsInfos(products),
        price: `R$${getOrderValue(products)}`,
        status: getOrderStatus(status, status),
        id: order.id
    }
});

const getOrderProductsInfos = (products) =>
    <>
        <td>{products.map(product => <p className="product-name">{product.name}</p>)}</td>
        <td>{products.map(product => <p>{product.qt_product}</p>)}</td>
    </>

const getOrderValue = (products) => {
    let sum = 0;
    products.forEach(product => sum += +product.value);
    return sum;
}

const getOrderStatus = (paymentStatus, deliveryStatus) => {
    const getClass = (status) => status === "Pendente" ? "pending" : "success";

    return (
        <>
            <td className={`responsive-hide ${getClass(paymentStatus)}`}>{paymentStatus}</td>
            <td className={`responsive-hide ${getClass(deliveryStatus)}`}>{deliveryStatus}</td>
        </>
    )
}