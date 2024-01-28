import axios, { AxiosResponse } from 'axios';
import { WheelData } from './wheels.types';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/wheels`,
  timeout: 15000,
  withCredentials: true,
});

const responseBody = (response: AxiosResponse) => response.data;
// const responseStatus = (response: AxiosResponse) => response.status;

const wheelRequests = {
  get: <T>(url: string) => instance.get<T>(url).then(responseBody),
};

export const Wheel = {
  list: (): Promise<WheelData[]> => wheelRequests.get<WheelData>(''),
};
