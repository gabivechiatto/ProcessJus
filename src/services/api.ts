import axios from 'axios';

const accessToken = import.meta.env.VITE_API_KEY;

export const api = axios.create({
  baseURL: 'https://op.digesto.com.br/api/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
    Accept: 'application/json',
  },
});
