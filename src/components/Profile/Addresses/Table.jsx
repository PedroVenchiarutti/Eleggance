import React, { useContext } from "react";
import { AddressContext } from "../../../contexts/address";

import Table from '../../Table/Table';
import TrashButton from "../common/TrashButton";

import './Table.scss'

export default () => {
    const { addresses } = useContext(AddressContext);

    return (
        <div className="table-content">
            <Table headerColumnsArray={getHeadRow()} bodyObjectsArray={getBodyObjects(addresses)} />
        </div>
    )
}

const getHeadRow = () => [<>
    <th className="address">Endereço</th>
    <th>Ações</th>
</>]

const getBodyObjects = (addresses) => addresses.map(address => {
    return {
        key: address.id,
        text: <td className="address">{address.address} - {address.district} - {address.city} {address.cep}</td>,
        buttons: getTdButtons(address.id, address.cep)
    }
})

const getTdButtons = (addressId, cep) => {
    const { editAddressClick, removeAddressClick } = useContext(AddressContext);

    return (
        <td>
            <button className="edit-button" onClick={() => editAddressClick(addressId, cep)}><img src="/icons/icon-edit-address.svg" alt="Editar" /></button>
            <TrashButton onClick={() => removeAddressClick(addressId)} />
        </td>
    )
}