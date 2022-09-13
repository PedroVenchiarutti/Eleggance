import React from "react";
import "./product.scss";

const Product = ({ product }) => {
  const priceParceled = (product.value / 12).toFixed(2);
  const priceParceledFormatado = priceParceled.toString().replace(".", ",");
  const productValue = product.value.toFixed(2);
  const productPrice = productValue.toString().replace(".", ",");

  return (
    <div className="product">
      <div className="product-container">
        <div className="container-product-img">
          <img
            src={product.url_img}
            alt="imagem do produto"
            className="imgProduct"
          />
        </div>
        <div className="product-text">
          {/*  <p className="productName">{product.name}</p> */}
          <p className="productPrice priceComplet">R${productPrice}</p>
          <p className="productPrice priceParceled">
            12x R${priceParceledFormatado} Sem juros
          </p>
          <p className="productFrete">Frete Gratis</p>
          <p className="productDescription">{product.description}</p>
          <p className="product-brand"> Por {product.brand}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
