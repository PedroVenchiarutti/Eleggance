import { useFetch } from '../../../hooks/useFetch';
import Card from "./Card";
import Loading from "../../SpinerLoader";

import './Cards.scss'

export default () => {
    let { data } = useFetch('api/protected/dashboard/');

    return data.length ?
        <div className="dashboard-cards-container">
            <Card text="Reservas" quantity={data[0].reservations} />
            <Card text="Cupons gerados" quantity={data[0].discounts} />
            <Card text="Pedidos" quantity={data[0].requests} />
            <Card text="Usuários cadastrados" quantity={data[0].users} />
        </div> :
        <div className="dashboard-cards-container">
            <div><Loading /></div>
        </div>
}