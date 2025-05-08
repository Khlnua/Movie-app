"use client";

import { DynamicPagination } from "@/components/common";
import { useFetchDataInClient } from "@/hooks/useFetchDataFromTMDB";
import { Star } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

type MoviesByListCategoryProps = {
  movieType: "upcoming" | "popular" | "top_rated";
};
type MovieDetailType = {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  runtime: number;
  poster_path: string;
  release_date: string;
  original_title: string;
  vote_average: number;
  popularity: number;
  genres: { id: number; name: string }[];
};
const typesofmovies = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? 1;

  const movieType =
    (searchParams.get("movieType") as MoviesByListCategoryProps["movieType"]) ||
    "popular";

  const movieMap: Record<MoviesByListCategoryProps["movieType"], string> = {
    upcoming: "Upcoming",
    popular: "Popular",
    top_rated: "Top Rated",
  };

  const movieTitle = movieMap[movieType];

  const { isLoading, data } = useFetchDataInClient(
    `/movie/${movieType}?language=en-US&page=${page}`
  );
  const movies = data?.results ?? [];
  const totalPage = data?.total_pages;

  if (isLoading) {
  }

  return (
    <div className="flex flex-col w-full py-8 px-5 md:px-20 md:py-10 bg-white dark:bg-black gap-[32px] ">
      <h1 className="text-2xl font-bold mb-4 capitalize mt-10">{movieTitle}</h1>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-5 md:gap-8 md:m-10 ">
        {movies.map((movie: MovieDetailType) => (
          <div
            key={movie.id}
            className="shadow-md rounded-lg overflow-hidden flex flex-col gap-2 hover:opacity-75 cursor-pointer"
            onClick={() => router.push(`/detail/${movie.id}`)}
          >
            <div className="rounded-t-lg cursor-pointer h-80  md:h-100 w-full hover:opacity-70 relative ">
              <Image
                className="rounded-t-lg cursor-pointer h-80  md:h-100 w-full hover:opacity-70 "
                src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`}
                fill
                alt={movie.title}
              />
            </div>
            <div className="p-4 dark:bg-[#27272A]">
              <p className="flex gap-1 items-center">
                <Star className="size-4 text-amber-300 dark:text-white fill-amber-300 dark:fill-white" />
                {movie.vote_average.toFixed(1)}{" "}
                <span className="text-[16px] font-normal text-gray-500">
                  /10
                </span>
              </p>
              <h3 className="text-lg font-semibold">{movie.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <DynamicPagination totalPage={Number(totalPage)} />
    </div>
  );
};

export default typesofmovies;
