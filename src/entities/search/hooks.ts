import { useQuery } from "@tanstack/react-query";
import { SearchMovie } from "./api";
import type { Articles } from "../article/types";

export const useSearchArticles = (query: string) => {
  return useQuery<Articles>({
    queryKey: ["search-articles", query],
    queryFn: () => SearchMovie(query),
    enabled: !!query.trim(),
    placeholderData: (prev) => prev,
  });
};
