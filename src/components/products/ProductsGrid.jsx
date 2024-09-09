/* eslint-disable react/no-array-index-key */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getParts } from '../../api/product';
import ProductCard from './ProductCard';
import Pages from '../common/Pagination';
import { getSettings } from '../../api/settings';
import Filter from '../common/Filter';
import NoProducts from '../common/NoProducts';

const ProductsGrid = function () {
	const [products, setProducts] = useState([]);
	const [page, setPage] = useState(1);
	const [total, setTotal] = useState(0);
	const [settings, setSettings] = useState();
	const [searchParams] = useSearchParams();
	const [manufacturer] = useState(searchParams.get('manufacturer') || '');
	const [machine] = useState(searchParams.get('machine') || '');
	const [category] = useState(searchParams.get('category') || '');
	const [sort, setSort] = useState('name-asc');

	const [filters, setFilters] = useState({
		manufacturers: [manufacturer] || [],
		machines: [machine] || [],
		category,
		search: '',
	});

	const fetchParts = async () => {
		const { data: { result, meta: { total: totalParts } } } = await getParts(filters, sort, page);
		setTotal(totalParts);
		setProducts(result);
	};
	const fetchSettings = async () => {
		const { data: { result } } = await getSettings(searchParams.get('category'));
		setSettings(result);
	};

	useEffect(() => {
		fetchSettings();
		fetchParts();
	}, []);

	useEffect(() => {
		fetchParts();
	}, [page, filters, sort]);

	const onChangeFilter = (key, value) => {
		if (filters[key].includes(value)) {
			setFilters((prevFilters) => ({
				...prevFilters,
				[key]: prevFilters[key].filter((item) => item !== value),
			}));
		}	else {
			setFilters((prevFilters) => ({
				...prevFilters,
				[key]: [...prevFilters[key], value],
			}));
		}
	};

	const onSortChange = (e) => {
		setSort(e.target.value);
	};

	const onSearchChange = (e) => {
		setFilters((prevFilters) => ({
			...prevFilters,
			search: e.target.value,
		}));
	};

	return (
		<div className="container mt-5 pt-3">

			<div className="products-grid row">

				<div className="filter col-3">
					{' '}
					<Filter
						machines={settings?.machines}
						manufacturers={settings?.manufacturers}
						filters={filters}
						onChangeFilter={onChangeFilter}
						onSearchChange={onSearchChange}
					/>
					{' '}
				</div>

				<div className="products col-9">
					{(
						products.length === 0
						&& settings

					)
						&& <NoProducts />}
					{products.length > 0 && (
						<div>
							<div className="col-12 d-flex justify-content-between">
								<h1 className="col-3">{category}</h1>
								<div className="col-5" />
								<select className="form-select col-3" onChange={onSortChange}>
									<option value="name-asc">Ime rastuće</option>
									<option value="name-desc">Ime opadajuće</option>
									<option value="price-asc">Cijena rastuće</option>
									<option value="price-desc">Cijena opadajuće</option>
								</select>
								<div className="col-1" />

							</div>
							<div className="col-12 d-flex row justify-content-start align-items-between">
								{products && products.map((product, index) => (
									<ProductCard product={product} key={index} />

								))}
							</div>
							{total > 12 && <Pages page={page} setPage={setPage} total={total} /> }
						</div>
					)}
				</div>

			</div>

		</div>
	);
};

export default ProductsGrid;
