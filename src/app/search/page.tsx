"use client";

import { useState } from "react";
import { useFetchDataInClient } from "@/hooks/useFetchDataFromTMDB";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronRight, Star, X } from "lucide-react";
import { DynamicPagination, NoResultsFound } from "@/components/common";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";

type MovieDetailType = {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  runtime: number;
  poster_path: string;
  release_date: string;
  vote_average: number;
  popularity: number;
  genre_ids: number[];
  genres: { id: number; name: string }[];
};

type GenreTypes = {
  id: number;
  name: string;
};

const SearchPage = () => {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? 1;
  const searchValue = searchParams.get("searchValue");
  const [selectedGenresId, setSelectedGenresId] = useState<string[]>([]);

  const { data } = useFetchDataInClient(
    `/search/movie?query=${searchValue}&language=en-US&page=${page}`
  );
  const { data: dataGenres } = useFetchDataInClient(
    "/genre/movie/list?language=en"
  );

  const movies: MovieDetailType[] = data?.results ?? [];
  const genres: GenreTypes[] = dataGenres?.genres ?? [];
  const totalPage = data?.total_pages;
  const totalResult = data?.total_results;

  console.log(totalResult);

  const filteredMovies = movies.filter((movie: MovieDetailType) => {
    if (selectedGenresId.length === 0) return true;
    return movie.genre_ids.some((id: number) =>
      selectedGenresId.includes(id.toString())
    );
  });

  const handleGenreSelection = (genreId: string) => {
    setSelectedGenresId((selectedids) =>
      selectedids.includes(genreId)
        ? selectedids.filter((id) => id !== genreId)
        : [...selectedids, genreId]
    );
  };

  let movienum = 0;

  if (selectedGenresId.length === 0) {
    movienum = totalResult;
  } else {
    movienum = filteredMovies.length;
  }

  return (
    <div className="px-5 md:px-30 pt-15 md:pt-30 flex flex-col gap-10">
      <p className="font-semibold text-3xl">Search Results</p>

      <div className="flex gap-3 flex-col md:flex-row">
        <div className="flex flex-col gap-5">
          <p className="font-semibold text-[20px]">
            {movienum} results for "{searchValue}"
          </p>

          {filteredMovies.length === 0 ? (
            <NoResultsFound />
          ) : (
            <div className="grid grid-cols-2 grid-rows-6 gap-5 md:grid-cols-4 md:grid-rows-3 md:gap-9">
              {filteredMovies.map((movie: MovieDetailType, index: number) => (
                <div
                  key={index}
                  onClick={() => push(`/detail/${movie.id}`)}
                  className="bg-[#F4F4F5] dark:bg-[#27272A] rounded-lg"
                >
                  <div className="rounded-t-lg cursor-pointer h-80  md:h-100 w-full hover:opacity-70 relative ">
                    <Image
                      className="rounded-t-lg cursor-pointer h-80  md:h-100 w-full hover:opacity-70 "
                      src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`}
                      fill
                      alt={movie.title}
                    />
                  </div>
                  <div className="py-4 pl-3">
                    <div className="flex">
                      <Star className="text-[#FDE047] fill-[#FDE047] dark:text-[#F4F4F5] dark:fill-[#F4F4F5]" />
                      <span className="font-semibold">
                        {movie.vote_average.toFixed(1)}
                        <span className="font-normal text-gray-400">/10</span>
                      </span>
                    </div>
                    <p className="text-[18px] font-normal">{movie.title}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="pt-10 ">
            <DynamicPagination totalPage={Number(totalPage)} />
          </div>
        </div>

        <Separator className="border-t md:border-r  border-[#E4E4E7]" />
        <div className="w-[335px] md:w-[352px] border border-none rounded-lg mt-1.5 p-5">
          <p className="font-semibold text-2xl">Genres</p>
          <div className="flex gap-4 flex-wrap w-[295px] md:w-[352px] mt-3">
            {genres.map(({ name, id }) => {
              const genreId = id.toString();
              const isSelected = selectedGenresId.includes(genreId);

              return (
                <div
                  key={id}
                  className={cn(
                    "flex items-center font-semibold text-[12px] gap-0.5 py-0.5 pr-1 pl-2 border rounded-full cursor-pointer border-[#E4E4E7]",
                    isSelected &&
                      "bg-black text-white dark:bg-white dark:text-black"
                  )}
                  onClick={() => handleGenreSelection(genreId)}
                >
                  {name}
                  {isSelected ? (
                    <X size={16} className="ml-2" />
                  ) : (
                    <ChevronRight size={16} className="ml-2" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
