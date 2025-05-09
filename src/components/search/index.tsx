import { SearchForOtherPage } from "./SearchForOtherPage";
import { SearchForSearchPage } from "./SearchForSearchPage";
import { SearchInput } from "./SearchInput";
import { SearchInputForSearch } from "./SearchInputForSearch";

export const Search = () => {
  return (
    <div>
      <SearchForOtherPage />
      <SearchForSearchPage />
      <SearchInput />
      <SearchInputForSearch />
    </div>
  );
};
