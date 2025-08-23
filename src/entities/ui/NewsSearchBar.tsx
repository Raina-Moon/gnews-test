import React from "react";
import styled from "styled-components";

interface NewsSearchBarProps {
  query: string;
  onSearch: (query: string) => void;
}

const NewsSearchBar: React.FC<NewsSearchBarProps> = ({ query, onSearch }) => {
  return (
      <Input
        type="text"
        value={query}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search news..."
      />
  );
};

export default NewsSearchBar;


const Input = styled.input`
  width: 90%;
  margin: 0 auto;
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
