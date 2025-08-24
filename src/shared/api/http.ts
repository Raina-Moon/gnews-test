import axios from "axios";
import { useUiStore } from "../store/uiStore";

export const http = axios.create({
  baseURL: "/gnews/api/v4",
  timeout: 10000,
});

http.interceptors.request.use(
  (config) => {
    useUiStore.getState().setIsLoading(true);
    useUiStore.getState().setError(null);
    return config;
  },
  (error) => {
    useUiStore.getState().setIsLoading(false);
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    useUiStore.getState().setIsLoading(false);
    return response;
  },
  (error) => {
    useUiStore.getState().setIsLoading(false);
    useUiStore.getState().setError(error.message || "An error occurred");
    return Promise.reject(error);
  }
);
