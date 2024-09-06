import React from 'react';
import SearchIcon from '../../assets/images/search.svg';

const NoProducts = function () {
	return (
		<div className="no-products mt-8 d-flex flex-column justify-content-center align-items-center">
			<img
				className="no-products-icon"
				src={SearchIcon}
				alt="logo"
			/>
			<div className="no-products-text">Nema rezultata</div>
		</div>
	);
};

export default NoProducts;
