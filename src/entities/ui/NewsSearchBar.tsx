import React from "react";

interface NewsSearchBarProps {
  query: string;
  onSearch: (query: string) => void;
}

const NewsSearchBar: React.FC<NewsSearchBarProps> = ({ query, onSearch }) => {
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search news..."
        className="border p-2 rounded w-full mb-4"
      />
    </div>
  );
};

export default NewsSearchBar;
