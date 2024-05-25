import axios from 'axios';
const API_KEY = '44058599-8264f26cc64fdb07aa6105d22';
const BASE_URL = 'https://pixabay.com/api/';

const fetchPhotos = async (searchImage, page) => {
  const response = await axios(BASE_URL, {
    params: {
      key: API_KEY,
      q: searchImage,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: page,
      per_page: 15,
    },
  });
  return response.data;
};

export default fetchPhotos;
