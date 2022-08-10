import React from "react";

import './Table.scss'

export default ({ list }) => (
    <div className="table-container">
        <table>
            <thead>{renderHeadRows()}</thead>
            <tbody>{renderBodyRows(list)}</tbody>
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
function renderBodyRows(addressesList) {
    return (
        addressesList.map(address => {
            return (
                <tr key={address.cep}>
                    <td className="address">{address.fullAddressText}</td>
                    {getTdButtons()}
                </tr>
            )
        })
    )
}

const getTdButtons = () => (
    <td>
        <button><img src="/icons/icon-edit-address.svg" alt="Editar" /></button>
        <button><img src="/icons/icon-trash.svg" alt="Remover" /></button>
    </td>
)