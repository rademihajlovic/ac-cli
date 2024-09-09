/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { getSettings } from '../../api/settings';

import logo from '../../assets/images/logo.png';
import DropdownMenu from './DropdownMenu';

const headers = [
	{
		title: 'Mill Parts',
	},
	{
		title: 'Tablet press parts',
	},
	{
		title: 'Capsule filler parts',
	},
	{
		title: 'Fluid Bed Dryer Parts',
	},
	{
		title: 'Mixer/Blender Parts',
	},
	{
		title: 'Coater Parts',
	},
	{
		title: 'Miscellaneous Parts',
	},
];
const Header = function () {
	const [settings, setSettings] = useState();

	const fetchSettings = async () => {
		const { data: { result } } = await getSettings();
		setSettings(result);
	};

	useEffect(() => {
		fetchSettings();
	}, []);

	return (
		<nav className="navbar navbar-expand-lg fixed-top navbar-light w-100">
			<div className="container px-3">
				<a className="navbar-brand" href="/">
					<img
						className="mx-auto d-block"
						alt="Atel Control"
						style={{ width: '70px' }}
						src={logo}
					/>
				</a>
				<button className="navbar-toggler offcanvas-nav-btn" type="button">
					<i className="bi bi-list" />
				</button>
				<div className="offcanvas offcanvas-start offcanvas-nav" style={{ width: '20rem' }}>
					<div className="offcanvas-header">
						<a href="/" className="text-inverse"><img src={logo} alt="" /></a>
						<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
					</div>
					<div className="offcanvas-body pt-0 align-items-center">
						<ul className="navbar-nav mx-auto align-items-lg-center">
							{headers.map((header, index) => (
								<li className="nav-item dropdown" key={index}>
									<a className="nav-link dropdown-toggle" href={`/proizvodi?category=${header.title}`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
										{header.title}
										{' '}
										<span className="caret ms-1">&#8964;</span>
									</a>
									<DropdownMenu data={settings?.headerData[header.title]} category={header.title} />
								</li>
							))}
						</ul>
						<ul className="navbar-nav mb-2 mb-lg-0 position-absolute end-0 me-3">
							<li className="nav-item">
								<a className="nav-link" aria-current="page" href="/kontakt">Kontakt</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>

	);
};

export default Header;
