"use client";
import { useFetchDataInClient } from "@/hooks/useFetchDataFromTMDB";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

type MoviesByListCategoryProps = {
  movieType: "upcoming" | "popular" | "top_rated";
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

export const MoviesByListCategory = ({
  movieType,
}: MoviesByListCategoryProps) => {
  const { data } = useFetchDataInClient(
    `/movie/${movieType}?language=en-US&page=1`
  );
  const movies: MovieData[] = data?.results ?? [];

  const router = useRouter();

  return (
    <div className="flex flex-col px-5 md:px-20">
      <div className="flex justify-between items-center">
        <h1 className="text-lg py-9 font-extrabold">
          {movieType.charAt(0).toUpperCase() + movieType.slice(1)}
        </h1>
        <Button className="font-medium text-sm">
          See more <ArrowRight />
        </Button>
      </div>
      <div className="grid grid-cols-2 grid-rows-4 gap-5 md:grid-cols-5 md:grid-rows-2 md:gap-9 ">
        {movies.slice(0, 10).map((movie: any) => (
          <div
            key={movie.id}
            onClick={() => router.push(`/detail/${movie.id}`)}
            className=" bg-[#F4F4F5] dark:bg-[#27272A] rounded-lg"
          >
            <img
              className="rounded-t-lg cursor-pointer h-80  md:h-100 w-full hover:opacity-70 "
              src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
            />
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
    </div>
  );
};
