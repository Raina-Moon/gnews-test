import React from "react";
import NewsCard from "../../entities/ui/NewsCard";
import { useTopNewsQuery } from "../../entities/article/hooks";
import styled from "styled-components";

const HomePage = () => {
  const { data } = useTopNewsQuery();

  return (
    <div>
      <ListWrapper>
        {data?.articles.map((article) => (
          <NewsCard article={article} />
        ))}
      </ListWrapper>
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
`
