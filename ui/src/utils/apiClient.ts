import axios, { AxiosRequestConfig } from "axios";
import getConfig from "next/config";

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const requestConfig: AxiosRequestConfig = {
  baseURL: serverRuntimeConfig.apiUrl || publicRuntimeConfig.apiUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

const apiClient = axios.create(requestConfig);

export default apiClient;
