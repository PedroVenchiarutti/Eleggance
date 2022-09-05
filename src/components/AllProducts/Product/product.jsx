import React from "react";
import './product.scss'

const Product = ({ product }) => {

    console.log(product)
    return (
        <div className="product">
            <div className="product-container">
                <img src={product.url_img} alt="" className="imgProduct" />
                <p className="productName">{product.name}</p>
                <p className="productDescription">{product.description}</p>
                <p className="productPrice">R${product.value}</p>
            </div>
        </div>
    )
}

export default Product;