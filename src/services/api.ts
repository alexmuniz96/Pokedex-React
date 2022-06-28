import axios from 'axios';

const apiBaseUrl = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});
export default apiBaseUrl;