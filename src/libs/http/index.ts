import { CancelToken } from 'axios';
import httpClient from './config';

export const get = async <T>(endpoint: string, body?: object, cancelToken?: CancelToken | undefined) => {
  return httpClient.get<T>(endpoint, {
    params: body,
    cancelToken,
  });
};

export const post = async <T>(endpoint: string, body: object) => {
  return httpClient.post<T>(endpoint, body);
};

export const put = async <T>(endpoint: string, body: object) => {
  return httpClient.put<T>(endpoint, body);
};

export const patch = async <T>(endpoint: string, body: object) => {
  return httpClient.patch<T>(endpoint, body);
};

export const deleteResource = async <T>(endpoint: string) => {
  return httpClient.delete<T>(endpoint);
};
