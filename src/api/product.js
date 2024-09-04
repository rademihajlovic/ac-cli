import { generateSortParams } from '../utils/pure-functions';
import api from './api';

export const getParts = async (filters, sort, page = 1, limit = 12) => api.get(`/parts?page=${page}&limit=${limit}&manufacturer=${filters.manufacturers}&machine=${filters.machines}&category=${filters.category}${generateSortParams(sort)}`);
export const getProduct = async (id) => api.get(`/parts/${id}`);
