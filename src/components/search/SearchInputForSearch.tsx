"use client";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { useMoviesBySearch } from "@/hooks/useMoviesBySearch";
import { useRouter } from "next/navigation";

type MovieData = {
  genre_ids: string[];
  id: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
};

export const SearchInputForSearch = () => {
  const { searchValue, setSearchValue, setMoviesResult, movies } =
    useMoviesBySearch();

  const router = useRouter();

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);

    const findMovies = movies.filter((movie: MovieData) => {
      movie.title.toLowerCase().startsWith(searchValue.toLocaleLowerCase());
    });

    setMoviesResult(findMovies);
    router.push(`/search?searchValue=${searchValue}`);
  };
  return (
    <div className="flex flex-col relative">
      <div className="shadow-xs flex items-center px-3 gap-[10px] h-9 md:border rounded-lg border-[#E4E4E7] bg-[#F4F4F5] dark:bg-[#27272A]">
        <Search className="size-4 text-[#71717A] ml-2" />
        <Input
          value={searchValue}
          onChange={handleSearchInput}
          placeholder="Search "
          className="text-[14px] w-auto font-normal"
        />
      </div>
    </div>
  );
};
