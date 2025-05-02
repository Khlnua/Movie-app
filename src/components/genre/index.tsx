import { GenresLoading } from "./GenresLoading";
import { AllMoviesGenres } from "./AllMoviesGenres";

export const Genre = () => {
  return (
    <div>
      <AllMoviesGenres />
      <GenresLoading />
    </div>
  );
};
