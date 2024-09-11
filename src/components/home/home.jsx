import React from 'react';
import LightbulbFilament from '../../assets/images/LightbulbFilament.svg';
import ClientsLogo1 from '../../assets/images/clients-logo-1.svg';
import ClientsLogo2 from '../../assets/images/clients-logo-2.svg';
import ClientsLogo3 from '../../assets/images/clients-logo-3.svg';
import ClientsLogo4 from '../../assets/images/clients-logo-4.svg';
import ClientsLogo5 from '../../assets/images/clients-logo-5.svg';

const Home = function () {
	return (
		<section className="home pt-9 mt-6">
			<div className="container">
				<div className="row mb-lg-9 mb-5">
					<div className="col-xl-10 offset-xl-1 col-md-12">
						<div className="row">
							<div className="col-lg-6 offset-lg-3 col-md-12">
								<div className="text-center mb-5">
									<small
										className="about-title text-uppercase ls-md fw-semibold text-body-tertiary"
									>
										O NAMA
									</small>
									<h2 className="mt-3 ">
										Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
										consectetur, adipisci velit
									</h2>
								</div>
							</div>
						</div>
						<div className="row">
							<div className=" col-12">
								<p className="mb-4 mb-md-0S text-lg-center text-sm-justify">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry.
									Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
									when an unknown printer took a galley of type and scrambled it to make a
									type specimen book. It has survived not only five centuries, but also the
									leap into electronic typesetting, remaining essentially unchanged. It was
									popularised in the 1960s with the release of Letraset sheets containing
									Lorem Ipsum passages, and more recently with desktop publishing software
									like Aldus PageMaker including versions of Lorem Ipsum.
								</p>
							</div>
							<div className="text-center mt-5">
								<a href="/kontakt" className="btn btn-primary">
									Kontaktiraj nas
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-12 col-12">
						<div className="mb-5 mb-lg-0 text-center text-lg-start px-md-5">
							<h2 className="mb-3">Šta nudimo?</h2>
							<p className="mb-0">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry.
								Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
								when an unknown printer took a galley of type and scrambled it to make a
								type specimen book.
							</p>
						</div>
					</div>
					<div className="col-lg-8">
						<div className="row">
							<div className="service col-md-6 col-12 col-sm-12">
								<div
									className="mb-lg-8 mb-5 text-center text-lg-start px-3 px-lg-0"
								>
									<div className="mb-3">
										<img
											src={LightbulbFilament}
											alt="bulb"
										/>
									</div>

									<h3 className="h4">Projektovanje</h3>
									<p className="mb-0 pe-lg-4">
										Lorem Ipsum is simply dummy text of the printing and typesetting industry.
									</p>
								</div>
							</div>
							<div className="service col-md-6 col-12 col-sm-12">
								<div
									className="mb-lg-8 mb-5 text-center text-lg-start px-3 px-lg-0"
								>
									<div className="mb-3">
										<img
											src={LightbulbFilament}
											alt="bulb"
										/>
									</div>

									<h3 className="h4">Proizvodnja</h3>
									<p className="mb-0">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
										tempor incididunt ut labore et dolore magna aliqua.
									</p>
								</div>
							</div>
							<div className="service col-md-6 col-12 col-sm-12 col-sm-12">
								<div
									className="mb-lg-8 mb-5 text-center text-lg-start px-3 px-lg-0"
								>
									<div className="mb-3">
										<img
											src={LightbulbFilament}
											alt="bulb"
										/>
									</div>

									<h3 className="h4">Prodaja delova</h3>
									<p className="mb-0 pe-lg-4">
										Curabitur porta in nulla a pharetra.
										Fusce dolor leo, consectetur ut eleifend ut, venenatis iaculis mi.
										Ut nec quam congue, vulputate lacus sed, tincidunt erat.
									</p>
								</div>
							</div>
							<div className="service col-md-6 col-12 col-sm-12">
								<div
									className="mb-lg-8 mb-5 text-center text-lg-start px-3 px-lg-0"
								>
									<div className="mb-3">
										<img
											src={LightbulbFilament}
											alt="bulb"
										/>
									</div>

									<h3 className="h4">Izvođenje radova</h3>
									<p className="mb-0 pe-lg-4">
										Nulla interdum dolor maximus ipsum interdum, hendrerit suscipit odio tempor.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container py-xl-9 py-5 brands">
				<div className="row">
					<div className="col-xl-6 offset-xl-3 col-md-12 col-12">
						<div className="text-center mb-xl-7 mb-5">
							<small
								className="brands-title text-uppercase ls-md fw-semibold text-body-tertiary"
							>
								Brendovi
							</small>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-10 offset-lg-1 col-md-12 col-12">
						<div
							className="row row-cols-lg-5 row-cols-md-4 row-cols-2 justify-content-center g-5"
						>
							<div className="brand col">
								<figure className="text-center mb-0">
									<img
										src={ClientsLogo1}
										alt="logo"
									/>
								</figure>
							</div>
							<div className="brand col">
								<figure className="text-center mb-0">
									<img
										src={ClientsLogo2}
										alt="logo"
									/>
								</figure>
							</div>
							<div className="brand col">
								<figure className="text-center mb-0">
									<img
										src={ClientsLogo3}
										alt="logo"
									/>
								</figure>
							</div>
							<div className="brand col">
								<figure className="text-center mb-0">
									<img
										src={ClientsLogo4}
										alt="logo"
									/>
								</figure>
							</div>
							<div className="brand col">
								<figure className="text-center mb-0">
									<img
										src={ClientsLogo5}
										alt="logo"
									/>
								</figure>
							</div>
							<div className="brand col">
								<figure className="text-center mb-0">
									<img
										src={ClientsLogo5}
										alt="logo"
									/>
								</figure>
							</div>

							<div className="brand col">
								<figure className="text-center mb-0">
									<img
										src={ClientsLogo4}
										alt="logo"
									/>
								</figure>
							</div>
							<div className="brand col">
								<figure className="text-center mb-0">
									<img
										src={ClientsLogo3}
										alt="logo"
									/>
								</figure>
							</div>
							<div className="brand col">
								<figure className="text-center mb-0">
									<img
										src={ClientsLogo2}
										alt="logo"
									/>
								</figure>
							</div>
							<div className="brand col">
								<figure className="text-center mb-0">
									<img
										src={ClientsLogo1}
										alt="logo"
									/>
								</figure>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
