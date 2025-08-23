import React from "react";
import type { ArticleItem } from "../article/types";

interface NewsCardProps {
  article: ArticleItem;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <li key={article.id}>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        {article.image && (
          <img
            src={article.image}
            alt={article.title}
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
            }}
          />
        )}
      </a>
    </li>
  );
};

export default NewsCard;

