import axios, { AxiosResponse } from 'axios';
import { ColorData } from './color.types';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/colors`,
  timeout: 15000,
  withCredentials: true,
});

const responseBody = (response: AxiosResponse) => response.data;
// const responseStatus = (response: AxiosResponse) => response.status;

const colorRequests = {
  get: <T>(url: string) => instance.get<T>(url).then(responseBody),
};

export const Color = {
  list: (): Promise<ColorData[]> => colorRequests.get<ColorData[]>(''),
};
