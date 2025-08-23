import React from "react";
import { useTopNewsQuery } from "../article/hooks";

const NewsCard = () => {
  const { data } = useTopNewsQuery();
  
  return (
    <div>
      <ul>
        {data?.articles.map((article) => (
          <li key={article.url}>
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
        ))}
      </ul>
    </div>
  );
};

export default NewsCard;
