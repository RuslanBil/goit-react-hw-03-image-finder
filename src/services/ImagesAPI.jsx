export const BASE_URL = 'https://pixabay.com/api/',
  API_KEY = '30713735-ae9fa15be998c230826cb9e8d',
  SEARCH_PARAMS = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
  });
