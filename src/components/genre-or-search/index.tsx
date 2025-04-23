import { Loading } from "./Loading";
import { MoviesBySearch } from "./MoviesBySearch";
import { NoResultFound } from "./NoResultFound";

export const genreOrSearch = () => {
  return (
    <div>
      <Loading />
      <MoviesBySearch />
      <MoviesBySearch />
      <NoResultFound />
    </div>
  );
};
