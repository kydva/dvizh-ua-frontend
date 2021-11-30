import axiosOriginal from 'axios';

export const api = axiosOriginal.create({
  baseURL: 'http://localhost:3000/api/',
});

api.interceptors.request.use((request: any) => {
  const token = process.client ? localStorage.getItem('token') : '';

  if (token) {
    request.headers.common.Authorization = `Bearer ${token}`;
  }

  return request;
});
