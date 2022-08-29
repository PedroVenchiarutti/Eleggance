import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart";

const ItemCart = ({ product }) => {

  const { removeItem } = useContext(CartContext)

  const [quantidade, setQuantidade] = useState(5);

  console.log(product)
  const valor = product;
  return (
    <>
      <div className="row first">
        <label className="nameItem">{product.name}</label>
      </div>
      <div className="row second">
        <aside>
          <img src={product.image} alt="teste" className="imgCartItem" />
          <input
            min={0}
            max={100}
            type="number"
            defaultValue={parseFloat(quantidade)}
            onChange={(e) => {
              setQuantidade(e.target.value);
            }}
          />
        </aside>
        <aside>
          {/* <label>
            De {"  "}
            <span className="full-price-promo">{product.price}</span>
          </label>
          <label>
            Por {"  "}
            <span className="price-discount">{product.discount}</span>
          </label> */}
          <label className="total-price">
            Total R$ {parseFloat((product.value * quantidade).toFixed(2))}
          </label>
          <button onClick={ev => removeItem(ev, product.id)}>
            <img src="icons/trashIcon.svg" />
          </button>
        </aside>
      </div>
    </>
  );
};

export default ItemCart;
