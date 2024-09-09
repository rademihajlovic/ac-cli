import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/home.jsx';
import './App.scss';
import NoMatch from './routes/no-match.jsx';
import Header from './components/header/Header.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';
import ProductsGrid from './components/products/ProductsGrid.jsx';
import ProductItem from './components/products/ProductItem.jsx';

const App = function () {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/proizvodi" element={<ProductsGrid />} />
				<Route path="/proizvodi/:id" element={<ProductItem />} />

				<Route path="/kontakt" element={<Contact />} />

				<Route path="*" element={<NoMatch />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
