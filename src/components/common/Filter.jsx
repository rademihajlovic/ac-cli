/* eslint-disable react/no-array-index-key */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-underscore-dangle */
import React from 'react';

const Filter = function ({
	manufacturers, machines, filters, onChangeFilter, onSearchChange,
}) {
	return (
		<div className="mb-8 mt-8">
			<div className="col-md-11 mb-4">
				<input type="text" className="form-control" id="eventSingleNameInput" value={filters.search} placeholder="Search..." onChange={onSearchChange} />
			</div>
			<h5 className="mb-3">Proizvođači</h5>
			{manufacturers && manufacturers.map((manufac, index) => (
				<div className="form-check mb-2" key={index}>
					<input
						className="form-check-input"
						type="checkbox"
						value={manufac}
						id="eGrocery"
						checked={filters?.manufacturers?.includes(manufac)}
						onChange={() => onChangeFilter('manufacturers', manufac)}
					/>
					<label className="form-check-label" htmlFor="eGrocery">{manufac}</label>
				</div>
			))}
			<div className="border border-bottom-1 my-3" />
			<h5 className="mb-3">Masine</h5>
			{machines && machines.map((m, index) => (
				<div className="form-check mb-2" key={index}>
					<input
						className="form-check-input"
						type="checkbox"
						value={m}
						id="eGrocery"
						checked={filters?.machines?.includes(m)}
						onChange={() => onChangeFilter('machines', m)}
					/>
					<label className="form-check-label" htmlFor="eGrocery">{m}</label>
				</div>
			))}
		</div>
	);
};

export default Filter;
