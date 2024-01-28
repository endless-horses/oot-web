import axios, { AxiosResponse } from 'axios';
import { AccessoryData } from './accessory.types';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/accessories`,
  timeout: 15000,
  withCredentials: true,
});

const responseBody = (response: AxiosResponse) => response.data;
// const responseStatus = (response: AxiosResponse) => response.status;

const accessoryRequests = {
  get: <T>(url: string) => instance.get<T>(url).then(responseBody),
};

export const Accessory = {
  list: (): Promise<AccessoryData[]> => accessoryRequests.get<AccessoryData[]>(''),
};
