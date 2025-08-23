import { useQuery } from "@tanstack/react-query";
import { SearchMovie } from "./api";
import type { Articles } from "../article/types";
import { useEffect, useState } from "react";

export const useSearchArticles = (query: string) => {
  return useQuery<Articles>({
    queryKey: ["search-articles", query],
    queryFn: () => SearchMovie(query),
    enabled: !!query.trim(),
    placeholderData: (prev) => prev,
  });
};

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}