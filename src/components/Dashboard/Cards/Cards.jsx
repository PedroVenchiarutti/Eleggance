import { useFetch } from '../../../hooks/useFetch';
import Card from "./Card";
import Loading from "../../SpinerLoader";

import './Cards.scss'

export default () => {
    let { data } = useFetch('api/protected/dashboard/');

    return (
        <div className="content">{
            data.length ?
                <div className="dashboard-cards-container">
                    {/* <Card text="Reservas" quantity={data[0].reservations} /> */}
                    <Card link="/admin/cupons" text="Cupons gerados" quantity={data[0].discounts} />
                    <Card link="/admin/pedidos" text="Pedidos" quantity={data[0].requests} />
                    <Card link="/admin/pedidos" text="Usuários cadastrados" quantity={data[0].users} />
                </div> : <Loading />
        }</div>
    )
}