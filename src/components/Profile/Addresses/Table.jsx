import React, { useContext } from "react";
import { AddressContext } from "../../../contexts/address";

import Table from '../../Table/Table';

import './Table.scss'

export default () => <Table headerColumnsArray={getHeadRow()} bodyObjectsArray={getBodyObject()} />

const getHeadRow = () => [<>
    <th className="address">Endereço</th>
    <th>Ações</th>
</>]

const getBodyObject = () => useContext(AddressContext).addresses.map(address => {
    return {
        className: 'address',
        key: address.cep,
        text: address.fullAddressText,
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