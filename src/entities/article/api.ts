import { http } from "../../shared/api/http";
import type { Articles } from "./types";

export const fetchTopArticles = async () => {
  const res = await http.get<Articles>("/top-headlines", {
    params: {
      country: "us",
      lang: "en",
      max: 10,
      apikey: import.meta.env.VITE_GNEWS_API_KEY,
    },
  });
  return res.data;
};
