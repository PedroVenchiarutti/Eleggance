import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart";

const ItemCart = ({ product }) => {

  const { removeItem } = useContext(CartContext)

  const [quantidade, setQuantidade] = useState(5);

  console.log(product)
  const valor = product;
  useEffect(() => {
    setQuantidade(product.qt)
  }, [])
  return (
    <div className="item">
      <div className="itemInfo">
        <img src={product.url_img} alt="aa" className="imgItem" />
        <div>
          <p>{product.name}</p>

        </div>
      </div>
        <div className="quantity">
          <div className="increaseDecrease">
            <button type="button" onClick={() => setQuantidade(quantidade - 1)}>-</button>
            <input type="number" className="quantityInput" value={quantidade} onChange={e => setQuantidade(e.target.value)} />
            <button type="button" onClick={() => setQuantidade(quantidade + 1)}>+</button>
          </div>
          <div className="deleteProduct">
            <img src="/icons/icon-trash.svg" alt="iconedolixo" />
            <a href="#">Excluir Produto</a>
          </div>
        </div>
        <div className="price">
          <p>R${product.value}</p>
        </div>
        <div className="totalValue">
          <p>R${product.value * quantidade}</p>
        </div>
    </div>
    // <>
    //   <div className="row first">
    //     <label className="nameItem">{product.name}</label>
    //   </div>
    //   <div className="row second">
    //     <aside>
    //       <img src={product.url_img} alt="teste" className="imgCartItem" />
    //       <input
    //         min={0}
    //         max={100}
    //         type="number"
    //         defaultValue={parseFloat(quantidade)}
    //         onChange={(e) => {
    //           setQuantidade(e.target.value);
    //         }}
    //       />
    //     </aside>
    //     <aside>
    //       <label>
    //         De {"  "}
    //         <span className="full-price-promo">{product.price}</span>
    //       </label>
    //       <label>
    //         Por {"  "}
    //         <span className="price-discount">{product.discount}</span>
    //       </label>
    //       <label className="total-price">
    //         Total R$ {parseFloat((product.value * quantidade).toFixed(2))}
    //       </label>
    //       <button onClick={ev => removeItem(ev, product.id)}>
    //         <img src="icons/trashIcon.svg" />
    //       </button>
    //     </aside>
    //   </div>
    // </>
  );
};

export default ItemCart;
