import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://kestenbaum-page-me-api.onrender.com/api'
});
