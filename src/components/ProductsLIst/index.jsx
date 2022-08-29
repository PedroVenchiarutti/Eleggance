import React from "react";
import { useContext } from "react";
import ItemCart from "../ItemCart/ItemCart";
import "./index.scss";
import { CartContext } from '../../contexts/cart';

export default () => useContext(CartContext).cart.map((cartItem, index) => 
  <tr key={index} className="itemCart"><ItemCart product={cartItem} /></tr>);

// const ProductsList = ({ products }) => {
//   if (!products) return;
//   return (
//     <>
//       {products.map((product, index) => {
//         return (
//           <tr key={index} className="itemCart">
//             <ItemCart product={product} />
//           </tr>
//         );
//       })}
//     </>
//   );
// };

// export default ProductsList;
