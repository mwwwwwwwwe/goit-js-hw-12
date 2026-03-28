import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';

export async function getImagesByQuery(query, page) {
  try {
    const response = await axios.get('/api/', {
      params: {
        key: '55214296-bcb2f99248005430efd53daac',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: 15, 
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}
