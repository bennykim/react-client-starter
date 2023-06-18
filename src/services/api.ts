import axios from 'axios';
import { AxiosRequestConfig } from 'axios';

const baseURL = '';

const http = axios.create({ baseURL });

const get = async <T, P>(url: string, params: AxiosRequestConfig<P>['params'] = {}): Promise<T> => {
  try {
    const response = await http.get(url, { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const post = async <T, D>(url: string, data: D = {} as D): Promise<T> => {
  try {
    const response = await http.post(url, data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { get, post };
