import Table from "../../Table/Table";

import '../Dashboard.scss'

export default () => {
    const headerColumns = ["Produtos", "Quantidade", "Valor", <th className="responsive-hide">Status pagamento</th>, <th className="responsive-hide">Status entrega</th>, "Código da venda"];

    const orders = [{
        code: 123,
        product: "Batom cor rosê cremoso",
        quantity: 4,
        value: "R$99,99",
        paymentStatus: <td className="responsive-hide">Pendente</td>,
        deliverStatus: <td className="responsive-hide">Pendente</td>
    }, {
        code: 1223,
        product: "Batom cor verde cremoso",
        quantity: 2,
        value: "R$99,99",
        paymentStatus: <td className="responsive-hide">Pendente</td>,
        deliverStatus: <td className="responsive-hide">Pendente</td>
    }
    ]

    return (
        <div className="content">
            <Table headerColumnsArray={headerColumns} objectsArray={orders} />
        </div>
    )
}