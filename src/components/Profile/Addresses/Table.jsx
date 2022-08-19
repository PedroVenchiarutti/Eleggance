import React, { useContext } from "react";
import { AddressContext } from "../../../contexts/address";

import Table from '../../Table/Table';

import './Table.scss'

export default () => <Table headerColumnsArray={getHeadRow()} bodyObjectsArray={getBodyObjects()} />

const getHeadRow = () => [<>
    <th className="address">Endereço</th>
    <th>Ações</th>
</>]

const getBodyObjects = () => useContext(AddressContext).addresses.map(address => {
    return {
        key: address.cep,
        text: <td className="address">{address.fullAddressText}</td>,
        buttons: getTdButtons(address.cep)
    }
})

const getTdButtons = (addressKey) => {
    const { editAddressClick, removeAddressClick } = useContext(AddressContext);

    return (
        <td>
            <button onClick={() => editAddressClick(addressKey)}><img src="/icons/icon-edit-address.svg" alt="Editar" /></button>
            <button onClick={() => removeAddressClick(addressKey)}><img src="/icons/icon-trash.svg" alt="Remover" /></button>
        </td>
    )
}