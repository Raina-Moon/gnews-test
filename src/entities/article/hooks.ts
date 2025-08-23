import { useQuery } from "@tanstack/react-query";
import { fetchArticleById, fetchTopArticles } from "./api";
import type { Articles } from "./types";

export const useTopNewsQuery = () => {
  return useQuery<Articles>({
    queryKey: ["top-articles"],
    queryFn: () => fetchTopArticles(),
  });
};

export const useArticleByIdQuery = (id: string) => {
  return useQuery({
    queryKey: ["article", id],
    queryFn: () => fetchArticleById(id),
  });
};
