import React from "react";
import type { ArticleItem } from "../article/types";
import styled from "styled-components";

interface NewsCardProps {
  article: ArticleItem;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <ListWrapper key={article.id}>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        <h3>{article.title}</h3>
        {article.image && (
          <img
            src={article.image}
            alt={article.title}
            style={{
              width: "100%",
              objectFit: "cover",
            }}
          />
        )}
        <p>{article.description}</p>
      </a>
    </ListWrapper>
  );
};

export default NewsCard;

const ListWrapper = styled.li`
  list-style: none;
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    border-color: #aaa;
  }

  a {
    text-decoration: none;
    color: inherit;
    gap: 10px;
  }

  h3 {
    margin: 0 0 10px 0;
    font-size: 1.2em;
  }

  p {
    margin: 0;
    color: #555;
    flex: 1;
  }

  img {
    border-radius: 8px;
  }
`