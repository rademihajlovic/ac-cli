import { API_BASE_URL } from '../api/api';

export const add = (a, b) => a + b;

export const generateImageUrl = (fileName) => `${API_BASE_URL}images/${fileName}`;

export const generateSortParams = (sortString) => {
	const [sortBy, sort] = sortString.split('-');
	return `&sortBy=${sortBy}&sort=${sort}`;
};
