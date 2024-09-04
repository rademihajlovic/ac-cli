/* eslint-disable react/style-prop-object */
import React from 'react';
import { Row } from 'reactstrap';

const SolarSystemsHeader = function () {
	return (
		<div className="solar-system-header">
			<Row>
				<div className="col-lg-8 offset-lg-2 col-md-12 col-12">
					<div className="text-center mb-8">
						<small className="text-uppercase ls-md fw-semibold">
							About
							Block
						</small>
						<h1 className="mb-3 mt-3">
							Empowering the world to design
						</h1>
						<p className="mb-0 mx-5 px-lg-6">
							We are Block, a Digital Product Design & Branding
							Agency. As a team of Designers, Business Analysts,
							Strategists, Content Writers, and Project Managers,
							we
							collaborate on a result-oriented design process.
						</p>
					</div>
				</div>
			</Row>
		</div>
	);
};

export default SolarSystemsHeader;
