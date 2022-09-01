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
          <SaleTag/>
        </div>
      </div>
        <div className="quantity">
          <div className="increaseDecrease">
            <button type="button" onClick={() => setQuantity(product.id, +product.qt - 1)} className="increaseDecreaseButton">-</button>
            <input type="number" className="quantityInput" value={product.qt} onChange={e => setQuantity(product.id, e.target.value)} />
            <button type="button" onClick={() => setQuantity(product.id, +product.qt + 1)} className="increaseDecreaseButton">+</button>
          </div>
          <div className="deleteProduct">
            <button type="button" className="removeItem" onClick={() => removeItem(product.id)}>
            <img src="/icons/icon-trash.svg" alt="iconedolixo" />
            Excluir Produto
            </button>
          </div>
        </div>
        <div className="price">
          <p>R${product.value}</p>
        </div>
        <div className="totalValue">
          <p>R${product.value * +product.qt}</p>
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