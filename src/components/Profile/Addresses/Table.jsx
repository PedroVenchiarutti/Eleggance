import React, { useContext } from "react";
import { AddressContext } from "../../../contexts/address";

import Loading from '../../SpinerLoader'
import Table from '../../Table/Table';

import './Table.scss'

export default () => {
    const { addresses } = useContext(AddressContext);
        
    return <div className="table-content">
        { addresses.length ? <Table headerColumnsArray={getHeadRow()} bodyObjectsArray={getBodyObjects(addresses)} /> : <Loading /> }
    </div>
}

const getHeadRow = () => [<>
    <th className="address">Endereço</th>
    <th>Ações</th>
</>]

const getBodyObjects = (addresses) => addresses.map(address => {
    return {
        key: address.id,
        text: <td className="address">{address.address} - {address.district} - {address.city} {address.cep}</td>,
        buttons: getTdButtons(address.cep)
    }
})

const getTdButtons = (cep) => {
    const { editAddressClick, removeAddressClick } = useContext(AddressContext);

    return (
        <td>
            <button onClick={() => editAddressClick(cep)}><img src="/icons/icon-edit-address.svg" alt="Editar" /></button>
            <button onClick={() => removeAddressClick(cep)}><img src="/icons/icon-trash.svg" alt="Remover" /></button>
        </td>
    )
}