/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
import React from 'react';

const DropdownMenu = function ({ data, category }) {
	return (
		<div className="dropdown-menu dropdown-menu-xxl">
			<div className="row row-cols-lg-4 row-cols-1 g-0">
				<div className="col">
					<div>
						{ data && Object.keys(data)?.map((item, index) => (
							<div key={index}>
								<div className="dropdown-header">{item}</div>
								{data[item].map((link, i) => (
									<a key={i} className="dropdown-item" href={`/products?category=${category}&manufacturer=${item}&machine=${link}`}>{link}</a>
								))}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DropdownMenu;
