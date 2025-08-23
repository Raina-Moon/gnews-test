import React from "react";
import { useArticleByIdQuery } from "../../entities/article/hooks";
import { useParams } from "react-router-dom";
import { formatDate } from "../utils/date";
import styled from "styled-components";

const ArticleDetailPage = () => {
  const { id } = useParams();
  const { data } = useArticleByIdQuery(String(id));
  return (
    <Wrapper>
        <HomeButton href="/">← Back</HomeButton>
      <h1>{data?.title}</h1>
      <TitleWrapper>
        {data?.publishedAt && <p>{formatDate(data.publishedAt)}</p>}
        <p>{data?.source?.name}</p>
      </TitleWrapper>
      <div className="line" />
      {data?.image && (
        <img
          src={data.image}
          alt={data.title}
          style={{ width: "100%", objectFit: "cover" }}
        />
      )}
      <p>{data?.content}</p>
      <Button href={data?.url} target="_blank" rel="noopener noreferrer">
        Read full article
      </Button>
    </Wrapper>
  );
};

export default ArticleDetailPage;

const Wrapper = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;

  .line {
    height: 1px;
    background-color: #ddd;
    border: none;
    margin: 20px 0;
  }

  img {
    margin: 20px 0;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #555;
  font-size: 14px;
`;

const Button = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const HomeButton = styled.a`
  display: inline-block;
  margin-bottom: 20px;
  color: #007bff;
  text-decoration: none;
  font-size: 26px;

  &:hover {
    text-decoration: underline;
  }
`;