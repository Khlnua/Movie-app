import { MovieImage } from "./MovieImage";
import { MoviesList } from "./MoviesList";
import { MoviesListCard } from "./MoviesListCard";

export const Movie = () => {
  return (
    <div>
      <MovieImage />
      <MoviesList />
      <MoviesListCard />
    </div>
  );
};
