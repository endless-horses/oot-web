import axios, { AxiosResponse } from 'axios';
import { PatternData } from './patterns.types';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/patterns`,
  timeout: 15000,
  withCredentials: true,
});

const responseBody = (response: AxiosResponse) => response.data;
// const responseStatus = (response: AxiosResponse) => response.status;

const patternRequests = {
  get: <T>(url: string) => instance.get<T>(url).then(responseBody),
};

export const Pattern = {
  list: (): Promise<PatternData[]> => patternRequests.get<PatternData>(''),
};
