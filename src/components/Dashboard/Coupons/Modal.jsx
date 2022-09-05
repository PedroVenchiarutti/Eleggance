import { useContext } from "react";
import { CouponContext } from "../../../contexts/coupon";

import Button from "../../Button/Button";

import "./Modal.scss";

export default () => {
  const {
    coupon,
    updateState,
    onFormSubmit,
    modalVisibility,
    toggleModalVisibility,
  } = useContext(CouponContext);

  return (
    <div
      className="create-modal"
      style={{ display: modalVisibility ? "block" : "none" }}
    >
      <form>
        <h2 className="modal-title">Cadastrar cupom</h2>
        <div className="form-group">
          <label>Código</label>
          <input
            value={coupon.code}
            input="text"
            style={{ textTransform: "uppercase" }}
            maxLength={6}
            onChange={(ev) => updateState("code", ev.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Valor mínimo</label>
          <input
            value={coupon.minValue}
            maxLength={6}
            type="number"
            onChange={(ev) => updateState("minValue", ev.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Valor desconto</label>
          <input
            value={coupon.discount}
            type="number"
            onChange={(ev) => updateState("discount", +ev.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Data de expiração</label>
          <input
            value={coupon.dt_limit}
            type="date"
            onChange={(ev) => updateState("dt_limit", ev.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Quantidade disponível</label>
          <input
            value={coupon.availableQuantity}
            type="number"
            onChange={(ev) => updateState("availableQuantity", ev.target.value)}
          />
        </div>

        <div className="buttons-div">
          <Button
            type="button"
            className="cancel-button"
            onClick={() => toggleModalVisibility()}
          >
            Cancelar
          </Button>
          <Button
            type="button"
            className="submit-button"
            onClick={(ev) => onFormSubmit(ev)}
          >
            Salvar
          </Button>
        </div>
      </form>
    </div>
  );
};
