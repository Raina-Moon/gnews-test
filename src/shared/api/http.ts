import axios from "axios";

export const http = axios.create({
  baseURL: "/gnews/api/v4",
  timeout: 10000,
});
