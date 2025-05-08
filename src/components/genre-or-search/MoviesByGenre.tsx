"use client";
import { GenresLoading } from "@/components/genre/GenresLoading";
import { useFetchDataInClient } from "@/hooks/useFetchDataFromTMDB";
import { useURLSearchParams } from "@/hooks/useURLSearchParams";
import { cn } from "@/lib/utils";
import { ChevronRight, Star, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { DynamicPagination, NoResultsFound } from "../common";
import Image from "next/image";

type MoviesByGenreProps = {
  position: string;
};

type GenreTypes = {
  id: number;
  name: string;
};
type MovieData = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export const MoviesByGenre = ({
  position = "flex-row",
}: MoviesByGenreProps) => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? 1;

  const { push } = useRouter();
  const { selectedGenreIds, generateQueryParams } = useURLSearchParams();

  const { isLoading: genreLoad, data: dataGenres } = useFetchDataInClient(
    "/genre/movie/list?language=en"
  );
  const genres: GenreTypes[] = dataGenres?.genres ?? [];

  const { data: dataMovies } = useFetchDataInClient(
    `/discover/movie?language=en&with_genres=${selectedGenreIds}&page=${page}`
  );
  const movies: MovieData[] = dataMovies?.results ?? [];
  const totalPage = dataMovies?.total_pages;

  const handleGenreSelection = (genreId: string) => () => {
    const newPath = generateQueryParams(genreId);
    push(newPath);
  };

  if (genreLoad) {
    return <GenresLoading />;
  }

  if (!genres.length) {
    return null;
  }

  return (
    <div className={cn("md:flex md:px-10", position)}>
      <div className="w-[335px] md:w-[352px] border border-none rounded-lg mt-1.5 p-5 ">
        <div className="flex flex-col items-start w-[335px] h-15">
          <p className="font-semibold text-2xl">Genres</p>
          <p className="font-normal text-[16px]">
            See lists of movies by genre
          </p>
        </div>
        <div className="flex gap-4 flex-wrap w-[295px] md:w-[352px] mt-3">
          {genres.map(({ name, id }) => {
            const genreId = id.toString();
            const isSelected = selectedGenreIds.includes(genreId);
            return (
              <div
                className={cn(
                  "flex items-center font-semibold text-[12px] gap-0.5 py-0.5 pr-1 pl-2 border rounded-full cursor-pointer border-[#E4E4E7]",
                  isSelected &&
                    "bg-black text-white dark:bg-white dark:text-black"
                )}
                onClick={handleGenreSelection(genreId)}
                key={id}
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
      {movies.length === 0 ? (
        <NoResultsFound />
      ) : (
        <div>
          <p>{selectedGenreIds}</p>
          <div className="grid grid-cols-2 grid-rows-6 gap-5 md:grid-cols-4 md:grid-rows-3 md:gap-9 px-3 md:px-10 ">
            {movies.slice(0, 12).map((movie: MovieData) => (
              <div
                key={movie.id}
                onClick={() => push(`/detail/${movie.id}`)}
                className=" bg-[#F4F4F5] dark:bg-[#27272A] rounded-lg"
              >
                <div className="rounded-t-lg cursor-pointer h-80  md:h-100 w-full hover:opacity-70 relative ">
                  <Image
                    className="rounded-t-lg cursor-pointer h-80  md:h-100 w-full hover:opacity-70 "
                    src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    fill
                    alt={movie.title}
                  />
                </div>
                <div className="  py-4 pl-3 ">
                  <div className="flex ">
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
          <div className="pt-10 ">
            <DynamicPagination totalPage={Number(totalPage)} />
          </div>
        </div>
      )}
    </div>
  );
};
