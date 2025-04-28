import { MovieImage } from "./MovieImage";
import { MoviesList } from "./MoviesList";
import { MoviesDetailPage } from "./MoviesDetailPage";

export const Movie = () => {
  return (
    <div>
      <MovieImage />
      <MoviesList />
      <MoviesDetailPage />
    </div>
  );
};
