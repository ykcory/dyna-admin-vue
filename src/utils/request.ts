import axios from "axios";

const request = axios.create({
  baseURL: "/api",
  timeout: 10000
})

request.interceptors.request.use((config) => {
  config.headers['Authorization'] = localStorage.getItem("token")
  return config
})

request.interceptors.response.use((response) => {
  return response.data
})

export const getRequest = <T>(url: string, params: object = {}) => request.get<never, ResponseData<T>>(url, {params})

export const postRequest = <T>(url: string, data: object) => request.post<never, ResponseData<T>>(url, data)
export default request

export interface ResponseData<T> {
  code: number;
  success: boolean;
  message: string;
  data: T;
}
