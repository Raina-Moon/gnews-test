import React from "react";
import NewsCard from "../../entities/ui/NewsCard";
import { useTopNewsQuery } from "../../entities/article/hooks";

const HomePage = () => {
  const { data } = useTopNewsQuery();

  return (
    <div>
      <ul>
        {data?.articles.map((article) => (
          <NewsCard article={article} />
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
