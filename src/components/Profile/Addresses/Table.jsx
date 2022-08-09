import React from "react";

import './Table.scss'

export default ({list}) => (
    <div className="table-container">
        <table>
            {renderHeadRows()}
            {renderBodyRows(list)}
        </table>
    </div>
)

function renderHeadRows() {
    return (
        <thead>
            <tr>
                <th className="address">Endereço</th>
                <th>Ações</th>
            </tr>
        </thead>
    )
}

// TODO: Get full address text based on cep.
function renderBodyRows(addressesList) {
    return (
        <tbody>
            {
                addressesList.map(address => {
                    return (
                        <tr key={address.cep}>
                            <td className="address">{address.fullAddressText}</td>
                            {getTdButtons()}
                        </tr>
                    )
                })
            }
        </tbody>
    )
}

function getTdButtons() {
    return (
        <td>
            <button><img src="/icons/icon-edit-address.svg" alt="Editar" /></button>
            <button><img src="/icons/icon-trash.svg" alt="Remover" /></button>
        </td>
    )
}