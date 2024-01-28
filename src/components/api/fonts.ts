import axios, { AxiosResponse } from 'axios';
import { FontData } from './fonts.types';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/fonts`,
  timeout: 15000,
  withCredentials: true,
});

const responseBody = (response: AxiosResponse) => response.data;
// const responseStatus = (response: AxiosResponse) => response.status;

const fontRequests = {
  get: <T>(url: string) => instance.get<T>(url).then(responseBody),
};

export const Font = {
  list: (): Promise<FontData[]> => fontRequests.get<FontData[]>(''),
};
