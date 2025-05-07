"use client";
import { ArrowRight, Search, Star } from "lucide-react";
import { Input } from "../ui/input";
import { useEffect } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useMoviesBySearch } from "@/hooks/useMoviesBySearch";

export const SearchInput = () => {
  const router = useRouter();

  const {
    searchResultRef,
    setSearchValue,
    searchValue,
    handleSearch,
    movies,
    onClickFoundMovie,
  } = useMoviesBySearch();

  useEffect(() => {
    const handleRefClick = (event: MouseEvent) => {
      if (
        searchResultRef.current &&
        !searchResultRef.current.contains(event.target as Node)
      ) {
        setSearchValue("");
      }
    };

    window.addEventListener("mousedown", handleRefClick);

    return () => {
      window.removeEventListener("mousedown", handleRefClick);
    };
  }, []);

  return (
    <div className="flex flex-col relative">
      <div className="shadow-xs flex items-center px-3 gap-[10px] h-9 md:border rounded-lg border-[#E4E4E7] bg-[#F4F4F5] dark:bg-[#27272A]">
        <Search className="size-4 text-[#71717A]  ml-2" />
        <Input
          value={searchValue}
          onChange={handleSearch}
          className="text-[14px] w-auto  font-normal"
        />
      </div>

      {searchValue && Boolean(movies.length) && (
        <div
          ref={searchResultRef}
          className="absolute z-110 top-10 -left-15  bg-[#F4F4F5] dark:bg-[#27272A] w-[335px] md:w-[577px] md:left-[-150px] p-3 rounded-lg"
        >
          <ul className="flex flex-col gap-3 md:w-[553px] items-start">
            {movies.slice(0, 5).map((movie: any, index: any) => (
              <li
                onClick={onClickFoundMovie(movie.id)}
                className="flex justify-center cursor-pointer hover:bg-gray-200 hover:dark:bg-slate-900 transition duration-300 rounded-sm py-1"
                key={index}
              >
                <div className="flex flex-col gap-1 pl-3">
                  <div className="flex gap-3 md:gap-8">
                    <img
                      src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`}
                      alt={movie.title}
                      className="h-25 w-[67px] rounded-md"
                    />
                    <div>
                      <div className="flex flex-col gap-1.5">
                        <p className="text-[20px] font-semibold">
                          {movie.title}
                        </p>
                        <div className="flex items-center ">
                          <Star
                            size={14}
                            className="text-[#FDE047] fill-[#FDE047] dark:text-[#F4F4F5] dark:fill-[#F4F4F5]"
                          />
                          <span className="font-medium text-sm">
                            {movie.vote_average.toFixed(1)}
                            <span className="font-normal text-gray-400">
                              /10
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center gap-16 md:gap-75 ">
                        <p className="font-medium text-sm">
                          {movie.release_date.slice(0, 4)}
                        </p>
                        <Button
                          onClick={() => router.push(`/detail/${movie.id}`)}
                          className="flex gap-2"
                        >
                          <p className="font-medium text-sm"> See more</p>
                          <ArrowRight size={16} />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <hr className="text-[#E4E4E7]" />
                </div>
              </li>
            ))}
          </ul>
          <Button onClick={() => router.push(`/search?query=${searchValue}`)}>
            See all results for
            <span className="font-semibold">
              "{searchValue.toLocaleUpperCase()}"
            </span>
          </Button>
        </div>
      )}
    </div>
  );
};
