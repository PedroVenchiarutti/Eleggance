import Button from '../../Button/Button';

import './Modal.scss';

export default ({ showModal, toggleVisibility }) => {
    return (
        <div className="create-modal" style={{ display: showModal ? "block" : "none" }}>
            <form>
                <h2 className="modal-title">Cadastrar cupom</h2>
                <div className="form-group">
                    <label>Código</label>
                    <input />
                </div>

                <div className="form-group">
                    <label>Valor mínimo</label>
                    <input />
                </div>

                <div className="form-group">
                    <label>Valor desconto</label>
                    <input />
                </div>

                <div className="form-group">
                    <label>Data de expiração</label>
                    <input type="date" />
                </div>

                <div className="form-group">
                    <label>Quantidade disponível</label>
                    <input />
                </div>

                <div className="buttons-div">
                    <Button type="button" className="cancel-button" onClick={() => toggleVisibility()}>Cancelar</Button>
                    <Button type="button" className="submit-button">Salvar</Button>
                </div>
            </form>
        </div>
    )
}