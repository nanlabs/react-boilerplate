import axios, { AxiosInstance } from 'axios';

// axios instance's config
const config = {
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

export const setupInterceptors = (axiosInstance: AxiosInstance) => {
  // here you can add your interceptor for axios instance
  // axiosInstance.interceptors.request.use(authInterceptor);
  console.log('axiosInstance', axiosInstance);
};

export const createAxiosInstance = () => {
  const httpClient = axios.create(config);
  setupInterceptors(httpClient);
  return httpClient;
};

export const getCancelToken = axios.CancelToken.source;

export default createAxiosInstance();
