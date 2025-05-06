import { Loading } from "./Loading";
import { NoResultFound } from "./NoResultFound";

export const genreOrSearch = () => {
  return (
    <div>
      <Loading />

      <NoResultFound />
    </div>
  );
};
