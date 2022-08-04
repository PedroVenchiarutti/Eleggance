import React from 'react';
import ItemCart from '../ItemCart/ItemCart';
import './index.scss'

const ProductsList = ({ products }) => {
	if (!products) return;
	return (
		<>
					{products.map((product, index) => {
						return (
							<tr key={index} className="itemCart">
								<ItemCart product={product} />
							</tr>
						);
					})}
		</>
	);
};

export default ProductsList;