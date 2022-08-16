import Table from "../../Table/Table";

import './Orders.scss'

export default () => {
    const headerColumns = [<th>Produtos</th>, "Quantidade", "Valor", "Status pagamento", "Status entrega", "Código da venda"];
    const pedidos = [["Batom cor rosê cremoso", "2", "R$99.99", "Pendente", "Pendente", "123"],["Batom cor verde cremoso", "2", "R$99.99", "Pendente", "Pendente", "1223"]];

    return (
        <div className="dashboard-orders-container">
            <Table headerColumns={headerColumns} bodyRows={pedidos} />
        </div>
    )
}