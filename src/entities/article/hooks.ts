import { useQuery } from "@tanstack/react-query";
import { fetchTopArticles } from "./api";
import type { Articles } from "./types";

export const useTopNewsQuery = () => {
  return useQuery<Articles>({
    queryKey: ["top-articles"],
    queryFn: () => fetchTopArticles(),
  });
};
