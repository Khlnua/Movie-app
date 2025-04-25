import { MoviesByListCategory } from "./MoviesListByCategory";

export const HomeMoviesList = () => {
  return (
    <div className="flex flex-col">
      <MoviesByListCategory movieType="upcoming" />
      <MoviesByListCategory movieType="popular" />
      <MoviesByListCategory movieType="top_rated" />
    </div>
  );
};
