import axios, { AxiosResponse } from 'axios';
import { PostResultBody, ResultData, ResultInfo } from './result.types';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/results`,
  timeout: 15000,
  withCredentials: true,
});

const responseBody = (response: AxiosResponse) => response.data;
// const responseStatus = (response: AxiosResponse) => response.status;

const resultRequests = {
  get: <T>(url: string) => instance.get<T>(url).then(responseBody),
  post: <T, B>(url: string, body: B) => instance.post<T>(url, body).then(responseBody),
};

export const Result = {
  read: (id: string): Promise<ResultData> => resultRequests.get<ResultData>(id),
  create: (body: PostResultBody): Promise<ResultInfo> => resultRequests.post<ResultInfo, PostResultBody>('', body),
};
