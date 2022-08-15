import React, { useContext } from "react";
import { AddressContext } from "../../../contexts/address";

import './Table.scss'

export default () => (
    <div className="table-container">
        <table>
            <thead>{renderHeadRows()}</thead>
            <tbody>{renderBodyRows()}</tbody>
        </table>
    </div>
)

const renderHeadRows = () => (
    <tr>
        <th className="address">Endereço</th>
        <th>Ações</th>
    </tr>
)

// TODO: Get full address text based on cep.
function renderBodyRows() {
    const { addresses } = useContext(AddressContext);

    return (
        addresses.map(address => {
            return (
                <tr key={address.cep}>
                    <td className="address">{address.fullAddressText}</td>
                    {getTdButtons(address.cep)}
                </tr>
            )
        })
    )
}

const getTdButtons = (addressKey) => {
    const { editAddressClick, removeAddressClick } = useContext(AddressContext);

    return (
        <td>
            <button onClick={() => editAddressClick(addressKey)}><img src="/icons/icon-edit-address.svg" alt="Editar" /></button>
            <button onClick={() => removeAddressClick(addressKey)}><img src="/icons/icon-trash.svg" alt="Remover" /></button>
        </td>
    )
}