import React from "react";
import { SearchBar } from "./SearchBar";
import { SearchForOtherPage } from "./SearchForOtherPage";
import { SearchForSearchPage } from "./SearchForSearchPage";
import { SearchInput } from "./SearchInput";
import { SearchLoading } from "./SearchLoading";
import { SearchNoResultsFound } from "./SearchNoResultsFound";
import { SearchResultCard } from "./SearchResultCard";
import { SearchResultList } from "./SearchResultList";

export const Search = () => {
  return (
    <div>
      <SearchBar />
      <SearchForOtherPage />
      <SearchForSearchPage />
      <SearchInput />
      <SearchLoading />
      <SearchNoResultsFound />
      <SearchResultCard />
      <SearchResultList />
    </div>
  );
};
