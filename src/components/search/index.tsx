import React from "react";
import { SearchForOtherPage } from "./SearchForOtherPage";
import { SearchForSearchPage } from "./SearchForSearchPage";
import { SearchInput } from "./SearchInput";
import { SearchNoResultsFound } from "./SearchNoResultsFound";
import { SearchResultCard } from "./SearchResultCard";
import { SearchResultList } from "./SearchResultList";

export const Search = () => {
  return (
    <div>
      <SearchForOtherPage />
      <SearchForSearchPage />
      <SearchInput />
      <SearchNoResultsFound />
      <SearchResultCard />
      <SearchResultList />
    </div>
  );
};
