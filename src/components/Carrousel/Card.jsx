import React, { useState } from "react";
import "./Carrousel.scss";
import SpinerLoader from "../SpinerLoader";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const [loading, setLoading] = useState(true);

  const valorConvertido = product.value;
  const valorFormatado = valorConvertido.toString().replace(".", ",");
  const priceParceled = (product.value / 12).toFixed(2);
  const priceParceledFormatado = priceParceled.toString().replace(".", ",");

  if (!product) return;

  return (
// <<<<<<< HEAD
//       <div className="container-card">
//         <div className="container-img-promo">
//           <img
//             src={product.url_img}
//             alt="teste"
//             className="product-img-carrousel"
//           />
//           <div className="container-text-product">
//             <span className="title-product-promo">{product.name}</span> {/*Se colocar br aqui quebra o /produtos, esse card é usado no carrousel e no /produtos */}
//             <span className="full-price-promo">{product.description}</span><br />
//             <span className="cash-payment">à vista</span><br />
//             <span className="price-discount">{product.discount}</span>
//             <span>ou em</span>
//             <p className="price-installments">{product.value}</p>
//             {/* ======= */}
//             {/* <span className="title-product-promo">{product.name}</span> */}
//             <span className="full-price-promo">
//               R$
//               {(product.value * 2).toFixed(2)}
//             </span>
//             <br />
//             <span className="cash-payment">à vista</span>
//             <br />
//             <span className="price-discount">
//               R$
//               {product.discount
//                 ? (product.discount * 1).toFixed(2)
//                 : (product.value * 1).toFixed(2)}
//             </span>
//             <span>ou em 12x</span>
//             <p className="price-installments">
//               R${(product.value / 12).toFixed(2)}
//             </p>
//             {/* >>>>>>> df9ca14d256e0a70023cd8fbeb16fc1aa4784136 */}
//           </div>
// =======
    <div className="container-card">
      <div className="container-img-promo">
        {loading && <SpinerLoader />}
        <div className="img-container">
          <img
            src={product.url_img}
            alt="imagem do produto"
            onLoad={() => setLoading(false)}
          />
        </div>

        <div className="container-text-product">
          <div className="title-product">
            <p className="title-product-promo">{product.name}</p>
          </div>

          <span className="cash-payment">à vista</span>
          <p className="price-installments">
            R<span>$</span>
            {priceParceledFormatado}
          </p>
          <span>
            ou em
            <span
              style={{
                fontSize: "25px",
                fontWeight: "bold",
                color: "#e1ab38",
                marginLeft: "5px",
              }}
            >
              12X
            </span>
            <br />
            de R$
          </span>
          <p className="price-installments-parceled">
            R<span>$</span>
            {priceParceledFormatado}
          </p>
{/* >>>>>>> bf6748342ad559e69a6a738ff1125331522603f3 */}
        </div>
        <button className="button-buy-card">
          <img src="/icons/ShopCart.png" alt="iconCarrinho" />
          Comprar
        </button>
      </div>
    </div>
  );
};

export default Card;
