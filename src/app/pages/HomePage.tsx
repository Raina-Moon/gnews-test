import React, { useState } from "react";
import NewsCard from "../../entities/ui/NewsCard";
import { useTopNewsQuery } from "../../entities/article/hooks";
import styled from "styled-components";
import NewsSearchBar from "../../entities/ui/NewsSearchBar";
import { useDebounce, useSearchArticles } from "../../entities/search/hooks";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const debounced = useDebounce(query, 300);
  const q = debounced.trim();
  const { data: top } = useTopNewsQuery();
  const {
    data: searchResults,
    isLoading: searchLoading,
    isFetching: searchFetching,
  } = useSearchArticles(q);

  const articles = q ? searchResults : top;

  if (q && (searchLoading || searchFetching)) return <div>Searching…</div>;

  return (
    <div>
      <SearchBarWrapper>
        <NewsSearchBar query={query} onSearch={setQuery} />
        {searchResults && <p>Results: {searchResults?.articles.length}</p>}
      </SearchBarWrapper>
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

const SearchBarWrapper = styled.div`
margin: 20px auto;
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  p{
    margin: 0;
    font-size: 14px;
    color: #555;
    text-align: left;
  }
`;
