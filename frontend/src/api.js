import axios from 'axios';

const api = axios.create({
  baseURL: 'http://100.53.197.120:5000', // Points to your Node/Express backend port
});

// Automatically inject JWT token into headers if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;
