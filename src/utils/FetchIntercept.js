import { API_URL, API_ENDPOINTS } from './constants';

export const fetchInterceptor = async (url, options) => {
    try {
        const response = await fetch(API_URL + url, options);
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

