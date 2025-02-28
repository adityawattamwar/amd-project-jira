import axios from 'axios';
//@ts-ignore
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
//@ts-ignore
const FASTAPI_URL = import.meta.env.VITE_FASTAPI_URL || 'http://localhost:8000/api';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fastApi = axios.create({
  baseURL: FASTAPI_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});