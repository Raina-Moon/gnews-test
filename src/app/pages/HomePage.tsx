import React, { useState } from "react";
import NewsCard from "../../entities/ui/NewsCard";
import { useTopNewsQuery } from "../../entities/article/hooks";
import styled from "styled-components";
import NewsSearchBar from "../../entities/ui/NewsSearchBar";
import { useDebounce, useSearchArticles } from "../../entities/search/hooks";
import SkeletonNewsCard from "../../entities/ui/SkeletonNewsCard";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const debounced = useDebounce(query, 300);
  const q = debounced.trim();
  const { data: top, isLoading: topLoading } = useTopNewsQuery();
  const {
    data: searchResults,
    isLoading: searchLoading,
    isFetching: searchFetching,
  } = useSearchArticles(q);

  const isSearching = q.length > 0;

  const showSkeletons =
    (!isSearching && topLoading) ||
    (isSearching && (searchLoading || searchFetching));

  const articles = q ? searchResults : top;

  return (
    <div>
      <SearchBarWrapper>
        <NewsSearchBar query={query} onSearch={setQuery} />
        {searchResults && <p>Results: {searchResults?.articles.length}</p>}
      </SearchBarWrapper>
      {showSkeletons ? (
        <ListWrapper>
        {Array.from({ length: 6 }).map((_, index) => (
          <li key={index}>
          <SkeletonNewsCard />
          </li>
        ))}
      </ListWrapper>
      ) : (
      <ListWrapper>
        {articles?.articles.map((article) => (
          <NewsCard article={article} />
        ))}
      </ListWrapper>
      )}

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

  li { 
    list-style: none;
  }
`;

const SearchBarWrapper = styled.div`
  margin: 20px auto;
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  p {
    margin: 0;
    font-size: 14px;
    color: #555;
    text-align: left;
  }
`;
