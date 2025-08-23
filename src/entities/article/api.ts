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

export const fetchArticleById = async (id: string) => {
  const res = await http.get<Articles>("/top-headlines", {
    params: {
      country: "us",
      lang: "en",
      max: 10,
      apikey: import.meta.env.VITE_GNEWS_API_KEY,
    },
  });
  const article = res.data.articles.find((article) => article.id === id);
  if (!article) {
    throw new Error("Article not found");
  }
  return article;
};
