import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';

export function getImagesByQuery(query) {
  return axios
    .get('/api/', {
      params: {
        key: '55214296-bcb2f99248005430efd53daac',
        q: `${query}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
      },
    })
    .then(response => {
      return response.data.hits;
    })
    .catch(error => {
      console.log(error);
    });
}

