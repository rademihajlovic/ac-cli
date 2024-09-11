/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { Container } from 'reactstrap';
import ContactHeader from './ContactHeader';
import { sendEmail } from '../../api/settings';

const Contact = function () {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const onSendEmail = async () => {
		const formData = new FormData();
		formData.append('name', name);
		formData.append('email', email);
		formData.append('message', message);

		await sendEmail(formData);
	};

	const onNameChange = (event) => {
		setName(event.target.value);
	};

	const onEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const onMessageChange = (event) => {
		setMessage(event.target.value);
	};

	return (
		<Container className="contact-form mt-5 pt-5">
			<ContactHeader />
			<section className=" mt-2">
				<div className="container">
					<div className="row">
						<div className="col-lg-10 offset-lg-1 col-md-12">
							<div className="row g-lg-10 gy-5 align-items-center">
								<div className="col-md-6 mt-5 p-5">
									<div className="card shadow-sm rounded-0">
										<div className="card-body ">
											<form className="needs-validation" noValidate>
												<div className="mb-3">
													<label
														htmlFor="YourNameInput"
														className="form-label"
													>
														Vaše ime i prezime
													</label>
													<input
														type="text"
														className="form-control"
														id="YourNameInput"
														placeholder="Ime i prezime"
														required=""
														onChange={onNameChange}
													/>
													<div className="invalid-feedback">
														Unesite vaše ime i prezime.
													</div>
												</div>
												<div className="mb-3">
													<label
														htmlFor="yourEmailInput"
														className="form-label"
													>
														Email adresa
													</label>
													<input
														type="email"
														className="form-control"
														id="yourEmailInput"
														placeholder="Email adresa"
														required=""
														onChange={onEmailChange}
													/>
													<div className="invalid-feedback">
														Unesite vašu email adresu.
													</div>
												</div>
												<div className="mb-3">
													<label
														htmlFor="messageTextarea"
														className="form-label"
													>
														Poruka
													</label>
													<textarea
														className="form-control"
														id="messageTextarea"
														placeholder="Unesite vaču poruku"
														rows="4"
														required
														onChange={onMessageChange}
													/>
													<div className="invalid-feedback">
														Please
														enter a message.
													</div>
												</div>
												<button
													type="button"
													className="btn btn-primary"
													onClick={onSendEmail}
												>
													Kontaktirajte nas
												</button>
											</form>
										</div>
									</div>

								</div>
								<div className="col-md-6">
									<div className="d-flex mb-4">
										<div>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="bi bi-geo-alt-fill"
												viewBox="0 0 16 16"
											>
												<path
													d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
												/>
											</svg>
										</div>
										<div className="ms-2">
											<h5 className="mb-0">Adresa:</h5>
											<small>
												Jurija Gagarina 231
												<br />
												11070 Novi Beograd, Srbija
											</small>
										</div>

									</div>
									<div className="d-flex mb-4">
										<div>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="bi bi-telephone"
												viewBox="0 0 16 16"
											>
												<path
													d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
												/>
											</svg>
										</div>
										<div className="ms-2">
											<h5 className="mb-0">Telefon:</h5>
											<small>
												+381 11 112 11 12
											</small>
										</div>
									</div>
									<div className="d-flex mb-4">
										<div>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="bi bi-envelope-check"
												viewBox="0 0 16 16"
											>
												<path
													d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"
												/>
												<path
													d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z"
												/>
											</svg>
										</div>
										<div className="ms-2">
											<h5 className="mb-0">E-mail:</h5>

											<small>
												<a
													href="#!"
													className="text-reset"
												>
													atelcontrol.bg@gmail.com
												</a>

											</small>
										</div>

									</div>
									<div className="mt-5">
										<a
											href="#!"
											className="text-reset btn btn-instagram btn-icon m-1"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="bi bi-instagram"
												viewBox="0 0 16 16"
											>
												<path
													d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
												/>
											</svg>
										</a>
										<a
											href="#!"
											className="text-reset btn btn-twitter btn-icon m-1"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="bi bi-twitter"
												viewBox="0 0 16 16"
											>
												<path
													d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
												/>
											</svg>
										</a>
										<a
											href="#!"
											className="text-reset btn btn-youtube btn-icon m-1"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="bi bi-youtube"
												viewBox="0 0 16 16"
											>
												<path
													d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
												/>
											</svg>
										</a>
										<a
											href="#!"
											className="text-reset btn btn-linkedin btn-icon m-1"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="bi bi-linkedin"
												viewBox="0 0 16 16"
											>
												<path
													d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
												/>
											</svg>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="d-flex m-5 mb-5 col-12">
						<iframe className="col-12" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3369.326870834884!2d20.373167476757185!3d44.79875737107095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6f0cff353dd9%3A0x6131d21c71759b01!2sJurija%20Gagarina%20231%2C%20Beograd%2C%20Srbija!5e1!3m2!1sbs!2sba!4v1725457924808!5m2!1sbs!2sba" allowFullScreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Google Maps" />
					</div>
				</div>
			</section>
		</Container>
	);
};

export default Contact;
