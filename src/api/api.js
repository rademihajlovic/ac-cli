import axios from 'axios';

export const API_BASE_URL = 'https://atel-control.rademihajlovic.pro/api/v1/';

const api = axios.create({
	baseURL: API_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

api.interceptors.request.use(
	/* eslint-disable no-param-reassign */
	(config) => {
		const token = localStorage.getItem('token');

		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		Promise.reject(error);
	},
);

export default api;
