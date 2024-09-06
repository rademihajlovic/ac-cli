/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = function ({ product }) {
	return (
		<Link to={`/products/${product._id}`} className="product d-flex flex-column m-1 p-0 position-relative" key={product._id}>
			<img src={`http://localhost:3000/api/images/${product.images[0]}`} alt={product.name} />
			<div className="position-absolute bottom-0 col-12 d-flex flex-column justify-content-center aligh-items-center text-dark text-center bg-dark opacity-50">
				<p className="title mt-2">{product.name}</p>
				<p className="price fw-bolder my-1">
					{product.price}
					{' '}
					RSD
				</p>
			</div>
		</Link>

	);
};

export default ProductCard;
