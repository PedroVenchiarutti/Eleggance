import Table from "../../Table/Table";

import '../Dashboard.scss';
import './Orders.scss';

export default () => {
    const headerColumns = ["Nome do produto", "Quantidade", "Valor", <th className="responsive-hide">Status pagamento</th>, <th className="responsive-hide">Status entrega</th>, "Código da venda"];

    const orders = [{
        product: "Batom cor rosê cremoso",
        quantity: 4,
        value: "R$99,99",
        status: getOrderStatus("Pendente", "Pendente"),
        id: 123,
    }, {
        product: "Batom cor verde cremoso",
        quantity: 2,
        value: "R$99,99",
        status: getOrderStatus("Pago", "Pendente"),
        id: 1223,
    }, {
        product: "Batom cor azul cremoso",
        quantity: 1,
        value: "R$129,99",
        status: getOrderStatus("Pago", "Entregue"),
        id: 999,
    }]

    return (
        <div className="content">
            <Table headerColumnsArray={headerColumns} bodyObjectsArray={orders} />
        </div>
    )
}

const getOrderStatus = (paymentStatus, deliveryStatus) => {
    const getClass = (status) => status === "Pendente" ? "pending" : "success";

    return (
        <>
            <td className={`responsive-hide`}>
                <p className={getClass(paymentStatus)}>{paymentStatus}</p>
            </td>
            <td className={`responsive-hide`}>  
                <p className={getClass(deliveryStatus)}>{deliveryStatus}</p>
            </td>
        </>
    )
}