import React, { useState } from "react";
import NewsCard from "../../entities/ui/NewsCard";
import { useTopNewsQuery } from "../../entities/article/hooks";
import styled from "styled-components";
import NewsSearchBar from "../../entities/ui/NewsSearchBar";
import { useSearchArticles } from "../../entities/search/hooks";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const q = query.trim();
  const { data: top } = useTopNewsQuery();
  const { data: searchResults } = useSearchArticles(q);

  const articles = q ? searchResults : top;

  return (
    <div>
      <NewsSearchBar query={query} onSearch={setQuery} />
      <ListWrapper>
        {articles?.articles.map((article) => (
          <NewsCard article={article} />
        ))}
      </ListWrapper>

      {articles?.articles.length === 0 && <div>No articles found.</div>}
    </div>
  );
};

export default HomePage;

const ListWrapper = styled.ul`
  padding: 20px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;
