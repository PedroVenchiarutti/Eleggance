import React from "react";

import './Table.scss'

export default ({ list, removeAddress }) => (
    <div className="table-container">
        <table>
            <thead>{renderHeadRows()}</thead>
            <tbody>{renderBodyRows(list, removeAddress)}</tbody>
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
function renderBodyRows(addressesList, removeAddress) {
    console.log(removeAddress)
    return (
        addressesList.map(address => {
            return (
                <tr key={address.cep}>
                    <td className="address">{address.fullAddressText}</td>
                    {getTdButtons(address.cep, removeAddress)}
                </tr>
            )
        })
    )
}

const getTdButtons = (addressKey, removeAddress) => (
    <td>
        <button><img src="/icons/icon-edit-address.svg" alt="Editar" /></button>
        <button onClick={() => removeAddress(addressKey)}><img src="/icons/icon-trash.svg" alt="Remover" /></button>
    </td>
)