import React from "react";
import styled from "styled-components";

interface NewsSearchBarProps {
  query: string;
  onSearch: (query: string) => void;
}

const NewsSearchBar: React.FC<NewsSearchBarProps> = ({ query, onSearch }) => {
  return (
    <BarWrapper>
      <Input
        type="text"
        value={query}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search news..."
      />
    </BarWrapper>
  );
};

export default NewsSearchBar;

const BarWrapper = styled.div`
  margin: 0 auto;
  max-width: 900px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;
