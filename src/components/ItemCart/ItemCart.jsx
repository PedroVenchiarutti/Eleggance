import React, { useState } from "react";
import { shelfProducts } from "../../api/mock";

const ItemCart = ({ product }) => {
  const [quantidade, setQuantidade] = useState(5);
  if (!product) return;

  const valor = product;
  return (
    <>
      <td className="tdCol-1">
        <img src={product.image} alt="teste" className="imgCartItem" />
        <div>
          <span className="title-product-promo">{product.name}</span>
          <span className="full-price-promo">{product.price}</span>
        </div>
        <img src="icons/trashIcon.svg" className="iconTrash" />
      </td>
      <td className="tdCol-2">
        <span>
          <input
            min={0}
            max={100}
            type="number"
            defaultValue={parseFloat(quantidade)}
            onChange={(e) => {
              setQuantidade(e.target.value);
            }}
          />
        </span>
      </td>
      <td className="tdCol-3">
        <span>{product.discount}</span>
      </td>
      <td className="tdCol-4">
        <span className="total-price">
          R$ {parseFloat((product.value * quantidade).toFixed(2))}
        </span>
      </td>
    </>
  );
};

export default ItemCart;
