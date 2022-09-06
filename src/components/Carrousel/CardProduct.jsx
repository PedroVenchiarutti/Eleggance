import React from "react";
import "./Carrousel.scss";

const CardProduct = ({ product }) => {
  /* const navigate = useNavigate(); */
  {
    /* renderizando produtos da API */
  }
  if (!product) return;
  return (
    <div className="products">
      <div >
        <div className="container-img-promo">
          <img
            src={product.url_img}
            alt="teste"
            className="product-img-carrousel"
          />
          <div className="container-text-product">
            <span className="title-product-promo">{product.name}</span>
            <span className="full-price-promo">{product.description}</span><br />
            <span className="cash-payment">à vista</span><br />
            <span className="price-discount">{product.discount}</span>
            <span>ou em</span>
            <p className="price-installments">{product.value}</p>
            {/* ======= */}
            <span className="title-product-promo">{product.name}</span>
            <span className="full-price-promo">
              R$
              {(product.value * 2).toFixed(2)}
            </span>
            <br />
            <span className="cash-payment">à vista</span>
            <br />
            <span className="price-discount">
              R$
              {product.discount
                ? (product.discount * 1).toFixed(2)
                : (product.value * 1).toFixed(2)}
            </span>
            <span>ou em 12x</span>
            <p className="price-installments">
              R${(product.value / 12).toFixed(2)}
            </p>
            {/* >>>>>>> df9ca14d256e0a70023cd8fbeb16fc1aa4784136 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
