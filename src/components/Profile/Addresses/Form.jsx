import React from "react"
import { useContext } from "react";
import { AddressContext } from "../../../contexts/address";
import Button from "../../Button/Button";

import './Form.scss'

export default () => {
    const { address, updateState, cep, onCepChange, onFormSubmit } = useContext(AddressContext);
    return (
        <div className="address-form-container">
            <form>
                <div className="row">
                    <div className="form-group street">
                        <label>Rua:</label>
                        <input value={address.street} onChange={ev => updateState("street", ev.target.value)} />
                    </div>
                    <div className="form-group number">
                        <label>Número:</label>
                        <input value={address.number} onChange={ev => updateState("number", ev.target.value)} />
                    </div>
                    <div className="form-group complement">
                        <label>Complemento:</label>
                        <input value={address.complement} onChange={ev => updateState("complement", ev.target.value)} />
                    </div>
                    <div className="form-group district">
                        <label>Bairro:</label>
                        <input value={address.district} onChange={ev => updateState("district", ev.target.value)} />
                    </div>
                </div>

                <div className="row">
                    <div className="second-row">
                        <div className="second-row-group">
                            <div className="form-group">
                                <label>Cidade:</label>
                                <input value={address.city} onChange={ev => updateState("city", ev.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>CEP:</label>
                                <input value={cep} onChange={ev => onCepChange(ev.target.value)} />
                            </div>
                        </div>

                        <div className="button-div">
                            <Button onClick={ev => onFormSubmit(ev)}>Salvar endereço</Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}