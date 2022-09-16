import { useFetch } from '../../../hooks/useFetch';

import Loading from '../../SpinerLoader';
import Card from "./Card";
import './Cards.scss'

const initialState = {
    discounts: 0,
    requests: 0,
    users: 0
}

export default () => {
    const { data, loading } = useFetch('api/protected/dashboard');

    if (loading) return <div className="content"><Loading /></div>
    else {
        const dashboard = data[0] ?? { ...initialState };

        return <div className="content">
            <div className="dashboard-cards-container">
                {/* <Card text="Reservas" quantity={data[0].reservations} /> */}
                <Card link="/admin/cupons" text="Cupons gerados" quantity={dashboard.discounts} />
                <Card link="/admin/pedidos" text="Pedidos" quantity={dashboard.requests} />
                <Card link="#" text="Usuários cadastrados" quantity={dashboard.users} />
            </div>
        </div>
    }
}