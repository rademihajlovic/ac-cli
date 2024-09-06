/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../api/product';
import { API_BASE_URL } from '../../api/api';
import ImageSlider from '../common/ImageSlider';

const ProductItem = function () {
	const [product, setProduct] = useState({});
	const { id } = useParams();

	const fetchProduct = async () => {
		const { data: { result } } = await getProduct(id);
		setProduct(result);
		console.log(result);
	};
	useEffect(() => {
		fetchProduct();
	}, []);

	return (
		<section className="product-details py-5">
			{product.name && (
				<div className="container">
					<div className="row gx-5">
						<aside className="col-lg-5">
							<div className="border mb-3 d-flex justify-content-center">
								<img style={{ maxWidth: '100%', maxHeight: '100vh', margin: 'auto' }} className="fit" src={`${API_BASE_URL}images/${product.images[0]}`} />
							</div>

						</aside>
						<main className="col-lg-6">
							<div className="ps-lg-3 pt-2">
								<h3 className="title text-dark">
									{product.name}

								</h3>

								<div className="mb-1">
									<span className="h4">
										{product.price}
										{' '}
										KM
									</span>

								</div>
								<div className="mb-3">
									<span className="fs-6">
										Na stanju:
										{' '}
										{product.stock}
									</span>
								</div>
								<p>
									{product.shortDescription}
								</p>

								<div className="row">
									<dt className="col-3 mb-3 h4">
										Specifikacija
									</dt>
									<dd className="col-9" />
									<br />
									<div>
										<dt className="col-3">
											Proizvođač
											:
										</dt>
										<dd className="col-9">{product.manufacturer}</dd>
									</div>
									<div>
										<dt className="col-3">
											Mašina
											:
										</dt>
										<dd className="col-9">{product.machine}</dd>
									</div>
								</div>
							</div>
						</main>
					</div>
					<div className="row">
						<hr />

						<dt className="col-3 mb-3">
							Opis
						</dt>
						<hr />

						<dd className="col-9" />
						<p>{product.description}</p>

					</div>
				</div>
			)}
		</section>
	);
};

export default ProductItem;
