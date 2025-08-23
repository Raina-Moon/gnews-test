export interface Articles {
  articles: ArticleItem[];
  totalArticles: number;
}

export interface ArticleItem {
  id: string;
  title: string;
  description: string;
  content?: string;
  url?: string;
  image: string;
  publishedAt: string;
  source?: {
    id: string | null;
    name: string;
    url: string;
  };
}
