import axios, { AxiosRequestConfig, AxiosError } from 'axios';

export const api = axios.create({
  baseURL: 'https://kestenbaum-page-me-api.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

