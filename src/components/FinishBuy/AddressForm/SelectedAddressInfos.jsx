import { useState } from "react";
import { Link } from "react-router-dom";
import Api from "../../../api/api";

export default ({ addressId }) => {
    const [addressText, setAddressText] = useState('');

    if (addressId) {
        Api.get(`api/protected/addresses/${addressId}`).then(resp => {
            const address = resp.data[0];
            setAddressText(`${address.address} - ${address.cep} - ${address.district} | ${address.city}`);
        });

        return (
            <div className="address-infos">
                <span>{addressText}</span>
                <button className="edit-finish">
                    <Link to="/perfil/enderecos"><img src="/icons/icon-edit.svg" /></Link>
                </button>
            </div>
        )
    } else return;
}