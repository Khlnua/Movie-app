import { MovieZLogo } from "@/components/common/MovieZLogo";
import { AllMoviesGenres } from "@/components/genre/AllMoviesGenres";
import { ThemeToggleButtons } from "@/components/layouts/header/ThemeToggleButtons";
import { SearchInput } from "@/components/search/SearchInput";

export const SearchBar = () => {
  return (
    <div className="flex h-15 justify-around items-center px-2">
      <MovieZLogo />
      <div className="flex gap-2">
        <AllMoviesGenres />
        <SearchInput />
      </div>
      <ThemeToggleButtons />
    </div>
  );
};
