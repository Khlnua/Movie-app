import { MoviesByGenre } from "@/components/genre-or-search/MoviesByGenre";

const SearchGenrePage = () => {
  return (
    <div className="min-h-screen pt-15">
      <p className="font-semibold text-3xl px-5 pt-5">Search filter</p>
      <MoviesByGenre position="flex-row" />
    </div>
  );
};

export default SearchGenrePage;
