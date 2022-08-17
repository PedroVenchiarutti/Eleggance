import Table from "../../Table/Table";

import '../Dashboard.scss'

export default () => {
    const headerColumns = ["Produtos", "Quantidade", "Valor", <th className="responsive-hide">Status pagamento</th>, <th className="responsive-hide">Status entrega</th>, "Código da venda"];
    const pedidos = [["Batom cor rosê cremoso", "2", "R$99.99", <td className="responsive-hide">Pendente</td>, <td className="responsive-hide">Pendente</td>, "123"], ["Batom cor verde cremoso", "2", "R$99.99", <td className="responsive-hide">Pendente</td>, <td className="responsive-hide">Pendente</td>, "1223"]];

    return (
        <div className="content">
            <Table headerColumns={headerColumns} bodyRows={pedidos} />
        </div>
    )
}