import React from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import SaleTag from "../Profile/common/SaleTag";

const ItemCart = ({ product }) => {
  const { removeItem, setQuantity } = useContext(CartContext);

  return (
    <div className="item">
      <div className="itemInfo">
        <img src={product.image} alt="aa" className="imgItem" />
        <div>
          <p>{product.name}</p>
          <SaleTag />
        </div>
      </div>
      <div className="quantity">
        <div className="increaseDecrease">
          <button
            type="button"
            onClick={() => setQuantity(product.id, +product.qt - 1)}
            className="increaseDecreaseButton"
          >
            -
          </button>
          <input
            type="number"
            className="quantityInput"
            min="0"
            value={product.qt}
            onChange={(e) => setQuantity(product.id, e.target.value)}
          />
          <button
            type="button"
            onClick={() => setQuantity(product.id, +product.qt + 1)}
            className="increaseDecreaseButton"
          >
            +
          </button>
        </div>
        <div className="deleteProduct">
          <button
            type="button"
            className="removeItem"
            onClick={() => removeItem(product.id)}
          >
            <img src="/icons/icon-trash.svg" alt="iconedolixo" />
            Excluir Produto
          </button>
        </div>
      </div>
      <div className="prices">
        <div className="price">
          <p>R${product.value}</p>
        </div>
        <div className="totalValue">
          <p>R${(product.value * +product.qt).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
