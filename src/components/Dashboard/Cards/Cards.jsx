import Card from "./Card";

import './Cards.scss'

export default () => (
    <div className="dashboard-cards-container">
        <Card text="Reservas" quantity={0} />
        <Card text="Cupons gerados" quantity={0} />
        <Card text="Pedidos" quantity={0} />
        <Card text="Usuários cadastrados" quantity={0} />
    </div>
)