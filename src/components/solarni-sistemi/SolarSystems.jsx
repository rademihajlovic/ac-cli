import React from 'react';
import { Container } from 'reactstrap';
import SolarSystemsHeader from './SolarSystemsHeader';
import ProductsGrid from '../products/ProductsGrid';

const SolarSystems = function () {
	return (
		<>
			<SolarSystemsHeader />
			<Container>
				<h5 className="text-uppercase ls-md fw-semibold text-center mt-3 mb-3">Proizvodi u ponudi</h5>
			</Container>
			<ProductsGrid />
		</>
	);
};

export default SolarSystems;
