import React from 'react';
import './Carrousel.scss';

const Card = ({ product }) => {
	if (!product) return;

	return (
		<>
			<div className="container-img-promo">
				<img src={product.image} alt="tete" />
				<span className="title-product-promo">{product.name}</span>
				<br />
				<span className="full-price-promo">{product.price}</span>
				<span>A vista</span>
				<span>{product.discount}</span>
				<span>Ou</span>
				<p>{product.installments}</p>
			</div>
		</>
	);
};

export default Card;
