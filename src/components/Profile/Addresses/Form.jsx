import React from "react";

import './Form.scss';

export default () => (
    <div className="address-form-container">
        <form>
            <div className="row">
                <div className="form-group street">
                    <label>Rua:</label>
                    <input />
                </div>
                <div className="form-group number">
                    <label>Número:</label>
                    <input />
                </div>
                <div className="form-group complement">
                    <label>Complemento:</label>
                    <input />
                </div>
                <div className="form-group district">
                    <label>Bairro:</label>
                    <input />
                </div>
            </div>

            <div className="row">
                <div className="second-row">
                    <div>
                        <div className="form-group">
                            <label>Cidade:</label>
                            <input />
                        </div>
                        <div className="form-group">
                            <label>CEP:</label>
                            <input />
                        </div>
                    </div>
                    <div>
                        <button type="submit">Salvar endereço</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
)