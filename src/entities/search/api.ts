import { http } from "../../shared/api/http";
import type { Articles } from "../article/types";

export async function SearchMovie(query: string) {
  const response = await http.get<Articles>(`/search`, {
    params: {
        q: query,
        lang: "en",
        country: "us",
        apikey: import.meta.env.VITE_GNEWS_API_KEY,
        },
    });
  return response.data;
    
}