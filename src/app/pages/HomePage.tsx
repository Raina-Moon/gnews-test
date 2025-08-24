import React, { useMemo, useState } from "react";
import NewsCard from "../../entities/ui/NewsCard";
import { useTopNewsQuery } from "../../entities/article/hooks";
import styled from "styled-components";
import NewsSearchBar from "../../entities/ui/NewsSearchBar";
import { useDebounce, useSearchArticles } from "../../entities/search/hooks";
import SkeletonNewsCard from "../../entities/ui/SkeletonNewsCard";

type OrderBy = "asc" | "desc";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const [orderBy, setOrderBy] = useState<OrderBy>("desc");

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

  const base = isSearching
    ? searchResults?.articles || []
    : top?.articles || [];

  const sorted = useMemo(() => {
    const toTime = (s?: string) => (s ? Date.parse(s) : 0);
    const arr = base.slice();
    arr.sort((a, b) => {
      const ta = toTime(a.publishedAt);
      const tb = toTime(b.publishedAt);
      return orderBy === "asc" ? ta - tb : tb - ta;
    });
    return arr;
  }, [base, orderBy]);

  return (
    <div>
      <SearchBarWrapper>
        <NewsSearchBar query={query} onSearch={setQuery} />
        {searchResults && <p>Results: {searchResults?.articles.length}</p>}
      </SearchBarWrapper>
      <SortSelector>
        <select
          value={orderBy}
          onChange={(e) => setOrderBy(e.target.value as OrderBy)}
        >
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>
      </SortSelector>
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
          {sorted.map((article) => (
            <NewsCard article={article} />
          ))}
        </ListWrapper>
      )}

      {sorted.length === 0 && <div>No articles found.</div>}
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

const SortSelector = styled.div`
  margin: 0 auto 10px auto;
  display: flex;
  justify-content: flex-end;

  select {
    padding: 5px 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;

    &:hover {
      border-color: #999;
    }
  }
`;