import api from './api';

export const getSettings = async (category) => api.get(`/settings${category ? `?category=${category}` : ''}`);
export const sendEmail = async (data) => api.post('/settings/email', data);
