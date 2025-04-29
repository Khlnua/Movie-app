import { AllMoviesGenres } from "./AllMoviesGenres";
import { GenreDropdown } from "./GenreDropdown";
import { GenreDropdownTriggerButtons } from "./GenreDropdownTriggerButtons";
import { GenresLoading } from "./GenresLoading";

export const Genre = () => {
  return (
    <div>
      <AllMoviesGenres />
      <GenreDropdown />
      <GenreDropdownTriggerButtons />
      <GenresLoading />
    </div>
  );
};
