import axios from 'axios';

const API_KEY = '46142789-99b5e0e53b7f0f17aff330ecb';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page,
        per_page: 15,
    };

    try {
        const response = await axios.get(BASE_URL, { params });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch data');
    }
}